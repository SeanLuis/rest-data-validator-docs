---
layout: default
---

# Accessors Decorator

The `Accessors` decorator is a convenient way to automatically create getters and setters for class properties. This simplifies the encapsulation of properties and promotes best practices with minimal boilerplate code.

## Usage

```typescript
import { Accessors } from "rest-data-validator";

@Accessors({ includePrivate: true })
class Example {
    private _property: string;

    constructor(property: string) {
        this._property = property;
    }
}
```

### Options

- `includePrivate`: Include private properties in accessor generation (default is `false`).
- `enumerable`: Mark properties as enumerable (default is `false`).
- `writable`: Mark properties as writable (default is `true`).
