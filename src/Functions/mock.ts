function generateData(schema) {
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
  
  function generateObject(schema) {
    const obj = {};
    if (schema.properties) {
      for (const key in schema.properties) {
        if (schema.properties.hasOwnProperty(key)) {
          obj[key] = generateData(schema.properties[key]);
        }
      }
    }
    return obj;
  }
  
  function generateArray(schema) {
    const itemsSchema = schema.items;
    const length = getRandomInt(schema.minimum, schema.maximum); // Random array length between 1 and 5
    return Array.from({ length }, () => generateData(itemsSchema));
  }
  
  function generateString(schema) {
    const minLength = schema.minLength || 1;
    const maxLength = schema.maxLength || 20;
    return getRandomString(getRandomInt(minLength, maxLength));
  }
  
  function generateNumber(schema) {
    const min = schema.minimum || 0;
    const max = schema.maximum || 100;
    return getRandomFloat(min, max);
  }
  
  function generateBoolean() {
    return Math.random() > 0.5;
  }
  
  function getRandomString(length) {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomFloat(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  export {
    generateData as mock
  }