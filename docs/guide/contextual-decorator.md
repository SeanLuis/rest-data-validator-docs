---
layout: default
---

# Contextual Decorator

## Using the Contextual Decorator in Class Validation

The `Contextual` decorator allows for dynamic validation of class properties based on a contextual understanding of the application state or environment. This document explains how to use the `Contextual` decorator to validate class properties effectively.

## Defining a Class with Contextual Validation

```typescript
import "reflect-metadata";
import {
  ClassValidator,
  String,
  Contextual,
  setContext,
  getContext,
} from "rest-data-validator";

@ClassValidator
class CropBatch {
  @String({ minLength: 5, maxLength: 10 })
  batchId: string;

  @Contextual({
    name: "HarvestDateValidator",
    getContext: () => getContext("cropBatchContext"),
    validate: (value, context) =>
      new Date(value) <= new Date(context.currentDate) &&
      new Date(value) >= new Date(context.plantingDate),
    message: "Harvest date must be between planting date and current date.",
  })
  harvestDate: string;

  // Additional properties with Contextual decorators
}
```

## Setting Up the Context

Before instantiating your class, set up the necessary context:

```typescript
setContext("cropBatchContext", {
  currentDate: "2023-08-01",
  plantingDate: "2023-03-01",
  // Other context-specific configurations
});
```

## Instantiation and Validation

Create an instance of your class as usual. The `ClassValidator` decorator will automatically validate the instance based on the defined context:

```typescript
const cropBatch = new CropBatch("Batch1", "2023-07-01");
```

If validation fails, an error will be thrown detailing the validation issues.

## Potential Use Cases

### Agriculture Traceability

Track and validate different stages of crop production, ensuring that each batch meets the required standards for planting and harvesting times, pesticide use, water usage, and quantity.

### Blockchain Transactions

Verify blockchain transactions, such as Ethereum, by validating the context such as the correct wallet addresses, transaction times within a certain block confirmation window, and the amount transferred against wallet balance.

### Healthcare Management

In healthcare applications, validate patient records contextually based on admission dates, treatment types, and medication dosages according to individual health plans and protocols.

## Conclusion

The Contextual Validator, with its dynamic and versatile nature, is ideal for any application that requires contextual awareness in its validation logic, ensuring data integrity and adherence to business rules and standards.
