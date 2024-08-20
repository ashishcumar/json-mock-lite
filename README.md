# json-mock-lite

`json-mock-lite` is a lightweight javascript package for generating sample JSON data based on custom JSON Schema definitions. Ideal for testing and development, this package allows you to create realistic mock data that adheres to your specified schema structure.

## Features

* Generate sample JSON data based on custom JSON Schema definitions
* Support for various JSON Schema types and constraints
* Lightweight and easy to use
* No external dependencies required

## Installation

```bash
npm install json-mock-lite
```

## Usage

```
const jsonMockLite = require('json-mock-lite');

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' }
  }
};

const mockData = jsonMockLite.generate(schema);

console.log(mockData);
// Output: { name: 'John Doe', age: 30 }
```


## Supported JSON Schema Types
 
 - `string`  `integer` `number` `boolean` `array` `object`

## Supported JSON Schema Constraints

- `minLength` `maxLength` `minimum` `maximum`

## JSON Schema Basics

**JSON Schema Properties** :-

- **Properties**: Defines the properties of an object.
```
Example:-

"type": "object",
"properties": {
  "name": {"type": "string"},
  "age": {"type": "integer"}
}
```
- **Items**: Defines the items in an array.

```
Example:-

"type": "array",
"items": {"type": "string"}
```

- **MinLength** and **MaxLength**: Specify the minimum and maximum length of a string value.

```
Example:-

"type": "string",
"minLength": 3,
"maxLength": 10
```
- **Minimum** and **Maximum**: Specify the minimum and maximum value of a number or integer value.

```
Example:-

"type": "integer",
"minimum": 18,
"maximum": 99
```
- **MinItems** and **MaxItems**: Specify the minimum and maximum number of items in an array.
```
Example:-

"type": "array",
"minItems": 5,
"maxItems": 10
```

**Nested Structures** :-

- **Nested Objects**: Use the `properties` keyword to define an object within an object.
```
Example:-

"type": "object",
"properties": {
  "name": {"type": "string"},
  "address": {
    "type": "object",
    "properties": {
      "street": {"type": "string"},
      "city": {"type": "string"}
    }
  }
}
```
- **Array of Objects**: Use the `items` keyword to define an object within an array.

```
Example:-

"type": "array",
"items": {
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "age": {"type": "integer"}
  }
}
```







