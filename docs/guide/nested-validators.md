---
layout: default
---

# Nested Validators

The nested validator is a powerful tool for validating nested and complex data structures. It uses a combination of individual validators to validate different parts of the data structure.

## Creating Validators

First, we create individual validators for each type of object we want to validate. For example, if we want to validate objects of the User, Product, and Order classes, we create a validator for each one:

```typescript
const isUserValidator: IValidator<any> = simpleValidatorFactory<any>({
  condition: (value) =>
    value instanceof User && value.name.startsWith("valid") && value.age > 18,
  errorMessage: "Value is not a valid User.",
});

const isProductValidator: IValidator<any> = simpleValidatorFactory<any>({
  condition: (value) =>
    value instanceof Product &&
    value.name.startsWith("valid") &&
    value.price > 10,
  errorMessage: "Value is not a valid Product.",
});

const isOrderValidator: IValidator<any> = simpleValidatorFactory<any>({
  condition: (value) =>
    value instanceof Order &&
    value.user instanceof User &&
    value.products.every((product) => product instanceof Product),
  errorMessage: "Value is not a valid Order.",
});
```

## Creating the Complex Validator

Next, we combine these validators into a complex validator:

```typescript
const complexClassValidator: IValidator<any> = combinedValidatorFactory([
  {
    validator: isUserValidator,
    typeGuard: (value: any): value is User => value instanceof User,
  },
  {
    validator: isProductValidator,
    typeGuard: (value: any): value is Product => value instanceof Product,
  },
  {
    validator: isOrderValidator,
    typeGuard: (value: any): value is Order => value instanceof Order,
  },
]);
```

## Using the Complex Validator

Finally, we use the complex validator to validate our data structures:

```typescript
const options: INestedValidationOptions<any> = {
  validator: complexClassValidator,
  validationOptions: {},
  each: true,
};

const value = {
  user: new User("validUser", 20),
  order: new Order(new User("validUser", 20), [
    new Product("validProduct", 15),
    new Product("validProduct", 15),
  ]),
  products: [new Product("validProduct", 15), new Product("validProduct", 15)],
};

const validationResult = validateNested(value, options);
```

In this example, `validationResult.isValid` will be true if all objects pass their corresponding validations, and false otherwise. Specific error messages can be found in `validationResult.errors`.
