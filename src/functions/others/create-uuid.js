const uuid = () => {
  const generate4CharsString = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substr(1);
  };

  const callGenerate4CharsString = (times) => {
    const result = [...Array(times)].map((_, i) => generate4CharsString());
    return result.join('');
  };

  return `${callGenerate4CharsString(1)}-${callGenerate4CharsString(
    2
  )}-${callGenerate4CharsString(3)}-${callGenerate4CharsString(
    2
  )}-${callGenerate4CharsString(1)}`;
};

// test the code above
const newUser = (firstName, lastName) => {
  return {
    id: uuid(),
    firstName,
    lastName,
  };
};

console.log(newUser('Test', 'Testov'));
console.log(newUser('Test2', 'Testov2'));
