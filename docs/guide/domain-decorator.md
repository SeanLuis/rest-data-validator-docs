---
layout: default
---

# Domain Decorator

The `Domain` decorator is specifically designed for validating domain-related properties in your classes, such as email addresses, URLs, and domain names, ensuring they adhere to standard formats and constraints.

## Properties

- **type**: `string` - Specifies the type of domain validation to perform. Possible values include 'email', 'url', and 'hostname'.
- **allowSubdomains**: `boolean` - Determines whether subdomains are allowed for URL and hostname validations.
- **allowTopLevelDomains**: `boolean` - Determines whether top-level domains (TLDs) are allowed without a subdomain.
- **topLevelDomains**: `string[]` - Specifies a whitelist of acceptable top-level domains.
- **message**: `string` - Optional. A custom error message to return if the validation fails.

## Usage

To use the `Domain`, apply it to properties in your class that represent domain-related information, specifying the appropriate validation type and any additional constraints.

### Example for Email Validation

```typescript
import { ClassValidator, Domain } from "rest-data-validator";

@ClassValidator
class ContactForm {
  @Domain({ type: "email", message: "Invalid email address" })
  emailAddress: string;
}
```

In this example, the `emailAddress` property must be a valid email address. The custom message 'Invalid email address' is returned if the validation fails.

### Example for URL Validation

```typescript
@ClassValidator
class WebPage {
  @Domain({ type: "url", allowSubdomains: true })
  websiteUrl: string;
}
```

Here, the `websiteUrl` property must be a valid URL. Subdomains are allowed in this validation scenario.

### Customizing Top-Level Domains

```typescript
@Domain({ type: 'email', topLevelDomains: ['com', 'net', 'org'] })
email: string;
```

This configuration restricts valid email addresses to those that have a top-level domain of 'com', 'net', or 'org'.

The `DomainValidator` is an essential tool for ensuring that user input conforms to expected domain formats, enhancing the reliability and security of domain-related data processing in your application.