---
layout: default
---

# String Decorator

The `String` decorator is used to apply validations to string properties within classes in TypeScript, ensuring that data meets certain specified criteria before being processed or stored.

## Properties

- **minLength**: `number` - Specifies the minimum length the string must be.
- **maxLength**: `number` - Defines the maximum length allowed for the string.
- **regexPattern**: `RegExp` - A regular expression pattern that the string must conform to.

## Usage

To use the `String` decorator, you must first make sure your project is configured to use decorators in TypeScript.

### Basic Example

```typescript
import { ClassValidator, String } from "rest-data-validator";

@ClassValidator
class Post {
  @String({ minLength: 10, maxLength: 100 })
  title: string;

  @String({ regexPattern: /^[a-zA-Z0-9 ]+$/ })
  content: string;
}
```

In this example, `title` must be between 10 and 100 characters, while `content` must match the specified pattern and cannot be empty.