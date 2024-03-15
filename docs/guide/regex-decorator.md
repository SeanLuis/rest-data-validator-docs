---
layout: default
---

# Regex Decorator

The `Regex` decorator allows for the validation of string properties against a specified regular expression pattern. This ensures that the property value conforms to a specific format, making it incredibly useful for validating emails, phone numbers, URLs, and more.

## Properties

- **pattern**: `RegExp` - The regular expression pattern the string must match.
- **flags**: `string` - Optional flags to apply to the pattern, such as 'i' for case-insensitive matching.
- **message**: `string` - A custom error message to return if the validation fails.
- **invertMatch**: `boolean` - If set to `true`, the validation succeeds only if the string does NOT match the pattern.
- **testAgainstTrimmedValue**: `boolean` - Determines whether to test the trimmed value of the string.
- **allowEmptyString**: `boolean` - Determines whether an empty string should be considered a valid value.

## Usage

To use the `RegexValidator`, apply it to any string property in your class that needs to match a specific pattern.

### Example

```typescript
import { ClassValidator, Regex } from "rest-data-validator";

@ClassValidator
class User {
  @Regex({
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Invalid email format",
  })
  email: string;
}
```

In this example, the `email` property must match the specified pattern, ensuring it follows a valid email format.

### Inverting Match

```typescript
@Regex({ pattern: /example/, invertMatch: true, message: 'Value must not contain "example"' })
value: string;
```

This configuration ensures that the validation passes only if the string does not contain the word "example".

### Testing Against Trimmed Value

```typescript
@Regex({ pattern: /^\d+$/, testAgainstTrimmedValue: true })
value: string;
```

This ensures that the string, when trimmed, consists only of digits, making it suitable for numeric IDs or codes that might have accidental whitespace.
