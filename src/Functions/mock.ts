interface Schema {
  type: 'object' | 'array' | 'string' | 'number' | 'integer' | 'boolean';
  properties?: {
      [key: string]: Schema;
  };
  items?: Schema;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  minItems?: number;
  maxItems?: number;
}

function mock(schema: Schema): any {
  switch (schema.type) {
    case "object":
      return generateObject(schema);
    case "array":
      return generateArray(schema);
    case "string":
      return generateString(schema);
    case "number":
    case "integer":
      return generateNumber(schema);
    case "boolean":
      return generateBoolean();
    default:
      return null;
  }
}

function generateObject(schema:Schema) {
  const obj:any = {};
  if (schema.properties) {
    for (const key in schema.properties) {
      if (schema.properties.hasOwnProperty(key)) {
        obj[key] = mock(schema.properties[key]);
      }
    }
  }
  return obj;
}

function generateArray(schema:Schema) {
  const itemsSchema = schema.items;
  const length = getRandomInt(Number(schema.minItems), Number(schema.maxItems));
  return Array.from({ length }, () => mock(itemsSchema as Schema));
}

function generateString(schema:Schema) {
  const minLength = schema.minLength || 1;
  const maxLength = schema.maxLength || 20;
  return getRandomString(getRandomInt(minLength, maxLength));
}

function generateNumber(schema:Schema) {
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  return getRandomFloat(min, max);
}

function generateBoolean() {
  return Math.random() > 0.5;
}

function getRandomString(length:number) {
  const characters =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getRandomInt(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min:number, max:number) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export { mock };
