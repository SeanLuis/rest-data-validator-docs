---
layout: default
---

# Custom Decorator

The `Custom` decorator provides a powerful way to define custom validation logic for properties within your classes. This decorator allows for the utmost flexibility by enabling the use of any validation function that you define, catering to complex or unique validation requirements that are not covered by the standard validators.

## Properties

- **name**: `string` - The name of the custom validator.
- **validate**: `(value: any) => boolean` - A custom function that takes the property value as input and returns a boolean indicating validity.

## Usage

To use the `Custom` decorator, apply it to any property in your class and provide a validation function that implements your specific validation logic.

### Example

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

@ClassValidator
class Product {
  @Custom({
    name: "PriceValidator",
    validate: (value: any): boolean => {
      return value > 0 && value < 100;
    },
  })
  price: number;
}
```
