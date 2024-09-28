---
layout: default
---

# Validation Library Guide

## Overview

This library provides a comprehensive set of validation schemas to validate various data types and structures in a scalable and flexible manner. Below is the detailed documentation for each schema type available in the library.

## Table of Contents
- [StringSchema](#stringschema)
- [NumberSchema](#numberschema)
- [BooleanSchema](#booleanschema)
- [ObjectSchema](#objectschema)
- [ArraySchema](#arrayschema)
- [UnionSchema](#unionschema)
- [EnumSchema](#enumschema)
- [DateSchema](#dateschema)
- [TupleSchema](#tupleschema)
- [RecordSchema](#recordschema)
- [NullableSchema](#nullableschema)
- [AnySchema](#anyschema)
- [LazySchema](#lazyschema)
- [LiteralSchema](#literalschema)
- [TransformSchema](#transformschema)

## StringSchema

### Description
The `StringSchema` validates string values and allows setting constraints like minimum and maximum length.

### Usage

```typescript
const schema = SchemaValidator.string().min(3).max(10).required(true);
```

### Example

```typescript
const validationResult = schema.validate('example');
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## NumberSchema

### Description
The `NumberSchema` validates number values and allows setting constraints like minimum and maximum value.

### Usage

```typescript
const schema = SchemaValidator.number().min(18).max(65);
```

### Example

```typescript
const validationResult = schema.validate(25);
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## BooleanSchema

### Description
The `BooleanSchema` validates boolean values.

### Usage

```typescript
const schema = SchemaValidator.boolean().required(true);
```

### Example

```typescript
const validationResult = schema.validate(true);
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## ObjectSchema

### Description
The `ObjectSchema` validates objects based on a schema definition for each property.

### Usage

```typescript
const schema = SchemaValidator.object({
  name: SchemaValidator.string().min(3).max(30),
  age: SchemaValidator.number().min(18),
});
```

### Example

```typescript
const validationResult = schema.validate({ name: 'John', age: 25 });
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## ArraySchema

### Description
The `ArraySchema` validates arrays and allows setting constraints on the array's length and its elements' schema.

### Usage

```typescript
const schema = SchemaValidator.array(SchemaValidator.string().min(2).max(20));
```

### Example

```typescript
const validationResult = schema.validate(['hello', 'world']);
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## UnionSchema

### Description
The `UnionSchema` validates a value that can match any one of the provided schemas.

### Usage

```typescript
const schema = SchemaValidator.union([SchemaValidator.string(), SchemaValidator.number()]);
```

### Example

```typescript
const validationResult = schema.validate(42);
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## EnumSchema

### Description
The `EnumSchema` validates a value that is one of a predefined set of allowed values.

### Usage

```typescript
const schema = SchemaValidator.enum(['red', 'green', 'blue']);
```

### Example

```typescript
const validationResult = schema.validate('green');
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## DateSchema

### Description
The `DateSchema` validates date values and allows setting constraints on the date range.

### Usage

```typescript
const schema = SchemaValidator.date().min(new Date('2020-01-01')).max(new Date());
```

### Example

```typescript
const validationResult = schema.validate(new Date('2022-01-01'));
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## TupleSchema

### Description
The `TupleSchema` validates an array with a fixed length and specific types at each index.

### Usage

```typescript
const schema = SchemaValidator.tuple([SchemaValidator.string(), SchemaValidator.number()]);
```

### Example

```typescript
const validationResult = schema.validate(['hello', 42]);
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## RecordSchema

### Description
The `RecordSchema` validates an object where all keys must match a schema and all values must match another schema.

### Usage

```typescript
const schema = SchemaValidator.record(SchemaValidator.string(), SchemaValidator.number());
```

### Example

```typescript
const validationResult = schema.validate({ a: 1, b: 2 });
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## NullableSchema

### Description
The `NullableSchema` allows a value to be `null` or to satisfy another schema.

### Usage

```typescript
const schema = SchemaValidator.nullable(SchemaValidator.string().min(3));
```

### Example

```typescript
const validationResult = schema.validate(null);
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## AnySchema

### Description
The `AnySchema` accepts any value without restrictions.

### Usage

```typescript
const schema = SchemaValidator.any();
```

### Example

```typescript
const validationResult = schema.validate(123);
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## LazySchema

### Description
The `LazySchema` allows defining a schema that is evaluated lazily, useful for recursive or conditional schemas.

### Usage

```typescript
const recursiveSchema = new LazySchema(() =>
  SchemaValidator.object({
    name: SchemaValidator.string(),
    children: SchemaValidator.array(new LazySchema(() => recursiveSchema)).optional(),
  })
);
```

### Example

```typescript
const validationResult = recursiveSchema.validate({
  name: 'parent',
  children: [{ name: 'child' }],
});
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## LiteralSchema

### Description
The `LiteralSchema` validates that a value matches a specific literal value.

### Usage

```typescript
const schema = SchemaValidator.literal('specificValue');
```

### Example

```typescript
const validationResult = schema.validate('specificValue');
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## TransformSchema

### Description
The `TransformSchema` allows transforming the value during validation, applying a transformation function before validating.

### Usage

```typescript
const schema = SchemaValidator.transform(SchemaValidator.string().min(3), value => value.trim());
```

### Example

```typescript
const validationResult = schema.validate('   hello   ');
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

## Summary

This documentation provides a comprehensive overview of all the available validation schemas in the library. Each schema is designed to be flexible and reusable, enabling developers to build complex validation logic easily.

For more detailed examples and use cases, refer to the specific sections above.
