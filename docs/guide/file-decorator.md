---
layout: default
---

# File Decorator

The `File` decorator is designed to validate file properties in your classes, ensuring that the files meet specified constraints such as type, size, and name criteria. This is particularly useful for applications that handle file uploads and need to enforce validation rules for security and data integrity.

## Properties

- **mimeTypes**: `string[]` - Specifies the allowed MIME types for the file.
- **maxSize**: `number` - Specifies the maximum file size in bytes.
- **minSize**: `number` - Specifies the minimum file size in bytes.
- **allowedExtensions**: `string[]` - Specifies the allowed file extensions.
- **disallowedExtensions**: `string[]` - Specifies the disallowed file extensions.
- **validateFileName**: `(fileName: string) => boolean` - A custom function to validate the file name.
- **validateFileContent**: `(fileBuffer: Buffer) => boolean` - A custom function to validate the file content.

## Usage

To use the `File`, apply it to properties in your class that are intended to hold file data. The validation can be customized extensively using the properties outlined above.

### Example

```typescript
import { ClassValidator, File } from "rest-data-validator";

@ClassValidator
class UserProfile {
  @File({
    mimeTypes: ["image/jpeg", "image/png"],
    maxSize: 5 * 1024 * 1024, // 5 MB
    allowedExtensions: [".jpg", ".jpeg", ".png"],
    validateFileName: (name) => !name.includes(" "),
    validateFileContent: (buffer) => buffer.length > 0,
  })
  avatar: Buffer;
}
```

In this example, the `avatar` property must be a file that is either a JPEG or PNG image, no larger than 5MB, with an extension of `.jpg`, `.jpeg`, or `.png`, and the file name must not include spaces. Additionally, the file must not be empty.

### Custom File Content Validation

You can provide a custom function to validate the content of the file based on your specific requirements:

```typescript
validateFileContent: (buffer) => {
  // Implement custom validation logic, for example:
  return buffer.includes(someExpectedByteSequence);
};
```

This allows for fine-grained control over what constitutes a valid file beyond the basic constraints of type and size.