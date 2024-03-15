---
layout: default
---

# Setter Decorator

The `Setter` decorator allows for the automatic creation of a setter for a specific property, giving you the ability to control the writability of a property dynamically.

## Usage

```typescript
import { Setter } from "rest-data-validator";

class Example {
    @Setter({ writable: true })
    private _property: string = 'default';
}
```

### Options

- `writable`: Make the setter writable (default is `true`).

These decorators and interfaces form part of the `rest-data-validator`'s effort to streamline the property management within classes, focusing on clean, maintainable, and efficient code.
