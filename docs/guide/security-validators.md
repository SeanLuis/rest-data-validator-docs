---
layout: default
---

# Security Validators

This document outlines the security validation features of the `rest-data-validator` package, designed to protect your applications from a variety of security threats.

## Security Event Emitter

The `SecurityEvents` class is an event emitter that allows your application to handle security events dynamically.

### Usage Example

```typescript
import { securityEvents } from 'path/to/securityEvents';

// Listening for attack detection
securityEvents.on('attackDetected', (payload) => {
  console.log(`Attack detected: ${payload.message}`);
});

// Reporting an attack
securityEvents.reportAttack('xss', '<script>alert("XSS")</script>', 'XSS attack detected!');
```

## Security Decorator

Implement security validations seamlessly with our intuitive decorator functions. Simply annotate your class properties with `@Security` to enforce a wide array of security checks and constraints.

### Usage Example

```typescript
import { Security } from 'rest-data-validator';

class UserInput {
  @Security({ type: 'xss', message: 'XSS attack detected.' })
  public userInput: string;
}
```

## Security Function

The `validateSecurity` function offers a programmatic approach to validate inputs against predefined and custom security strategies. It supports synchronous and asynchronous validations to accommodate different operational contexts.

### Usage Example

```typescript
import { validateSecurity } from 'rest-data-validator';
import { ISecurityValidationOptions } from 'rest-data-validator';

const options: ISecurityValidationOptions = {
  type: 'xss',
  message: 'XSS attack detected.'
};

const validationResult = validateSecurity('<script>alert("XSS")</script>', options);
if (!validationResult.isValid) {
  console.log(validationResult.errors);
}
```

## Comprehensive Security Strategies

Our library comes equipped with an extensible set of security strategies, ready to defend against attacks like XSS, SQL Injection, Command Injection, Path Traversal, and LDAP Injection. It also offers the flexibility to define and integrate bespoke security strategies to meet unique application requirements.

## Supported Validation Types

The `rest-data-validator` package provides a series of predefined security strategies to protect against common attack vectors. Below is the list of currently supported security validation types and their descriptions:

### XSS (Cross-Site Scripting)
Validates input to ensure it does not contain XSS attack vectors such as `<script>` tags, `javascript:` protocol, or malicious `onerror` attributes.

### SQL Injection
Checks for patterns that are commonly associated with SQL Injection attacks, including but not limited to inline comments, unauthorized SQL commands, and multiple query executions.

### Command Injection
Assesses input for command injection attempts by looking for shell command terminators, concatenation patterns, and redirection operators.

### Path Traversal
Inspects paths to prevent directory traversal attacks by detecting relative path escapes and unauthorized access to sensitive system files.

### LDAP Injection
Analyzes input to prevent LDAP Injection attacks by identifying the use of wildcard characters and logical operators that can be exploited in LDAP queries.

## Extending Security Strategies

Users can add or override existing security strategies by using the `addSecurityStrategy` function.

### Usage Example

```typescript
import { addSecurityStrategy } from 'rest-data-validator';

// Adding a custom security strategy
addSecurityStrategy('customXSS', (value: string) => {
  return !/<script>.*<\/script>/.test(value);
});
```

## Thorough Testing Practices

Each security strategy undergoes rigorous testing to ensure reliable protection against both benign and malicious inputs. Follow our testing practices to maintain high security standards across your applications.
