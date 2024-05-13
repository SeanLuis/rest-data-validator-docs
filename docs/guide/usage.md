---
layout: default
---

# Usage

Basic usage involves importing the validators and applying them to your data models:

```typescript
import { ClassValidator, String, Number, validate } from "rest-data-validator";

@ClassValidator
class User {
  @String({ minLength: 3, maxLength: 30 })
  name: string;

  @Number({ min: 18 })
  age: number;
}

const user = new User();
user.name = "John Doe";
user.age = 25;

// It would return true since the conditions are met, otherwise it would throw an exception.

// And using the validator manually
const beforeDate = new Date("2024-12-31");
const afterDate = new Date("2020-01-01");

const options = { before: beforeDate, after: afterDate };
const validDateString = "2022-06-15";
const validationResult = validateDate(validDateString, options).isValid;

console.log(validationResult); // false;
```

## Using Decorators for Validation

Decorators can be applied to class properties to specify the validation rules directly in the model definition:

```typescript
import {
  String,
  Number,
  Enum,
  ClassValidator,
  validate,
} from "rest-data-validator";

enum Role {
  Admin,
  User,
  Guest,
}

@ClassValidator
class UserProfile {
  @String({ minLength: 2, maxLength: 100 })
  username: string;

  @Number({ min: 1, max: 100 })
  level: number;

  @Enum({ enum: Role })
  role: Role;
}

const profile = new UserProfile();
profile.username = "validator";
profile.level = 5;
profile.role = Role.User;
```

## Custom Validation Rules

For more complex validation scenarios, custom validators can be created and used:

```typescript
import { ValidationResult, validateCustom } from "rest-data-validator";

function customUsernameValidator(value: string): ValidationResult {
  const isValid = /^[a-zA-Z0-9]+$/.test(value);
  return {
    isValid,
    errors: isValid
      ? []
      : ["Username must only contain alphanumeric characters."],
  };
}

const result = validateCustom("user123", customUsernameValidator);
console.log(result);
```

## Group-Based Validation

Group-based validation allows for conditional application of validation rules based on pre-defined groups. This feature is useful in scenarios where different validation logic is needed for different user types or roles.

### Example of Setting Up Group-Based Validation

```typescript
import { ContextValidation } from 'path/to/context-validation';
import { ClassValidator, String, Array } from 'path/to/validation-framework';

@ClassValidator
class Document {
    @Array({
        minLength: 1,
        maxLength: 5,
        unique: true,
        validator: (item: string) => ({ isValid: item.length >= 2, errors: item.length < 2 ? ['Item must have at least 2 characters'] : [] })
    }, { groups: ['ADMIN'] })
    entries: string[];

    constructor(entries: string[]) {
        this.entries = entries;
    }
}

// Set up groups based on user role
ContextValidation.getInstance().setGroups(['ADMIN']);

// Usage in an application
const doc = new Document(['Hello', 'World']);
```
