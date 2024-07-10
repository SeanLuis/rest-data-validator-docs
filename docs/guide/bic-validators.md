---
layout: default
---

# BIC Decorator

The `BIC` decorator is designed to validate that the value of a property matches a valid BIC (Bank Identification Code) or SWIFT code. It ensures that your data conforms to specified BIC constraints, enhancing type safety and data integrity in your applications.

## Properties

- **message**: `string` - Optional. A custom error message to be returned if the validation fails.

## Usage

To use the `BIC`, apply it to properties in your class that are meant to hold BIC codes.

### Example

Suppose you have a class representing a bank:

```typescript
import { ClassValidator, BIC } from "rest-data-validator";

@ClassValidator
class Bank {
  @BIC({ message: 'Invalid BIC code' })
  code: string;

  constructor(code: string) {
    this.code = code;
  }
}
```

In this example, the `code` property must be a valid BIC. Attempting to assign any invalid value will result in a validation error.

### Custom Error Messages

You can also specify a custom error message to be used if the validation fails:

```typescript
@BIC({ message: 'Invalid BIC code' })
code: string;
```

This will replace the default error message with "Invalid BIC code" if an invalid value is assigned to the `code` property.

## Validator Function

The `validateBIC` function can also be used directly to validate a value outside the context of a class decorator.

### Example

Suppose you need to validate a BIC directly:

```typescript
import { validateBIC } from "rest-data-validator";

const result = validateBIC('DEUTDEFF', { message: 'Invalid BIC code' });
if (!result.isValid) {
  console.log(result.errors); // Outputs: []
}
```

In this example, the `validateBIC` function checks if the given value is a valid BIC and returns a validation result.

### Handling Invalid BICs

When validating BICs, it's important to handle invalid values gracefully. For example:

```typescript
const invalidResult = validateBIC('INVALIDBIC', { message: 'Invalid BIC code' });
if (!invalidResult.isValid) {
  console.log(invalidResult.errors); // Outputs: ['Invalid BIC code']
}
```

This ensures that any invalid BICs are properly caught and reported.

### Integration with Other Validators

The `BIC` validator can be used in conjunction with other validators to enforce comprehensive data validation rules in your application:

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

The `BIC` decorator and `validateBIC` function provide a robust way to enforce BIC constraints in your TypeScript applications. By using these tools, you can ensure that your data is accurate and compliant with industry standards. Whether you're working with class properties or validating values directly, the `BIC` validator helps maintain the integrity and reliability of your financial data.
