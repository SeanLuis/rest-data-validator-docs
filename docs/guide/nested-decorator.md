# Nested Decorator

The `@Nested` decorator is used to apply nested validation rules to properties of a class. This decorator allows you to specify complex validation logic that can validate deeply nested objects or arrays of objects within your class instances.

## Example Usage

To use the `@Nested` decorator, you define your complex validator and then apply it to a class property using the decorator. Here's how you might use it in a class:

```typescript
@ClassValidator
class ComplexClass {
  @Nested({
    validator: complexClassValidator,
    validationOptions: {},
    each: true,
  })
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }
}
```

This example demonstrates how to apply the `@Nested` decorator to the `order` property of the `ComplexClass`. The decorator is configured with a complex validator that specifies how to validate the `Order` object and its nested properties.

## Conclusion

The use of `@Nested` along with other validation decorators provides a powerful and flexible way to enforce validation rules across complex data structures. By combining simple and complex validators, you can create comprehensive validation strategies that ensure the integrity of your data.
