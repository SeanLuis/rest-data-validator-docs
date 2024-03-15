---
layout: default
---

# Getter Decorator

The `Getter` decorator simplifies the creation of a getter for a specific property, making it read-only by default but visible during property enumeration if specified.

## Usage

```typescript
import { Getter } from "rest-data-validator";

class Example {
    @Getter({ enumerable: true })
    private _property: string = 'default';
}
```

### Options

- `enumerable`: Make the getter enumerable (default is `true`).
