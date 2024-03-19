# Changelog

## v2.0.11 - Security Utility Enhancement - 19/3/2024
### Introduction
We are excited to announce version 2.0.11of the REST Data Validator, introducing a significant enhancement to our security utility. This release focuses on providing robust security validation features designed to protect your applications from a variety of threats.

### What's New

#### Security Event Emitter
- The `SecurityEvents` class is an event emitter that allows your application to handle security events dynamically.

#### Security Validation Decorators
- Implement security validations seamlessly with our intuitive decorator functions. Simply annotate your class properties with `@Security` to enforce a wide array of security checks and constraints.

#### Validate Security Function
- The `validateSecurity` function offers a programmatic approach to validate inputs against predefined and custom security strategies. It supports synchronous and asynchronous validations to accommodate different operational contexts.

#### Comprehensive Security Strategies
- Our library comes equipped with an extensible set of security strategies, ready to defend against attacks like ```XSS```, ```SQL Injection```, ```Command Injection```, ```Path Traversal```, and ```LDAP Injection```. It also offers the flexibility to define and integrate bespoke security strategies to meet unique application requirements.

#### Thorough Testing Practices
- Each security strategy undergoes rigorous testing to ensure reliable protection against both benign and malicious inputs. Follow our testing practices to maintain high security standards across your applications.

### Acknowledgments
We extend our heartfelt gratitude to the REST Data Validator community for your ongoing support and valuable feedback. Your contributions are instrumental in shaping the future of this tool, and we're excited to continue improving it together.

