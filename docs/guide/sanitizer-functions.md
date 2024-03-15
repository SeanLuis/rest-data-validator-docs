---
layout: default
---

# Sanitizer Functions

Sanitizer functions are utility functions that allow you to clean or standardize data before it's processed. These are particularly useful when handling user input or preparing data for storage or further computation.

## Available Sanitizer Functions

- `trim(value: string): string`: Trims whitespace from both ends of a string.
- `toLowerCase(value: string): string`: Converts a string to lowercase.
- `toUpperCase(value: string): string`: Converts a string to uppercase.
- `round(value: number): number`: Rounds a number to the nearest integer.
- `toNumber(value: string): number`: Converts a string to a number.
- `floor(value: number): number`: Floors a number to the nearest lower integer.
- `ceil(value: number): number`: Ceils a number to the nearest higher integer.
- `toBoolean(value: string): boolean`: Converts a string to a boolean. It is case insensitive and recognizes 'true' and 'false'.
- `stripHtml(value: string): string`: Removes all HTML tags from a string.
- `urlEncode(value: string): string`: Encodes a string to be used in a URL.
- `urlDecode(value: string): string`: Decodes a URL-encoded string.
- `toDate(value: string): Date | null`: Converts a string to a Date object. Returns null if the string cannot be converted.
- `toInteger(value: string): number`: Converts a string to an integer. Returns NaN if the string cannot be converted.
- `toFloat(value: string): number`: Converts a string to a float. Returns NaN if the string cannot be converted.
- `toJson(value: string): any`: Converts a string to JSON. Returns null if the string cannot be converted.

## Usage

You can use these functions directly on any input data to sanitize it according to your needs. For example:

```typescript
import { trim, toLowerCase, toNumber } from "path-to-sanitizers";

const userInput = "   Some User Input   ";
const cleanInput = trim(userInput); // 'Some User Input'
const lowerCaseInput = toLowerCase(cleanInput); // 'some user input'
const numericValue = toNumber("123.45"); // 123.45
```