---
layout: default
---

# Email Decorator

The Email decorator is utilized to enforce validation on string properties that are expected to represent email addresses within classes in TypeScript. This ensures that the email addresses conform to a specified format or standard pattern before they are processed or stored.

## Properties

- **regexPattern**: `RegExp` - An optional regular expression pattern that the email string must match. If not provided, a default email validation pattern is used.
  
## Usage

To leverage the Email decorator, ensure your TypeScript project is set up to utilize decorators. The Email decorator can be used without any parameters for standard email validation or with a regexPattern to specify a custom validation pattern.

### Example

```typescript
import { ClassValidator, Email } from "rest-data-validator";

@ClassValidator
class UserProfile {
  @Email()
  email: string;
}

@ClassValidator
class CustomEmailProfile {
  @Email({ regexPattern: RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$') })
  email: string;
}
```

In the first example, the email field in the UserProfile class is validated against a default pattern to ensure it represents a valid email address.
In the second one, the email field must match the custom pattern provided, offering flexibility for different use cases or stricter validation requirements.