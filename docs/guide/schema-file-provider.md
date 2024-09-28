---
layout: default
---

# Schema File Provider Guide

## Overview

The `SchemaFileProvider` class provides utilities for loading and converting schema definitions from JSON or YAML files into instances of validation schemas. This allows for schema definitions to be externalized into configuration files, making the validation process more flexible and easier to manage.

## Table of Contents
- [SchemaFileProvider Class](#schemafileprovider-class)
  - [loadSchemaFromFile](#loadschemafromfile)
  - [convertToSchema](#converttoschema)
  - [getSchema](#getschema)
- [Usage Examples](#usage-examples)
  - [Loading and Converting a YAML Schema](#loading-and-converting-a-yaml-schema)
  - [Loading and Converting a JSON Schema](#loading-and-converting-a-json-schema)
  - [Getting and Using Specific Entity Schemas](#getting-and-using-specific-entity-schemas)

## SchemaFileProvider Class

The `SchemaFileProvider` class is composed of three main static methods that facilitate the process of loading and converting schema definitions from files, as well as obtaining specific entity schemas.

### loadSchemaFromFile

#### Description
The `loadSchemaFromFile` method loads and parses a schema definition from a JSON or YAML file.

#### Signature
```typescript
static loadSchemaFromFile(filePath: string): any
```

#### Parameters
- **filePath**: `string` - The path to the schema file. The file can be in JSON or YAML format.

#### Returns
- **any** - The schema definition object parsed from the file.

#### Example
```typescript
import { loadSchemaFromFile } from 'rest-data-validator';
const schemaDefinition = loadSchemaFromFile('path/to/schemas.yaml');
```

### convertToSchema

#### Description
The `convertToSchema` method converts a schema definition object into an instance of `ValidationSchemaBase`. This method supports various schema types such as `string`, `number`, `boolean`, `object`, `array`, `union`, `enum`, `literal`, `nullable`, `tuple`, and `transform`.

#### Signature
```typescript
static convertToSchema(definition: any): ValidationSchemaBase<any>
```

#### Parameters
- **definition**: `any` - The schema definition object that was loaded from a file or defined inline.

#### Returns
- **ValidationSchemaBase** - An instance of `ValidationSchemaBase` that corresponds to the schema definition.

#### Example
```typescript
import { convertToSchema, loadSchemaFromFile } from 'rest-data-validator';
const schemaDefinition = loadSchemaFromFile('path/to/schemas.yaml');
const userSchema = convertToSchema(schemaDefinition['user']);
```

### getSchema

#### Description
The `getSchema` method retrieves a specific schema for a given entity from the loaded schemas.

#### Signature
```typescript
getSchema(entity: string): ValidationSchemaBase<any>
```

#### Parameters
- **entity**: `string` - The name of the entity schema to retrieve (e.g., "user", "employee").

#### Returns
- **ValidationSchemaBase** - An instance of `ValidationSchemaBase` for the specified entity.

#### Example
```typescript
import { getSchema } from 'rest-data-validator';
const userSchema = getSchema('user');
```

### Default Path and Environment Variables

When using `SchemaFileProvider`, you can set the schema file path via the `SCHEMA_FILE_PATH` environment variable. If not set, the default path `../config/schemas` is used, and the system will attempt to find a valid `.yaml`, `.yml`, or `.json` file.

- **Environment Variable**: `SCHEMA_FILE_PATH` can be set to change the schema file location.
- **Default Behavior**: If the environment variable is not set, it will default to `../config/schemas`.

#### Example
```bash
export SCHEMA_FILE_PATH="/path/to/custom_schema.yaml"
```

---

## Usage Examples

### Loading and Converting a YAML Schema

#### YAML Schema File (`schemas.yaml`)
```yaml
user:
  type: object
  properties:
    username:
      type: string
      minLength: 3
      maxLength: 30
      required: true
    password:
      type: string
      minLength: 8
      required: true
  required:
    - username
    - password

employee:
  type: object
  properties:
    employeeId:
      type: string
      required: true
    department:
      type: string
      required: true
  required:
    - employeeId
    - department
```

#### Example
```typescript
import { loadSchemaFromFile, convertToSchema, getSchema } from 'rest-data-validator';

const schemaDefinition = loadSchemaFromFile('path/to/schemas.yaml');
const userSchema = convertToSchema(schemaDefinition['user']);
const validationResult = userSchema.validate({ username: 'JohnDoe', password: '12345678' });
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

---

### Loading and Converting a JSON Schema

#### JSON Schema File (`schemas.json`)
```json
{
  "user": {
    "type": "object",
    "properties": {
      "username": {
        "type": "string",
        "minLength": 3,
        "maxLength": 30,
        "required": true
      },
      "password": {
        "type": "string",
        "minLength": 8,
        "required": true
      }
    },
    "required": ["username", "password"]
  },
  "employee": {
    "type": "object",
    "properties": {
      "employeeId": {
        "type": "string",
        "required": true
      },
      "department": {
        "type": "string",
        "required": true
      }
    },
    "required": ["employeeId", "department"]
  }
}
```

#### Example
```typescript
import { loadSchemaFromFile, convertToSchema, getSchema } from 'rest-data-validator';

const schemaDefinition = loadSchemaFromFile('path/to/schemas.json');
const employeeSchema = convertToSchema(schemaDefinition['employee']);
const validationResult = employeeSchema.validate({ employeeId: 'E123', department: 'HR' });
console.log(validationResult.isValid); // true
console.log(validationResult.errors);  // []
```

---

### Getting and Using Specific Entity Schemas

You can retrieve specific schemas such as `user`, `employee` using the `getSchema` method. The `SchemaFileProvider` automatically loads the schemas based on the environment variable `SCHEMA_FILE_PATH` or from a default path, so you don't need to manually load the schema files.

#### Example

```typescript
import { getSchema } from 'rest-data-validator';

// The SchemaFileProvider automatically loads the schemas based on env configuration
const userSchema = getSchema('user');
const validationResult = userSchema.validate({ username: 'JaneDoe', password: 'password123' });

console.log(validationResult.isValid); // true or false
console.log(validationResult.errors);  // Array of errors if any
```

In this example, ```getSchema('user')``` fetches the schema for the user entity and validates the provided object against it. If the object doesn't meet the schema's requirements, validationResult.errors will contain detailed error messages.

---

## Error Handling

The `SchemaFileProvider` may throw errors in the following scenarios:
- **Unsupported File Type**: If the schema file is not in `.json`, `.yaml`, or `.yml` format, an error is thrown.
- **File Not Found**: If the specified schema file does not exist, an error is thrown.
- **Schema Entity Not Found**: If the requested schema entity is not found in the loaded schemas, an error is thrown.

#### Example of Error Handling
```typescript
try {
  const schema = getSchema('nonexistentEntity');
} catch (error) {
  console.error(error.message); // "Schema for entity 'nonexistentEntity' not found."
}
```

---

## Summary

The `SchemaFileProvider` class is a powerful tool that allows you to externalize your schema definitions into JSON or YAML files, making your validation logic more flexible and easier to manage. By leveraging this class, you can load and convert schema definitions into instances of `ValidationSchemaBase`, ready to be used for data validation across your application. Additionally, you can retrieve specific schemas for different entities, making the validation process even more modular.

The system uses the `SCHEMA_FILE_PATH` environment variable for file configuration and defaults to a specific path if not set. Errors are handled gracefully, ensuring the system behaves predictably in real-world applications.
