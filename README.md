# json-mock-lite

`json-mock-lite` is a lightweight javascript package for generating sample JSON data based on custom JSON Schema definitions. Ideal for testing and development, this package allows you to create realistic mock data that adheres to your specified schema structure.

![Build](https://img.shields.io/github/actions/workflow/status/ashishcumar/json-mock-lite/publish.yml)
![Lightweight](https://img.shields.io/badge/lightweight-12kb-green)
![Fast](https://img.shields.io/badge/fast-12kb-blue)
![Npm-Version](https://img.shields.io/npm/v/json-mock-lite.svg)

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
import {mock} from "json-mock-lite";

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' }
  }
};

const mockData = mock(schema);

console.log(mockData);
// Output: { name: 'John Doe', age: 30 }
```


## Supported JSON Schema Types
- `string`
- `integer`
- `number`
- `boolean`
- `array`
- `object`

## Supported JSON Schema Constraints
- `minLength`: Sets the minimum length of a string.
- `maxLength`: Sets the maximum length of a string.
- `minimum`: Sets the minimum value for a number or integer.
- `maximum`: Sets the maximum value for a number or integer.

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

- **String Constraints**
    - `minLength`: Minimum length of a string.
    - `maxLength`: Maximum length of a string.

```
{
  "type": "string",
  "minLength": 3,
  "maxLength": 10
}
```

- **Number Constraints**
   - `minimum`: Minimum value for a number or integer.
   - `maximum`: Maximum value for a number or integer.

```
{
  "type": "integer",
  "minimum": 18,
  "maximum": 99
}
```

- **Array Constraints**
  - `minItems`: Minimum number of items in an array.
  - `maxItems`: Maximum number of items in an array.

```
{
  "type": "array",
  "minItems": 5,
  "maxItems": 10
}
```

## Nested Structures :-

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
