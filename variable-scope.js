console.log("variable-scope script loaded");

let z = 3;
function foo() {
  for (let i = 0; i < 5; i++) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // success
  // console.log(y); // ReferenceError - must be a var
  console.log(z); // success no matter the declaration type
  var t = 4;
}

foo();
// console.log(t); // ReferenceError no matter the declaration type
