
# Real World Test Case: Validation with Schema File Provider and Schema Library

## Overview

In this document, we explore a real-world validation use case leveraging the `SchemaFileProvider` and `SchemaValidator` libraries to validate a complex agricultural traceability record. We'll be using a YAML file to define the schemas for various entities such as `farm`, `produceBatch`, `processingEvents`, and `delivery`.

The importance of schema validation lies in ensuring that the data adheres to the required structure, format, and rules, thereby preventing data corruption, ensuring data consistency, and improving data integrity across systems.

## Table of Contents
- [Schema Definition in YAML](#schema-definition-in-yaml)
- [Loading Schemas Using SchemaFileProvider](#loading-schemas-using-schemafileprovider)
- [Validating Entities Separately](#validating-entities-separately)
- [Full Traceability Record Validation](#full-traceability-record-validation)
- [Error Handling and Detailed Validation](#error-handling-and-detailed-validation)

## Schema Definition in YAML

The following YAML file defines schemas for various entities involved in a traceability record:

```yaml
farm:
  type: object
  properties:
    name:
      type: string
      required: true
    location:
      type: string
      required: true
    farmId:
      type: number
      required: true

produceBatch:
  type: object
  properties:
    batchId:
      type: string
      required: true
    produceType:
      type: string
      required: true
    quantity:
      type: number
      min: 1
      required: true
    harvestDate:
      type: date
      required: true

processingEvent:
  type: object
  properties:
    eventId:
      type: string
      required: true
    eventType:
      type: enum
      allowedValues:
        - Cleaning
        - Sorting
        - Packaging
      required: true
    timestamp:
      type: date
      required: true
    operator:
      type: string
      required: true

delivery:
  type: object
  properties:
    deliveryId:
      type: string
      required: true
    destination:
      type: string
      required: true
    deliveredBy:
      type: string
      required: true
    deliveryDate:
      type: date
      required: true
```

## Loading Schemas Using SchemaFileProvider

We begin by loading the schemas from the YAML file using the `SchemaFileProvider`. The provider automatically loads the schema from the specified environment variable or a default path.

```typescript
import { loadSchemaFromFile, convertToSchema, getSchema } from 'rest-data-validator';

const schemaDefinition = loadSchemaFromFile('path/to/schemas.yaml');
const farmSchema = convertToSchema(schemaDefinition['farm']);
const produceBatchSchema = convertToSchema(schemaDefinition['produceBatch']);
const deliverySchema = convertToSchema(schemaDefinition['delivery']);
```

## Validating Entities Separately

Once we have loaded the schemas, we can validate individual entities. This allows for modular validation, ensuring each part of the traceability record is validated independently before combining them.

### Validating the Farm Entity

```typescript
const farmData = {
  name: 'Green Farm',
  location: 'Valley Rd, Farmville',
  farmId: 101,
};

const validationResult = farmSchema.validate(farmData);
console.log(validationResult.isValid);  // true
console.log(validationResult.errors);   // []
```

### Validating the Produce Batch Entity

```typescript
const produceBatchData = {
  batchId: 'BATCH-001',
  produceType: 'Apples',
  quantity: 500,
  harvestDate: new Date('2023-09-01'),
};

const validationResult = produceBatchSchema.validate(produceBatchData);
console.log(validationResult.isValid);  // true
console.log(validationResult.errors);   // []
```

### Validating the Delivery Entity

```typescript
const deliveryData = {
  deliveryId: 'DEL-001',
  destination: 'Market St, Cityville',
  deliveredBy: 'Express Logistics',
  deliveryDate: new Date('2023-09-06'),
};

const validationResult = deliverySchema.validate(deliveryData);
console.log(validationResult.isValid);  // true
console.log(validationResult.errors);   // []
```

## Full Traceability Record Validation

Now, we can combine these schemas into a complete traceability record schema. The `SchemaValidator` library allows us to nest schemas for complex objects.

```typescript
const traceabilityRecordSchema = SchemaValidator.object({
  farm: farmSchema.required(),
  produceBatch: produceBatchSchema.required(),
  processingEvents: SchemaValidator.array(processingEventSchema).min(1).required(),
  transportation: SchemaValidator.union([
    SchemaValidator.array(transportationSchema), 
    SchemaValidator.nullable(SchemaValidator.array(transportationSchema))
  ]),
  delivery: deliverySchema.required(),
});
```

### Validating the Full Traceability Record

```typescript
const validRecord = {
  farm: {
    name: 'Green Farm',
    location: 'Valley Rd, Farmville',
    farmId: 101,
  },
  produceBatch: {
    batchId: 'BATCH-001',
    produceType: 'Apples',
    quantity: 500,
    harvestDate: new Date('2023-09-01'),
  },
  processingEvents: [
    {
      eventId: 'EVT-001',
      eventType: 'Cleaning',
      timestamp: new Date('2023-09-02'),
      operator: 'John Doe',
    },
  ],
  transportation: [
    {
      transportId: 'TRANS-001',
      vehicleType: 'Truck',
      startDate: new Date('2023-09-04'),
      endDate: new Date('2023-09-05'),
      driver: 'Sam Smith',
    },
  ],
  delivery: {
    deliveryId: 'DEL-001',
    destination: 'Market St, Cityville',
    deliveredBy: 'Express Logistics',
    deliveryDate: new Date('2023-09-06'),
  },
};

const validationResult = traceabilityRecordSchema.validate(validRecord);
console.log(validationResult.isValid);  // true
console.log(validationResult.errors);   // []
```

## Error Handling and Detailed Validation

In case of validation errors, the system provides detailed error messages that specify which property failed the validation and the reason.

### Example of an Invalid Record

```typescript
const invalidRecord = {
  farm: {
    name: 'Green Farm',
    location: 'Valley Rd, Farmville',
    // farmId is missing
  },
  produceBatch: {
    batchId: 'BATCH-001',
    produceType: 'Apples',
    quantity: 0, // Invalid quantity
    // harvestDate is missing
  },
  processingEvents: [],
  transportation: null, // Valid case, since transportation can be nullable
  delivery: {
    deliveryId: 'DEL-001',
    destination: 'Market St, Cityville',
    // deliveredBy is missing
    deliveryDate: new Date('2023-09-06'),
  },
};

const invalidResult = traceabilityRecordSchema.validate(invalidRecord);

console.log(invalidResult.isValid);  // false
console.log(invalidResult.errors);
// [
//   "Validation failed for property 'farm': Validation failed for property 'farmId': Property is missing.",
//   "Validation failed for property 'produceBatch': Validation failed for property 'quantity': Number is too small. Minimum value is 1.",
//   "Validation failed for property 'produceBatch': Validation failed for property 'harvestDate': Property is missing.",
//   "Validation failed for property 'processingEvents': Array is too short. Minimum length is 1.",
//   "Validation failed for property 'delivery': Validation failed for property 'deliveredBy': Property is missing."
// ]
```

## Conclusion

The combination of `SchemaFileProvider` and `SchemaValidator` provides a powerful way to validate complex data structures. By externalizing schemas into YAML files, you can easily manage and update validation logic without making code changes. The modular nature of schema validation also allows you to validate individual entities separately or combine them into a complete validation system.
