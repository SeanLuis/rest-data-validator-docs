# Comparison between `validator.js` and `rest-data-validator`

## Introduction

When it comes to data validation in JavaScript, two powerful libraries stand out: `validator.js` and `rest-data-validator`. While `validator.js` offers a robust set of string validation functions, `rest-data-validator` provides a more flexible and comprehensive approach to data validation, allowing for contextual and custom validations. This document compares these two libraries using real-world examples to showcase their capabilities.

## Table of Contents

- [Comparison between `validator.js` and `rest-data-validator`](#comparison-between-validatorjs-and-rest-data-validator)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Resume](#resume)
    - [`valdiator.js`](#valdiatorjs)
    - [`rest-data-validator`](#rest-data-validator)
    - [Summary](#summary)
  - [Basic String Validation](#basic-string-validation)
    - [`validatorjs`](#validatorjs)
    - [`rest-data-validator`](#rest-data-validator-1)
  - [Complex Password Validation](#complex-password-validation)
    - [`validator.js`](#validatorjs-1)
    - [`rest-data-validator`](#rest-data-validator-2)
  - [Contextual Validation](#contextual-validation)
    - [`validator.js`](#validatorjs-2)
    - [`rest-data-validator`](#rest-data-validator-3)
  - [Summary](#summary-1)
  - [Specific Validator Comparisons](#specific-validator-comparisons)
    - [`contains`](#contains)
      - [`validator.js`](#validatorjs-3)
      - [`rest-data-validator`](#rest-data-validator-4)
    - [`equals`](#equals)
      - [`validator.js`](#validatorjs-4)
      - [`rest-data-validator`](#rest-data-validator-5)
    - [`isAfter`](#isafter)
      - [`validator.js`](#validatorjs-5)
      - [`rest-data-validator`](#rest-data-validator-6)
    - [`isAlpha`](#isalpha)
      - [`validator.js`](#validatorjs-6)
      - [`rest-data-validator`](#rest-data-validator-7)
    - [`isAlphanumeric`](#isalphanumeric)
      - [`validator.js`](#validatorjs-7)
      - [`rest-data-validator`](#rest-data-validator-8)
  - [Summary](#summary-2)

## Resume

### `valdiator.js`

**Advantages:**
1. **Simplicity and Ease of Use:** It is straightforward to use with predefined functions for common validations.
2. **Widely Used:** It has a large and established user base, meaning more resources and examples are available.
3. **Lightweight:** Ideal for projects where only basic validations are needed and additional overhead is not desired.

**Disadvantages:**
1. **Limited to Strings:** Primarily designed to validate strings.
2. **Lack of Flexibility:** Complex or contextual validations may require additional custom logic.

### `rest-data-validator`

**Advantages:**
1. **Flexibility:** Allows creating custom and contextual validations, which is extremely useful for applications with complex validation needs.
2. **Support for Decorators:** Uses decorators to apply validations, which can make the code cleaner and more modular.
3. **Dynamic Context Handling:** Can handle context-based validations, which is useful in applications where validation rules may change dynamically.

**Disadvantages:**
1. **Learning Curve:** It can be more complex to learn and use compared to `validator.js`, especially for developers new to TypeScript and decorators.
2. **Overhead:** For simple projects, it may be overkill and add unnecessary complexity.

### Summary

**For Simple Projects:**
- **`validator.js`** is more suitable due to its simplicity and ease of use. It is perfect for applications where only basic validations are needed and complex validation rules are not required.

**For Complex Projects:**
- **`rest-data-validator`** excels in scenarios where flexibility and contextual validations are needed. It is a more powerful choice for enterprise applications or projects where validation rules are complex and may change dynamically.

## Basic String Validation

### `validatorjs`

With `validator.js`, you can easily validate strings with predefined functions:

```javascript
const validator = require('validator');

validator.isEmail('foo@bar.com'); //=> true
validator.isNumeric('12345'); //=> true
validator.isURL('https://example.com'); //=> true
```

### `rest-data-validator`

In `rest-data-validator`, you define custom validation options and apply them using decorators:

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

const customEmailValidation = {
    name: 'EmailCheck',
    validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
};

@ClassValidator
class User {
    @Custom(customEmailValidation)
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

// Usage
const user = new User('foo@bar.com');
```

## Complex Password Validation

### `validator.js`

For complex password validation, you would need to combine several functions:

```javascript
const validator = require('validator');

function isStrongPassword(password) {
    return validator.isLength(password, { min: 8 }) &&
           validator.matches(password, /[A-Z]/) &&
           validator.matches(password, /[a-z]/) &&
           validator.matches(password, /\d/) &&
           validator.matches(password, /[!@#$%^&*(),.?":{}|<>]/);
}

isStrongPassword('Abc123!@'); //=> true
```

### `rest-data-validator`

With `rest-data-validator`, you can create reusable custom validations:

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

const customValidations = [
    {
        name: 'LengthCheck',
        validate: (value: any) => value.length >= 8,
    },
    {
        name: 'UppercaseCheck',
        validate: (value: any) => /[A-Z]/.test(value),
    },
    {
        name: 'LowercaseCheck',
        validate: (value: any) => /[a-z]/.test(value),
    },
    {
        name: 'DigitCheck',
        validate: (value: any) => /\d/.test(value),
    },
    {
        name: 'SpecialCharacterCheck',
        validate: (value: any) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    },
];

@ClassValidator
class User {
    @Custom(customValidations)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

// Usage
const user = new User('Abc123!@');
```

## Contextual Validation

### `validator.js`

`validator.js` does not support contextual validation directly. You would need to manually implement context checks.

### `rest-data-validator`

`rest-data-validator` supports advanced contextual validation:

```typescript
import "reflect-metadata";
import { ClassValidator, Contextual, setContext, getContext, clearContext } from "rest-data-validator";

@ClassValidator
class SecureDocument {
    @Contextual({
        name: "UserRoleValidator",
        getContext: () => getContext("documentAccess"),
        validate: (value, context) => context.userRole === "admin",
        message: "User does not have admin role.",
    })
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

// Setup context
setContext("documentAccess", { userRole: "admin" });

// Usage
const doc = new SecureDocument("Top Secret Document");
```

## Summary

Both `validator.js` and `rest-data-validator` offer robust validation solutions for JavaScript applications. However, `rest-data-validator` provides greater flexibility and power with its support for custom and contextual validations, making it a superior choice for complex validation scenarios.

## Specific Validator Comparisons

### `contains`

#### `validator.js`

```javascript
const validator = require('validator');

validator.contains('foobar', 'foo'); //=> true
```

#### `rest-data-validator`

Using a custom validator without decorators:

```typescript
import { validateCustom } from "rest-data-validator";

const containsValidation = {
    name: 'ContainsCheck',
    validate: (value, seed) => value.includes(seed),
};

const result = validateCustom('foobar', { ...containsValidation, seed: 'foo' });
console.log(result.isValid); //=> true
```

Using a decorator:

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

const containsValidationDecorator = {
    name: 'ContainsCheck',
    validate: (value, seed) => value.includes(seed),
};

@ClassValidator
class StringCheck {
    @Custom({ ...containsValidationDecorator, seed: 'foo' })
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

// Usage
const stringCheck = new StringCheck('foobar');
```

### `equals`

#### `validator.js`

```javascript
const validator = require('validator');

validator.equals('123', '123'); //=> true
```

#### `rest-data-validator`

Using a custom validator without decorators:

```typescript
import { validateCustom } from "rest-data-validator";

const equalsValidation = {
    name: 'EqualsCheck',
    validate: (value, comparison) => value === comparison,
};

const result = validateCustom('123', { ...equalsValidation, comparison: '123' });
console.log(result.isValid); //=> true
```

Using a decorator:

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

const equalsValidationDecorator = {
    name: 'EqualsCheck',
    validate: (value, comparison) => value === comparison,
};

@ClassValidator
class EqualsCheck {
    @Custom({ ...equalsValidationDecorator, comparison: '123' })
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

// Usage
const equalsCheck = new EqualsCheck('123');
```

### `isAfter`

#### `validator.js`

```javascript
const validator = require('validator');

validator.isAfter('2020-01-01', '2019-12-31'); //=> true
```

#### `rest-data-validator`

Using a custom validator without decorators:

```typescript
import { validateCustom } from "rest-data-validator";

const isAfterValidation = {
    name: 'IsAfterCheck',
    validate: (value, comparisonDate) => new Date(value) > new Date(comparisonDate),
};

const result = validateCustom('2020-01-01', { ...isAfterValidation, comparisonDate: '2019-12-31' });
console.log(result.isValid); //=> true
```

Using a decorator:

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

const isAfterValidationDecorator = {
    name: 'IsAfterCheck',
    validate: (value, comparisonDate) => new Date(value) > new Date(comparisonDate),
};

@ClassValidator
class DateCheck {
    @Custom({ ...isAfterValidationDecorator, comparisonDate: '2019-12-31' })
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

// Usage
const dateCheck = new DateCheck('2020-01-01');
```

### `isAlpha`

#### `validator.js`

```javascript
const validator = require('validator');

validator.isAlpha('abc'); //=> true
```

#### `rest-data-validator`

Using a custom validator without decorators:

```typescript
import { validateCustom } from "rest-data-validator";

const isAlphaValidation = {
    name: 'IsAlphaCheck',
    validate: (value) => /^[a-zA-Z]+$/.test(value),
};

const result = validateCustom('abc', isAlphaValidation);
console.log(result.isValid); //=> true
```

Using a decorator:

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

const isAlphaValidationDecorator = {
    name: 'IsAlphaCheck',
    validate: (value) => /^[a-zA-Z]+$/.test(value),
};

@ClassValidator
class AlphaCheck {
    @Custom(isAlphaValidationDecorator)
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

// Usage
const alphaCheck = new AlphaCheck('abc');
```

### `isAlphanumeric`

#### `validator.js`

```javascript
const validator = require('validator');

validator.isAlphanumeric('abc123'); //=> true
```

#### `rest-data-validator`

Using a custom validator without decorators:

```typescript
import { validateCustom } from "rest-data-validator";

const isAlphanumericValidation = {
    name: 'IsAlphanumericCheck',
    validate: (value) => /^[a-zA-Z0-9]+$/.test(value),
};

const result = validateCustom('abc123', isAlphanumericValidation);
console.log(result.isValid); //=> true
```

Using a decorator:

```typescript
import { ClassValidator, Custom } from "rest-data-validator";

const isAlphanumericValidationDecorator = {
    name: 'IsAlphanumericCheck',
    validate: (value) => /^[a-zA-Z0-9]+$/.test(value),
};

@ClassValidator
class AlphanumericCheck {
    @Custom(isAlphanumericValidationDecorator)
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

// Usage
const alphanumericCheck = new AlphanumericCheck('abc123');
```

## Summary

Both `validator.js` and `rest-data-validator` offer robust validation solutions for JavaScript applications. However, `rest-data-validator` provides greater flexibility and power with its support for custom and contextual validations, making it a superior choice for complex validation scenarios.
