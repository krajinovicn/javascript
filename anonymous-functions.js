console.log("anonymous-functions script loaded");

let arr = [1, 2, 3, 4, 5];
console.log(arr.map(num => Math.pow(num, 2)));

let x = 2;
let y = 3;
(function(x, y) {
    console.log(x + y);
})(x, y);

const timesTwo = (number) => number * 2;
console.log(timesTwo(2));