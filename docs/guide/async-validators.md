---
layout: default
---

# Async Validators

Async validators are functions that provide a way to perform validation asynchronously. This is useful when validation logic requires IO operations like database lookups, API calls, or any other asynchronous computation.

## AsyncValidator Type

An `AsyncValidator` is a function that takes a value of type `T` and an optional options object. It returns a `Promise` that resolves to a `ValidationResult` object.

## Usage

To use an `AsyncValidator`, you would typically call it with a value and optionally pass in any options that the validator requires.

```typescript
import { AsyncValidator } from "path-to-validators";

const validateEmail: AsyncValidator<string> = async (email, options) => {
  // Perform email validation logic here
  // Return a promise that resolves to a ValidationResult
};

const email = "user@example.com";
validateEmail(email).then((validationResult) => {
  if (validationResult.isValid) {
    // Email is valid
  } else {
    // Email is invalid
    console.log(validationResult.errors);
  }
});
```