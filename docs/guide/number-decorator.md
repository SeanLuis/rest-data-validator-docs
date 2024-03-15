---
layout: default
---

# Number Decorator

The `Number` decorator is used to apply validations to numerical properties within classes in TypeScript, ensuring that data meets certain specified criteria before being processed or stored.

## Properties

- **min**: `number` - Specifies the minimum value that the number must have.
- **max**: `number` - Defines the maximum value allowed for the number.
- **integerOnly**: `boolean` - Indicates whether only integers are allowed (`true`) or float numbers are allowed (`false`).
- **positiveOnly**: `boolean` - Indicates whether only positive numbers are allowed.
- **negativeOnly**: `boolean` - Indicates whether only negative numbers are allowed.
- **divisibleBy**: `number` - Specifies a value by which the number must be divisible.

## Usage

To use the `NumberValidator` decorator, simply decorate the numeric properties of your classes with the desired constraints.

### Basic Example

```typescript
import { ClassValidator, Number } from "rest-data-validator";

@ClassValidator
class Product {
  @Number({ min: 0 })
  price: number;

  @Number({ integerOnly: true, min: 1 })
  stock: number;
}
```

In this example, `price` must be a non-negative number, while `stock` must be a positive integer.

## Validation of Divisible Numbers

```typescript
@ClassValidator
class Measurement {
  @Number({ divisibleBy: 0.5 })
  length: number;
}
```
Here, `length` must be a number divisible by 0.5, allowing values like 1.5, 2.0, 2.5, etc.