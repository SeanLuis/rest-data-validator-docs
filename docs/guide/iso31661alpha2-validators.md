---
layout: default
---

# ISO31661Alpha2 Decorator

The `ISO31661Alpha2` decorator is designed to validate that the value of a property matches a valid ISO 3166-1 alpha-2 country code. It ensures that your data conforms to specified country code constraints, enhancing type safety and data integrity in your applications.

## Properties

- **message**: `string` - Optional. A custom error message to be returned if the validation fails.

## Usage

To use the `ISO31661Alpha2`, apply it to properties in your class that are meant to hold ISO 3166-1 alpha-2 country codes.

### Example

Suppose you have a class representing a country:

```typescript
import { ClassValidator, ISO31661Alpha2 } from "rest-data-validator";

@ClassValidator
class Country {
  @ISO31661Alpha2({ message: 'Invalid country code' })
  code: string;

  constructor(code: string) {
    this.code = code;
  }
}
```

In this example, the `code` property must be a valid ISO 3166-1 alpha-2 country code. Attempting to assign any invalid value will result in a validation error.

### Custom Error Messages

You can also specify a custom error message to be used if the validation fails:

```typescript
@ISO31661Alpha2({ message: 'Invalid country code' })
code: string;
```

This will replace the default error message with "Invalid country code" if an invalid value is assigned to the `code` property.

## Validator Function

The `validateISO31661Alpha2` function can also be used directly to validate a value outside the context of a class decorator.

### Example

Suppose you need to validate a country code directly:

```typescript
import { validateISO31661Alpha2 } from "rest-data-validator";

const result = validateISO31661Alpha2('US', { message: 'Invalid country code' });
if (!result.isValid) {
  console.log(result.errors); // Outputs: []
}
```

In this example, the `validateISO31661Alpha2` function checks if the given value is a valid ISO 3166-1 alpha-2 country code and returns a validation result.

### Handling Invalid Country Codes

When validating country codes, it's important to handle invalid values gracefully. For example:

```typescript
const invalidResult = validateISO31661Alpha2('INVALIDCODE', { message: 'Invalid country code' });
if (!invalidResult.isValid) {
  console.log(invalidResult.errors); // Outputs: ['Invalid country code']
}
```

This ensures that any invalid country codes are properly caught and reported.

### Integration with Other Validators

The `ISO31661Alpha2` validator can be used in conjunction with other validators to enforce comprehensive data validation rules in your application:

```typescript
import { ClassValidator, BIC, ISO31661Alpha2 } from "rest-data-validator";

@ClassValidator
class Bank {
  @BIC({ message: 'Invalid BIC code' })
  code: string;

  @ISO31661Alpha2({ message: 'Invalid country code' })
  countryCode: string;

  constructor(code: string, countryCode: string) {
    this.code = code;
    this.countryCode = countryCode;
  }
}
```

In this example, both the BIC and country code properties are validated using their respective decorators.

## Conclusion

The `ISO31661Alpha2` decorator and `validateISO31661Alpha2` function provide a robust way to enforce ISO 3166-1 alpha-2 country code constraints in your TypeScript applications. By using these tools, you can ensure that your data is accurate and compliant with international standards. Whether you're working with class properties or validating values directly, the `ISO31661Alpha2` validator helps maintain the integrity and reliability of your geographical data.
