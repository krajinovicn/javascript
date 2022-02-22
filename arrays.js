console.log("arrays script loaded");

const colours = ["red", "green", "blue"];

for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

colours.forEach((colour) => console.log(colour));

const arr = [1, 2, 3, 4];

const rotate = (arr, steps) => {
  let i = 0;
  let j = 0;

  while (i < steps) {
    if (i > arr.length - 1) {
      j = 0;
    }
    [arr[j], arr[arr.length - 1 - j]] = [arr[arr.length - 1 - j], arr[j]];
    i++;
    j++;
  }

  return arr;
};
console.log(rotate(arr, 5));

const sumPlus50 = (arr) => arr.reduce((prev, curr) => prev + curr, 50);
console.log(sumPlus50(arr));

const numToArr = (num) => {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr = [...arr, i];
  }
  for (let i = num - 1; i >= 0; i--) {
    arr = [...arr, i];
  }
  return arr;
};
console.log(numToArr(4));

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];

const zooInventory = (zoo) => {
  let arr = [];

  zoo.forEach((animal) => {
    arr.push(`${animal[0]} the ${animal[1][0]} is ${animal[1][1]} years old.`);
  });

  return arr;
};
console.log(zooInventory(myZoo));
