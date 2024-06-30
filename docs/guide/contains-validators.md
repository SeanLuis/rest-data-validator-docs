---
layout: default
---

# Contains Decorator and Validator

The `Contains` decorator and the `validateContains` function are designed to validate that a string property contains a specific substring (referred to as "seed") a minimum number of times. This validation ensures that certain substrings are present in your string properties, which can be useful for various scenarios such as ensuring that important keywords are included in text fields.

## Properties

- **seed**: `string` - The substring that the property value must contain. This is the main part of the validation process.
- **ignoreCase**: `boolean` - Optional. If set to `true`, the comparison will ignore case differences. This means "Example" and "example" will be considered a match. Defaults to `false`.
- **minOccurrences**: `number` - Optional. The minimum number of times the seed must occur in the property value. For instance, if set to `2`, the seed must appear at least twice in the string. Defaults to `1`.
- **message**: `string` - Optional. A custom error message that will be returned if the validation fails. If not provided, a default error message will be used.

## Usage

To use the `Contains` decorator, apply it to string properties in your class that are meant to contain specific substrings. Below are detailed examples to help you understand how to use this decorator in various scenarios.

### Example 1: Basic Usage with Decorator

Suppose you want to ensure that a `description` property contains the substring "important":

```typescript
import { ClassValidator, Contains } from "rest-data-validator";

@ClassValidator
class Document {
  @Contains({ seed: 'important' })
  description: string;

  constructor(description: string) {
    this.description = description;
  }
}

const doc = new Document("This is an important document.");
// This will pass validation because "important" is present in the description.
```

In this example, the `description` property must contain the substring "important". If it does not, a validation error will occur.

### Example 2: Basic Usage with Validator

You can also use the `validateContains` function directly for validation purposes:

```typescript
import { validateContains } from "rest-data-validator";

const description = "This is an important document.";
const result = validateContains(description, { seed: 'important' });

console.log(result.isValid); // true
console.log(result.errors); // []
```

### Example 3: Case Insensitivity

You can make the comparison case-insensitive by setting the `ignoreCase` option to `true`. This is useful when the substring might appear in different cases:

#### Decorator

```typescript
@Contains({ seed: 'important', ignoreCase: true })
description: string;

const doc = new Document("This is an Important document.");
// This will pass validation because "Important" matches "important" when case is ignored.
```

#### Validator

```typescript
const description = "This is an Important document.";
const result = validateContains(description, { seed: 'important', ignoreCase: true });

console.log(result.isValid); // true
console.log(result.errors); // []
```

### Example 4: Minimum Occurrences

You can specify the minimum number of times the seed must occur in the property value using the `minOccurrences` option. This is useful for ensuring repeated mentions of a keyword:

#### Decorator

```typescript
@Contains({ seed: 'important', minOccurrences: 2 })
description: string;

const doc1 = new Document("This is an important and very important document.");
// This will pass validation because "important" appears twice.

const doc2 = new Document("This is an important document.");
// This will fail validation because "important" appears only once.
```

#### Validator

```typescript
const description1 = "This is an important and very important document.";
const result1 = validateContains(description1, { seed: 'important', minOccurrences: 2 });

console.log(result1.isValid); // true
console.log(result1.errors); // []

const description2 = "This is an important document.";
const result2 = validateContains(description2, { seed: 'important', minOccurrences: 2 });

console.log(result2.isValid); // false
console.log(result2.errors); // ["String does not contain the seed 'important' at least 2 times."]
```

### Example 5: Custom Error Messages

You can also specify a custom error message to be used if the validation fails. This allows you to provide more user-friendly feedback:

#### Decorator

```typescript
@Contains({ seed: 'important', message: 'Description must contain the word "important"' })
description: string;

const doc = new Document("This is a trivial document.");
// This will fail validation with the message: "Description must contain the word 'important'".
```

#### Validator

```typescript
const description = "This is a trivial document.";
const result = validateContains(description, { seed: 'important', message: 'Description must contain the word "important"' });

console.log(result.isValid); // false
console.log(result.errors); // ["Description must contain the word 'important'"]
```

### Example 6: Combining Options

You can combine the `ignoreCase` and `minOccurrences` options to create more flexible validation rules:

#### Decorator

```typescript
@Contains({ seed: 'important', ignoreCase: true, minOccurrences: 2, message: 'Description must contain the word "important" at least twice' })
description: string;

const doc = new Document("This is an Important document and another important note.");
// This will pass validation because "Important" and "important" are considered the same, appearing twice.
```

#### Validator

```typescript
const description = "This is an Important document and another important note.";
const result = validateContains(description, { seed: 'important', ignoreCase: true, minOccurrences: 2, message: 'Description must contain the word "important" at least twice' });

console.log(result.isValid); // true
console.log(result.errors); // []
```

## Interfaces

### IContainsValidationOptions

The `IContainsValidationOptions` interface represents the options for the `Contains` decorator and `validateContains` function.

```typescript
import { IValidationOptionsBase } from "./IValidationOptionsBase";

/**
 * The IContainsValidationOptions interface represents the options for validating if a string contains a specific seed.
 *
 * @interface
 * @property {string} seed - The seed string to look for within the main string. This is a required property.
 * @property {boolean} [ignoreCase=false] - Optional: Whether to ignore case when comparing. Defaults to false.
 * @property {number} [minOccurrences=1] - Optional: The minimum number of occurrences of the seed in the string. Defaults to 1.
 */
export interface IContainsValidationOptions extends IValidationOptionsBase {
    seed: string;
    ignoreCase?: boolean;
    minOccurrences?: number;
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

## Conclusion

By using the `Contains` decorator and the `validateContains` function, you can enforce that your string properties contain necessary substrings as required by your application's logic. This validation is flexible and can be customized with various options to fit different needs. The provided examples demonstrate how to use both the decorator and the validator in real-world scenarios, ensuring that your properties meet the required validation criteria.
