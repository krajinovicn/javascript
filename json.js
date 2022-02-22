console.log("json script loaded");

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
};
console.log(JSON.stringify(person));

const personJSON = '{"firstName":"John","lastName":"Doe","age":23}';
console.log(JSON.parse(personJSON));

const arrayJSON = "[1, 2, 3, 4, 5]";
const array = JSON.parse(arrayJSON);
array.forEach((num) => console.log(num));
