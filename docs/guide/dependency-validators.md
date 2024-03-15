---
layout: default
---

# Dependency Validators

## Overview

This documentation aims to provide a clear and professional guide on using the `DependencyValidator` decorator and the `ValidateDependency` function within the validation framework. Both tools are designed to offer powerful and flexible validation mechanisms, each serving specific roles in ensuring data integrity and business logic conformity.

## Dependency Decorator

### Introduction

`DependencyValidator` is a decorator used to specify validation rules for class properties based on the dependencies between them. It allows for dynamic validation where the validity of one property may depend on the value of another.

### Usage

To use `DependencyValidator`, annotate the target property with `@DependencyValidator`, providing a validation configuration object. This object must define the `name`, `getDependencies`, `validate`, and `message` properties.

### Example

Suppose we have a `Product` class where the `saleDate` must not precede the `manufactureDate`:

```typescript
import { DependencyValidator, ClassValidator } from "../../src";

@ClassValidator
class Product {
    public manufactureDate: Date;
    
    @DependencyValidator({
        name: "SaleDateAfterManufactureDate",
        getDependencies: (instance) => ({ manufactureDate: instance.manufactureDate }),
        validate: (saleDate, { manufactureDate }) => saleDate >= manufactureDate,
        message: "Sale date must be after the manufacture date.",
    })
    public saleDate: Date;
}
```

## Dependency Function

### Introduction

`ValidateDependency` is a function that directly validates an object's property against specified dependencies and rules. It's particularly useful in scenarios where validations need to be triggered programmatically.

### Usage

Invoke `ValidateDependency` with the target object, the value to validate, and the validation options object. The function returns a `ValidationResult` indicating whether the validation passed and containing any error messages if it didn't.

### Example

Validating a `Product` instance's `saleDate` could look something like this:

```typescript
const product = new Product(/* initialize properties */);
const validationResult = ValidateDependency(
    product,
    product.saleDate,
    {
        name: "SaleDateAfterManufactureDate",
        getDependencies: () => ({ manufactureDate: product.manufactureDate }),
        validate: (saleDate, { manufactureDate }) => saleDate >= manufactureDate,
        message: "Sale date must be after the manufacture date.",
    }
);

if (!validationResult.isValid) {
    console.error(validationResult.errors);
}
```

## Separating Validation Logic in a Clean Architecture Approach

### Overview

This guide focuses on organizing validation logic separately from your model definitions to achieve a cleaner architecture and more maintainable codebase. It explains how to structure your project files and set up validations using a dedicated configuration.

### Table of Contents

- [Folder and File Structure](#folder-and-file-structure)
- [Setting Up the Model](#setting-up-the-model)
- [Configuring Validations](#configuring-validations)
- [Applying Configuration](#applying-configuration)
- [Example Usage](#example-usage)

### Folder and File Structure

Organize your project to keep the model definitions clean by following this structure:

```
src/
│
├── models/
│   └── AgricultureProduct.ts
│
├── validations/
│   └── AgricultureProductValidations.ts
│
└── decorators/
    ├── DependencyValidator.ts
    └── ValidateDependency.ts
```

- `models/`: Contains the application's data models.
- `validations/`: Stores separate files for configuring validations for each model.
- `decorators/`: Includes the implementations of validation decorators.

### Setting Up the Model

Define your models in a clear and concise manner, focusing solely on data representation.

**AgricultureProduct.ts**:

```typescript
export class AgricultureProduct {
  public harvestDate: Date;
  public saleDate: Date;
  // Additional properties as needed.

  constructor(
    harvestDate: Date,
    saleDate: Date,
    // Other constructor parameters.
  ) {
    this.harvestDate = harvestDate;
    this.saleDate = saleDate;
    // Initialize other properties.
  }
}
```

### Configuring Validations

Create dedicated files for validation configurations to decouple validation logic from the model.

**AgricultureProductValidations.ts**:

```typescript
import { Dependency } from "../decorators/DependencyValidator";
import { AgricultureProduct } from "../models/AgricultureProduct";

export const configureAgricultureProductValidations = () => {
    Dependency({
        name: "SaleDateAfterHarvestDate",
        getDependencies: (instance) => ({ harvestDate: instance.harvestDate }),
        validate: (saleDate, { harvestDate }) => saleDate >= harvestDate,
        message: "The sale date cannot be before the harvest date.",
    })(AgricultureProduct.prototype, "saleDate");

    // Repeat for other properties needing validation.
};
```

### Applying Configuration

Ensure the validation configurations are applied by invoking the setup function at the application's entry point.

**main.ts**:

```typescript
import "reflect-metadata";
import { configureAgricultureProductValidations } from "./validations/AgricultureProductValidations";

configureAgricultureProductValidations();
```

### Example Usage

With this setup, your `AgricultureProduct` instances will be validated according to the defined rules, keeping the model's definition clean and focused on its primary purpose.

This approach enhances code maintainability, facilitates easier testing, and adheres to Clean Architecture principles by separating concerns effectively.

## Conclusion

`DependencyValidator` and `ValidateDependency` provide a robust framework for implementing complex validation logic that respects the interdependencies between data fields. By following the outlined guidelines and examples, developers can ensure their applications maintain data integrity and adhere to business rules effectively.
