---
layout: default
---

# Contextual Validator

The Contextual Validator is a flexible and powerful tool in the TypeScript validation library that enables dynamic validation based on the context of the data. This validator is particularly useful for scenarios where the validation logic depends on certain conditions or the environment in which the data exists.

## How It Works

The Contextual Validator uses a context object that is passed along with the value to be validated. The context provides additional information that influences the validation process, such as user roles, dates, location, and more.

### Key Features

- **Dynamic Context**: Change the validation rules on-the-fly by altering the context.
- **Multiple Contexts**: Manage and apply different contexts for different validation scenarios.
- **Combinable**: Use alongside other validators like `String` or `Number` to create complex validation logic.

### Test Cases

- Validate that water usage is within limits for crops that require less water.
- Deny a harvest date that falls before the actual planting date.
- Restrict the use of pesticides not on the allowed list.
- Ensure the batch quantity is within the specified range.
- Check for valid batch ID length.

## Contextual Validators

### Direct Use of the validateContextual Function

For scenarios where you need to validate data outside the context of a class, you can directly use the `validateContextual` function. This approach provides flexibility for validating data structures or values dynamically based on a provided context.

### Basic Usage

```typescript
import { validateContextual } from "rest-data-validator";
import { IContextualValidationOptions } from 'rest-data-validator/interfaces/IContextualValidationOptions';

const validationOptions: IContextualValidationOptions = {
  name: "UserRoleCheck",
  getContext: () => ({ userRole: "admin" }),
  validate: (value, context) => value === "secret" && context.userRole === "admin",
};

const result = validateContextual("secret", validationOptions);
if (!result.isValid) {
  console.error("Validation failed:", result.errors);
}
```

### Context Management

Dynamically manage the validation context using `setContext`, `getContext`, and other context management utilities provided by your validation library.

### Advanced Validation Scenarios

Discuss potential advanced use cases such as multi-step validations, conditional validations based on user roles, environmental conditions, etc.

For detailed guides, examples, and more advanced usage scenarios, please refer to the specific documentation within your validation library. This documentation should be adapted to include your library's specific import paths and utility functions.

## Potential Use Cases

### Agriculture Traceability

Track and validate different stages of crop production, ensuring that each batch meets the required standards for planting and harvesting times, pesticide use, water usage, and quantity.

### Blockchain Transactions

Verify blockchain transactions, such as Ethereum, by validating the context such as the correct wallet addresses, transaction times within a certain block confirmation window, and the amount transferred against wallet balance.

### Healthcare Management

In healthcare applications, validate patient records contextually based on admission dates, treatment types, and medication dosages according to individual health plans and protocols.

## Conclusion

The Contextual Validator, with its dynamic and versatile nature, is ideal for any application that requires contextual awareness in its validation logic, ensuring data integrity and adherence to business rules and standards.
