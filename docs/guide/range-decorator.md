---
layout: default
---

# Range Decorator

The `Range` decorator is designed to validate numerical or date properties within classes, ensuring they fall within a specified range. This decorator is versatile, supporting both numbers and dates, making it ideal for a wide variety of validation scenarios.

## Properties

- **min**: `number | Date` - Specifies the minimum allowed value or date.
- **max**: `number | Date` - Specifies the maximum allowed value or date.
- **inclusive**: `boolean` - Determines whether the range includes the `min` and `max` values (inclusive) or not (exclusive).
- **step**: `number` - For numerical values, specifies the step interval between valid values.
- **dateFormat**: `string` - For date values, specifies the expected format of the date string.
- **customValidator**: `(value: number | Date) => boolean` - Allows for a custom validation function.

## Usage

To use the `Range`, apply it to numerical or date properties in your classes, specifying the desired range and other criteria.

### Example for Numbers

```typescript
import { ClassValidator, Range } from "rest-data-validator";

@ClassValidator
class Product {
  @Range({ min: 0, max: 100, step: 10, inclusive: true })
  discountPercentage: number;
}
```

In this example, `discountPercentage` must be a number between 0 and 100, inclusive, and it must be a multiple of 10.

### Example for Dates

```typescript
@ClassValidator
class Event {
  @Range({
    min: new Date("2020-01-01"),
    max: new Date("2023-01-01"),
    inclusive: true,
  })
  eventDate: Date;
}
```

Here, `eventDate` must fall between January 1, 2020, and January 1, 2023, inclusive.

### Custom Validation

```typescript
@Range({
    min: 10,
    max: 20,
    customValidator: (value) => value % 2 === 0 // Must be even
})
value: number;
```

This allows for additional custom validation logic, such as ensuring a number is even within a specified range.