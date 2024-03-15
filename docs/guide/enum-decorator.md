---
layout: default
---

# Enum Decorator

The `Enum` decorator is designed to validate that the value of a property matches one of the values defined in a TypeScript enumeration. It ensures that your data conforms to specified enum constraints, enhancing type safety and data integrity in your applications.

## Properties

- **enum**: `object` - The enumeration that the property value must be a part of.
- **message**: `string` - Optional. A custom error message to be returned if the validation fails.

## Usage

To use the `Enum`, apply it to properties in your class that are meant to hold values defined by specific TypeScript enums.

### Example

Suppose you have an enum representing user roles:

```typescript
enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}
```

You can use `Enum` to ensure that a user role property only accepts values defined in `UserRole`:

```typescript
import { ClassValidator, Enum } from "rest-data-validator";

@ClassValidator
class User {
  @Enum({ enum: UserRole })
  role: UserRole;
}
```

In this example, the `role` property must be one of the values specified in the `UserRole` enum. Attempting to assign any value not included in the enum will result in a validation error.

### Custom Error Messages

You can also specify a custom error message to be used if the validation fails:

```typescript
@Enum({ enum: UserRole, message: 'Invalid user role' })
role: UserRole;
```

This will replace the default error message with "Invalid user role" if an invalid value is assigned to the `role` property.