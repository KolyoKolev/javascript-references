const testObject = {
  'key 1': 'value 1',
  'key 2': 'value 2',
  'key 3': 'value 3',
};

// extracting the keys
Object.keys(testObject).forEach((key) => key);

// extracting the values
Object.values(testObject).forEach((value) => value);

// extracting both
Object.entries(testObject).forEach((entry) => {
  const [key, value] = entry;
  return `The value for ${key} is ${value}`;
});
