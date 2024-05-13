
# Group-Based Validation

## Overview
The Group-Based Validation feature introduced in [v2.0.14](/resources/changelog.html#v2-0-14-introducing-group-based-validation-for-enhanced-flexibility-and-security-13-5-2024) enhances the flexibility and security of our validation mechanisms by allowing validations to be applied conditionally based on user-defined groups. This is particularly useful in applications requiring differentiated access control and data validation rules based on user roles or other contexts.

## How It Works
The feature uses a context validation system where groups can be dynamically assigned and validations are performed based on these group settings. This allows for custom validation rules to be applied to different segments of users or data processes.

### Defining Validation Groups
Groups are defined in the `ContextValidation` class, which uses a singleton pattern to ensure that group settings are consistent across the application lifecycle.

```typescript
import { ContextValidation } from 'rest-data-validator';

// Setting groups
ContextValidation.getInstance().setGroups(['ADMIN', 'USER']);

// Getting current groups
const currentGroups = ContextValidation.getInstance().getGroups();
```

### Applying Group-Based Validations
To apply validations based on groups, use the decorator approach in your data transfer objects (DTOs). Here's an example with a class:

```typescript
import { ClassValidator, Array, ContextValidation } from 'rest-data-validator';

@ClassValidator
class TestClass {
    @Array({
        minLength: 2,
        maxLength: 4,
        unique: true,
        validator: (item: number) => ({
            isValid: item > 0,
            errors: item <= 0 ? ['Item must be greater than 0'] : []
        })
    }, { groups: ['ADMIN'] })  // This validation applies only to the 'ADMIN' group
    public numbers: number[];

    constructor(numbers: number[]) {
        this.numbers = numbers;
    }
}
```

## Integration in Express Applications
In an Express application, integrate group-based validation by setting the validation groups per request, typically based on the authenticated user's roles:

```javascript
const express = require('express');
const { ContextValidation } = require('rest-data-validator');
const app = express();

// Middleware to set validation groups based on user roles
app.use((req, res, next) => {
    const userRoles = req.user.roles;  // Assume 'roles' is available on 'req.user'
    ContextValidation.getInstance().setGroups(userRoles);
    next();
});

// Endpoint that uses the TestClass with group-based validation
app.post('/validate', (req, res) => {
    try {
        const inputNumbers = new TestClass(req.body.numbers);
        // Proceed with your business logic
        res.send('Validation successful');
    } catch (error) {
        res.status(400).send('Validation failed');
    }
});
```

## Conclusion
Group-based validation is a powerful feature that enhances the security and customizability of applications by allowing for context-specific validation rules. It supports a wide range of applications from simple form validations to complex business logic involving multi-tier user roles and permissions.
