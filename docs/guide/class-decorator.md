---
layout: default
---

# Class Decorator

The `ClassValidator` decorator is used at the class level to enable validation of its properties using the decorators provided by the REST Data Validator library. This decorator is essential for activating and applying the defined property validators within a class.

## Usage

To use the `ClassValidator`, simply decorate your class with `@ClassValidator`. This signals the library to perform validation on the instance based on the property validators defined within the class.

### Example

```typescript
import {
  ClassValidator,
  StringValidator,
  NumberValidator,
} from "rest-data-validator";

@ClassValidator
class User {
  @String({ minLength: 2, maxLength: 30 })
  name: string;

  @Number({ min: 18 })
  age: number;
}

const user = new User();
user.name = "Jane Doe";
user.age = 25;
```

In this example, the `User` class is decorated with `@ClassValidator`, which enables validation for the `name` and `age` properties using the `StringValidator` and `NumberValidator`, respectively. The `validate` function contained within ValidationUtils used by ClassValidator to check if the user instance meets the specified validation criteria.

### Integrating with Application Logic

The `ClassValidator` decorator and associated property validators can be integrated into application logic to ensure data integrity before processing or persisting data, such as before saving a user to a database or before performing operations that depend on valid data.

By using `ClassValidator`, developers can define a clear, declarative validation schema directly within their class models, improving maintainability, readability, and reducing the likelihood of invalid data being processed by the application.
