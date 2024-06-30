---
layout: default
---

# Alpha Decorator and Validator

The `Alpha` decorator and the `validateAlpha` function are designed to validate that a string property contains only alphabetic characters (letters). This validation ensures that your string properties do not include numbers, symbols, or whitespace, making it ideal for validating names, codes, and other purely alphabetic inputs.

## Properties

- **locale**: `string` - Optional. Specifies the locale to use for validation. Different locales have different alphabetic characters. Defaults to `'en-US'`.
- **ignore**: `string | RegExp` - Optional. Characters to ignore during validation. This can be a string of characters or a regular expression.
- **message**: `string` - Optional. A custom error message that will be returned if the validation fails.

## Usage

To use the `Alpha` decorator, apply it to string properties in your class that are meant to contain only alphabetic characters. Below are detailed examples to help you understand how to use this decorator in various scenarios.

### Example 1: Basic Usage with Decorator

Suppose you want to ensure that a `name` property contains only letters:

```typescript
import { ClassValidator, Alpha } from "rest-data-validator";

@ClassValidator
class Person {
  @Alpha({ locale: 'en-US' })
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("JohnDoe");
// This will pass validation because "JohnDoe" contains only alphabetic characters.
```

In this example, the `name` property must contain only alphabetic characters. If it contains any numbers, symbols, or whitespace, a validation error will occur.

### Example 2: Basic Usage with Validator

You can also use the `validateAlpha` function directly for validation purposes:

```typescript
import { validateAlpha } from "rest-data-validator";

const name = "JohnDoe";
const result = validateAlpha(name, { locale: 'en-US' });

console.log(result.isValid); // true
console.log(result.errors); // []
```

### Example 3: Locale-Sensitive Validation

You can validate alphabetic characters based on different locales. This is useful for supporting names and words from various languages:

#### Decorator

```typescript
@Alpha({ locale: 'de-DE' })
name: string;

const person = new Person("ÄÖÜß");
// This will pass validation because "ÄÖÜß" contains valid alphabetic characters in the German locale.
```

#### Validator

```typescript
const name = "ÄÖÜß";
const result = validateAlpha(name, { locale: 'de-DE' });

console.log(result.isValid); // true
console.log(result.errors); // []
```

### Example 4: Ignoring Specific Characters

You can allow certain non-alphabetic characters to be ignored during validation by using the `ignore` option. This is useful for handling names with hyphens, spaces, or other specific characters:

#### Decorator

```typescript
@Alpha({ locale: 'en-US', ignore: '-' })
name: string;

const person = new Person("John-Doe");
// This will pass validation because the hyphen is ignored.
```

You can also use a regular expression to specify characters to ignore:

```typescript
@Alpha({ locale: 'en-US', ignore: /-/g })
name: string;

const person = new Person("John-Doe");
// This will pass validation because the hyphen is ignored using a regular expression.
```

#### Validator

```typescript
const name = "John-Doe";
const result = validateAlpha(name, { locale: 'en-US', ignore: '-' });

console.log(result.isValid); // true
console.log(result.errors); // []
```

### Example 5: Custom Error Messages

You can provide a custom error message to be used if the validation fails. This allows for more user-friendly feedback:

#### Decorator

```typescript
@Alpha({ locale: 'en-US', message: 'Name must contain only letters' })
name: string;

const person = new Person("John123");
// This will fail validation with the message: "Name must contain only letters".
```

#### Validator

```typescript
const name = "John123";
const result = validateAlpha(name, { locale: 'en-US', message: 'Name must contain only letters' });

console.log(result.isValid); // false
console.log(result.errors); // ["Name must contain only letters"]
```

### Example 6: Combining Options

You can combine the `locale` and `ignore` options to create more flexible validation rules:

#### Decorator

```typescript
@Alpha({ locale: 'en-US', ignore: ' ', message: 'Name must contain only letters and spaces are allowed' })
name: string;

const person = new Person("John Doe");
// This will pass validation because spaces are ignored.
```

#### Validator

```typescript
const name = "John Doe";
const result = validateAlpha(name, { locale: 'en-US', ignore: ' ', message: 'Name must contain only letters and spaces are allowed' });

console.log(result.isValid); // true
console.log(result.errors); // []
```

## Interfaces

### IAlphaValidationOptions

The `IAlphaValidationOptions` interface represents the options for the `Alpha` decorator and `validateAlpha` function.

```typescript
import { IValidationOptionsBase } from "./IValidationOptionsBase";

/**
 * The IAlphaValidationOptions interface represents the options for validating if a string contains only alphabetic characters.
 *
 * @interface
 * @property {string} [locale='en-US'] - Optional: The locale to use for validation. Defaults to 'en-US'.
 * @property {string | RegExp} [ignore] - Optional: Characters to ignore during validation.
 */
export interface IAlphaValidationOptions extends IValidationOptionsBase {
  locale?: string;
  ignore?: string | RegExp;
}
```

### IValidationOptionsBase

The `IValidationOptionsBase` interface represents common fields for validation options.

```typescript
/**
 * The IValidationOptionsBase interface represents common fields for validation options.
 *
 * @interface
 * @property {string} message - Optional: An error message to display if the validation fails. If not provided, a default error message is used.
 */
export interface IValidationOptionsBase {
  message?: string;
}
```

## Utility Functions

### assertString

The `assertString` utility function ensures that the input is a string.

```typescript
/**
 * Asserts that the input is a string.
 * Taken from: https://github.com/validatorjs/validator.js/blob/master/src/lib/util/assertString.js
 */
export const assertString = (input: any): void => {
  type InvalidType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null";
  let invalidType: InvalidType = typeof input;

  if (input === null) {
    invalidType = 'null';
  } else if (invalidType === 'object') {
    invalidType = input.constructor.name as InvalidType;
  }

  const isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError(`Expected a string but received a ${invalidType}`);
  }
};
```

### alpha

The `alpha` utility contains regular expressions for alphabetic validation by locale.

```typescript
/**
 * Regular expressions for alpha validation by locale.
 * Taken from: https://github.com/validatorjs/validator.js/blob/master/src/lib/alpha.js
 */
export const alpha: { [key: string]: RegExp } = {
  'en-US': /^[A-Z]+$/i,
  'az-AZ': /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  // (other locales)
};
```

## Conclusion

By using the `Alpha` decorator and the `validateAlpha` function, you can enforce that your string properties contain only alphabetic characters as required by your application's logic. This validation is flexible and can be customized with various options to fit different needs. The provided examples demonstrate how to use both the decorator and the validator in real-world scenarios, ensuring that your properties meet the required validation criteria.
