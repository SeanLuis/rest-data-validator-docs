---
layout: default
---

# CLI Utility

The REST Data Validator CLI Tool provides a powerful interface for generating models and applying validations directly from the command line, streamlining the development process for RESTful APIs by automating the creation of TypeScript models with integrated validation rules.

## Installation

Ensure you have `rest-data-validator` installed in your project. If not, follow the installation instructions provided in the [Installation](#installation) section of the main documentation. The CLI tool is included as part of the `rest-data-validator` package and can be accessed once the package is installed.

## CLI Commands

### generate:model

Generates a new model with the specified name and optional path.

**Syntax**

```bash
rest-cli generate:model <name> [path]
```

- `<name>`: The name of the model to generate. This will also be used as the class name.
- `[path]`: Optional. The path where the model will be generated. Defaults to the current directory if not specified.

**Example**

```bash
rest-cli generate:model User ./models
```

### generate:validations

Applies validations to an existing model based on predefined strategies.

**Syntax**

```bash
rest-cli generate:validations <modelPath>
```

- `<modelPath>`: The path of the model file (with the extension) to which validations will be applied.

**Example**

```bash
rest-cli generate:validations ./models/User.ts
```

## Model Generation

The `generate:model` command prompts you to input properties for your model, including property names and data types. Supported data types include `string`, `number`, `boolean`, `object`, `any`, `void`, `null`, and `undefined`.

## Validation Generation

The `generate:validations` command supports a wide range of validation types, such as `Required`, `Custom`, `Array`, `Date`, and many more. Each validation type is applied according to strategies that define how the validation is implemented.

## Extending and Customizing

Both model and validation generation can be extended and customized to fit specific requirements by modifying the source code of the CLI tool or by contributing new validation strategies to the project repository.

## Contributing

Contributions to the CLI tool are welcome, whether they involve adding new features, improving existing functionalities, or fixing bugs. Please refer to the project's contribution guidelines for more details.
