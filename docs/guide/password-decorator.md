---
layout: default
---

# Password Decorator

The Password decorator is used to enforce validation on string properties that are intended to be used as passwords within classes in TypeScript. This ensures that the passwords adhere to specified security requirements before they are processed or stored.

## Properties

- **minLength**: `number` - Specifies the minimum length the password must be.
- **maxLength**: `number` - Specifies the maximum length the password can be.
- **mustContainLowercase**: `boolean` - Specifies whether the password must contain at least one lowercase letter.
- **mustContainUppercase**: `boolean` - Specifies whether the password must contain at least one uppercase letter.
- **mustContainNumber**: `boolean` - Specifies whether the password must contain at least one numeric character.
- **mustContainSpecialCharacter**: `boolean` - Specifies whether the password must contain at least one special character.
- **regexPattern**: `RegExp` - An optional regular expression pattern the password string must match. If not provided, basic character type validations are used.

## Usage

To utilize the Password decorator, ensure your TypeScript project is configured to use decorators. The Password decorator can be applied without any parameters for general password validation or with properties specified to enforce custom validation rules.

### Example

```typescript
import { ClassValidator, Password } from "rest-data-validator";

@ClassValidator
class UserAccount {
  @Password()
  password: string;
}

@ClassValidator
class SecureUserAccount {
  @Password({
    minLength: 8,
    maxLength: 20,
    mustContainLowercase: true,
    mustContainUppercase: true,
    mustContainNumber: true,
    mustContainSpecialCharacter: true,
    regexPattern: RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$')
  })
  password: string;
}
```

In the first example, the password field in the UserAccount class is validated against general password requirements. In the second example, the password field in the SecureUserAccount class must satisfy the specific security criteria provided, offering enhanced flexibility and security for diverse application needs.