For detailed information on all features and updates, please refer to the documentation on our [GitHub page](https://github.com/SeanLuis/rest-data-validator#readme).

## v2.0.10 - CLI Generators and Strategies Enhancement - 16/3/2024
### Introduction
We are pleased to announce version 2.0.10 of the REST Data Validator, focusing on significant updates to the model and validation generators, along with crucial fixes to various validation strategies. This release aims to streamline the development process further and enhance the reliability of our CLI tool.

### What's New

#### ModelGenerator Improvements
- Simplified path resolution for model generation to improve the user experience. The path now defaults to the current working directory, making the operation more intuitive.
- The import statements have been refined to directly reference `rest-data-validator`, ensuring a smoother integration and a more straightforward approach to managing dependencies.

#### ValidationsGenerator Enhancements
- We've introduced smarter logic to ensure that `rest-data-validator` is always correctly imported, eliminating potential issues related to missing validation types.
- The handling of named imports has been optimized to include only necessary validation types, streamlining the generated code and enhancing readability.

#### Strategic Adjustments
- The `ArrayStrategy` has been updated to generate validator functions conditionally, based on the presence of `minLength` or `maxLength` parameters. This approach reduces unnecessary code generation and focuses on user-specified constraints.
- We've also refined the properties argument in the Array decorator to include `minLength` and `maxLength` conditionally, further streamlining the generated decorator code and focusing on relevant constraints.

### Additions & Deletions
This release includes a total of 42 changes across the ModelGenerator, ValidationsGenerator, and various strategy files, comprising both additions and deletions aimed at refining the tool's functionality.

### Acknowledgments
We extend our heartfelt gratitude to the REST Data Validator community for your ongoing support and valuable feedback. Your contributions are instrumental in shaping the future of this tool, and we're excited to continue improving it together.

For detailed information on all features and updates, please refer to the documentation on our [GitHub page](https://github.com/SeanLuis/rest-data-validator#readme).

## v2.0.9 - Dependency Adjustment and CLI Enhancement - 16/3/2024
### Introduction
We're excited to announce the release of REST Data Validator version 2.0.9. This update focuses on addressing dependency management for improved usability and stability, particularly regarding the CLI tool functionality.

### Highlights of the Release

#### Dependency Management

- Moved `ts-morph` from `devDependencies` to `dependencies` to ensure the CLI tool functions correctly in all environments. This change addresses the issue where `ts-morph` was not found when the CLI tool was executed, enhancing the tool's reliability and user experience.

#### CLI Tool Improvement

- The CLI tool, `rest-cli`, has received under-the-hood improvements for better performance and stability. Now, users can seamlessly generate models and validations without encountering missing dependency errors.

### Getting Started

To get started with REST Data Validator v2.0.9, update your package using your preferred package manager:

```bash
# Using npm
npm update rest-data-validator

# Using yarn
yarn upgrade rest-data-validator
```



## v2.0.8 - Introducing CLI Tool Integration - 16/3/2024
### Introduction
We are thrilled to announce the release of REST Data Validator version 2.0.8. This update introduces an exciting new feature: the integration of a CLI tool for generating models and applying validations. Additionally, we've enhanced model validation capabilities to further support your development workflows.

### CLI Tool Integration

- **Command Line Interface**: The new `rest-cli` tool allows for generating models and applying validations directly from your command line, streamlining the creation and maintenance of validation schemas.

### Model Validation Enhancement

- **Enhanced Validation Strategies**: This release includes updates to our validation strategies, offering more flexibility and control over data validation in your projects.

### Why This Update?

The addition of the CLI tool and the enhancements to model validation were driven by feedback from our community. These improvements aim to simplify the developer experience, making it easier to generate, maintain, and apply validation rules within your applications.

### Getting Started with v2.0.8

To explore the new features and enhancements introduced in version 2.0.8, please update your REST Data Validator package:

```bash
npm update rest-data-validator
```

After updating, you can start using the CLI tool immediately by following the instructions in our updated documentation.

### Acknowledgments

We extend our deepest gratitude to the REST Data Validator community for your valuable feedback and continuous support. These enhancements are part of our ongoing commitment to evolving the library to meet your needs.

---

For a comprehensive guide on all features and updates introduced in version 2.0.8, visit our [documentation site](https://rest-data-validator.netlify.app).


## v2.0.7 - Documentation Migration to New Site - 15/3/2024
### Introduction
In our continuous effort to improve REST Data Validator and the user experience, we are excited to announce version 2.0.7. The highlight of this release is the migration of our documentation to a new, more user-friendly site.

### Documentation Migration

- **New Documentation Site**: We've moved our documentation to [https://rest-data-validator.netlify.app](https://rest-data-validator.netlify.app). This new site offers a cleaner interface, better navigation, and an overall enhanced user experience to help you find the information you need more efficiently.

### Why Migrate?

The decision to migrate our documentation was driven by our commitment to providing the best possible experience for our users. The new site is not just about aesthetic improvements; it's designed to be more intuitive, making it easier for developers to start with REST Data Validator, understand its capabilities, and integrate it into their projects effectively.

### Getting Started with the New Documentation

To get started with REST Data Validator and explore the new documentation, please visit [https://rest-data-validator.netlify.app](https://rest-data-validator.netlify.app). Whether you're new to REST Data Validator or an existing user, you'll find that the new documentation site makes it easier to:

- Understand the core concepts and features of REST Data Validator.
- Find guidance on how to integrate and use REST Data Validator in your projects.
- Explore advanced topics, including custom validators, decorator usage, and more.

### Acknowledgments

We want to thank our community for your ongoing support and feedback. This migration is a part of our broader initiative to enhance REST Data Validator and support its growth. We're excited about the future and continuing to improve the library based on your feedback.

---

For detailed information on all features and updates, please visit our new [documentation site](https://rest-data-validator.netlify.app).


## v2.0.6 - Introducing Dependency Validation - 12/3/2024
### Introduction
We are thrilled to announce the initial release of REST Data Validator, a library designed to simplify and enhance the validation process for data integrity in RESTful applications. This release introduces a powerful set of features to support complex validation scenarios.

### New Features

### `@Dependency` Decorator and `validateDependency` Function
- **`@Dependency` Decorator**: A declarative way to specify validation rules that depend on other properties within the same class. It allows for expressing complex inter-property validation logic cleanly within your class definitions.
- **`validateDependency` Function**: Provides programmatic access to dependency validation, enabling developers to apply validation logic dynamically at runtime. This function is particularly useful for complex validation scenarios that require context-aware logic.

### Structured Validation Configuration
- **Separate Validation Configuration**: Adopting the principle of separation of concerns, REST Data Validator allows for the definition of validation rules in dedicated configuration files. This approach enhances code maintainability and promotes a cleaner architecture by decoupling validation logic from model definitions.

### Documentation and Examples
Comprehensive documentation is available to guide you through integrating REST Data Validator into your projects. It includes detailed examples of using the `@Dependency` decorator and `validateDependency` function, as well as best practices for organizing validation configurations.

### Getting Started
To get started with REST Data Validator, please refer to the [Getting Started](https://github.com/SeanLuis/rest-data-validator?tab=readme-ov-file#installation) section in our documentation. It provides all the necessary steps to integrate the library into your project and begin defining robust validation rules for your data models.

### Acknowledgments
A special thanks to all contributors and the community for your support and feedback during the development of REST Data Validator. We are excited to see how this library will enhance your application development and data integrity validation practices.

---

For more details and usage examples, please visit our [documentation](https://github.com/SeanLuis/rest-data-validator?tab=readme-ov-file#dependency-validators).

## v2.0.5 - Utility Decorators Added for Enhanced Property Management - 12/3/2024
We are excited to announce the release of `rest-data-validator` v2.0.5, which introduces a set of new utility decorators to improve property management within your classes.

### What's New in 2.0.5?

In our continuous effort to enhance the developer experience and broaden the capabilities of `rest-data-validator`, we have now added three utility decorators:

### Utility Decorators:
- **Accessors Decorator**: Automatically creates getters and setters for class properties.
- **Getter Decorator**: Simplifies the creation of getters for properties, with an option to make them enumerable.
- **Setter Decorator**: Allows the creation of setters for properties, with control over their writability.

These decorators aim to reduce boilerplate code and encourage cleaner and more maintainable class definitions.

### Changes:
- Added `Accessors`, `Getter`, and `Setter` decorators to streamline property management.
- Updated documentation to reflect new features and provide examples of usage.
- Included TypeScript interface definitions for decorator options to enhance type checking and IntelliSense.

### Documentation Update:
We've also reorganized our documentation to introduce a new "Utility Decorators" section. This ensures our users can quickly find and understand how to leverage these new tools in their projects.

### Acknowledgments:
Thank you to our contributors and users for your ongoing support. Your feedback drives the continuous improvement of `rest-data-validator`. We look forward to seeing how you utilize these new features in your applications!

Stay tuned for further updates as we continue to improve and expand `rest-data-validator`'s functionality.

---

Remember to check the updated [documentation](https://github.com/SeanLuis/rest-data-validator/blob/master/README.md) for detailed information on the new release.

## v2.0.4 - Documentation Clarity Enhancements - 12/3/2024
### Improved Readability and Navigation in Documentation

We are delighted to roll out the 2.0.4 update for `rest-data-validator`, which significantly improves the documentation to enhance user experience.

### Documentation Updates:
- **Reorganized Table of Contents**: Introduced sub-indices for each validator and feature, making it easier to navigate through the documentation.
- **Expanded Descriptions**: Provided more detailed examples and clearer explanations for all decorators and validators.
- **Streamlined Installation Guide**: Updated the installation section to ensure a smoother setup for new users.
- **Clarified Contribution Guidelines**: Made it easier to understand how users can contribute to the project with enhanced guidelines.

These updates are part of our ongoing efforts to ensure that `rest-data-validator` is not only powerful and flexible but also user-friendly and accessible to developers of all skill levels.

We appreciate your feedback and contributions which help us improve further. Stay tuned for more updates!


## v2.0.3 - Introducing Password Validation Enhancements - 12/3/2024
We are thrilled to introduce the `Password` decorator in this version. It provides a way to enforce password validations within TypeScript classes, ensuring that passwords meet established security standards.

### Additions

- **`minLength`**: Specifies the minimum length required for passwords.
- **`maxLength`**: Defines the maximum allowable length for passwords.
- **`mustContainLowercase`**: Ensures that passwords include at least one lowercase letter.
- **`mustContainUppercase`**: Ensures that passwords include at least one uppercase letter.
- **`mustContainNumber`**: Ensures that passwords include at least one number.
- **`mustContainSpecialCharacter`**: Ensures that passwords include at least one special character.
- **`regexPattern`**: An optional regular expression that the password must match, providing additional validation constraints.

### Enhancements

- Added flexibility for defining password validation rules, allowing for a range of security requirements.
- Improved security features that can be easily applied to user password fields for better protection against weak passwords.

The `Password` decorator is a step forward in providing out-of-the-box security for applications that handle sensitive user information.


## v2.0.0 - Introducing Nested & Contextual Validation - 10/3/2024
### Nested Validator and Decorator
- **Introduction of Nested Validator**: Enhances the library's capability by allowing validation of complex, nested data structures through a combination of individual validators.
- **```@Nested Decorator```**: Facilitates the application of nested validation rules to class properties, enabling comprehensive data integrity checks for nested objects.

### Contextual Validator and Decorator
- **Dynamic Validation with Contextual Validator**: Offers the ability to adjust validation logic dynamically based on the context of the data, supporting a wide range of validation scenarios that depend on conditions or the environment.
- **```@Contextual Decorator```**: Provides a means to apply dynamic, context-aware validation to class properties, catering to sophisticated validation requirements that are influenced by application state or external factors.

### Improvements
- **Enhanced Documentation**: Expanded documentation to include more examples and detailed usage instructions for the Nested and Contextual validators.
- **Performance Optimization**: Ongoing optimizations to improve the efficiency of validation execution, particularly for complex and contextual validations.


