---
layout: default
---

# Date Decorator

The `Date` decorator is used to apply validations to date properties within classes in TypeScript, ensuring that the data meets specified criteria before being processed or stored.

## Properties

- **before**: `Date` - Specifies the latest date that is considered valid.
- **after**: `Date` - Specifies the earliest date that is considered valid.
- **format**: `string` - Specifies the expected format of the date string (useful when validating string representations of dates).

## Usage

To use the `Date` decorator, simply decorate your class's date properties with the desired constraints.

### Basic Example

```typescript
import { ClassValidator, Date } from "rest-data-validator";

@ClassValidator
class Event {
  @Date({
    after: new Date("2020-01-01"),
    before: new Date("2023-01-01"),
  })
  eventDate: Date;
}
```

In this example, `eventDate` must fall between January 1st, 2020, and January 1st, 2023.

### Validating Date Strings

```typescript
@ClassValidator
class Appointment {
  @Date({ format: "YYYY-MM-DD" })
  date: string;
}
```

Here, `date` must be a string that matches the specified format, `YYYY-MM-DD`.