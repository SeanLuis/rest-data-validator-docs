---
layout: default
---

# Array Decorator

The `Array` decorator allows for the validation of array properties within classes, ensuring they meet specific criteria such as length and uniqueness, and even applying custom validation to each element.

## Properties

- **minLength**: `number` - Specifies the minimum length the array must have.
- **maxLength**: `number` - Defines the maximum length allowed for the array.
- **unique**: `boolean` - Ensures all elements in the array are unique.
- **validator**: `ValidatorFunction<T>` - A custom validation function to apply to each element in the array.

## Usage

To use the `Array`, apply it to array properties in your class, specifying the desired validation constraints.

### Example

```typescript
import { ClassValidator, Array } from "rest-data-validator";

@ClassValidator
class ShoppingCart {
  @Array({
    minLength: 1,
    unique: true,
    validator: (item) => {
      // Custom validation logic for each item
      return item.price > 0
        ? { isValid: true }
        : { isValid: false, errors: ["Price must be greater than 0"] };
    },
  })
  items: Array<{ id: number; price: number }>;
}
```

In this example, the `items` array must have at least one item, each item must be unique, and every item must satisfy the custom validation condition (price greater than 0).

### Applying Array

To apply the `Array`, you need to decorate your class property with `@Array` and provide the necessary validation options. This enables a declarative approach to specifying validation logic directly within your class models.

The `Array` is a powerful tool for ensuring data integrity for array properties, supporting both simple constraints and complex, element-wise validation.