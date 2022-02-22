console.log("promises script loaded");

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success!");
  }, 300);
});

myPromise
  .then(() => console.log("Success!"))
  .catch(() => console.log("Error!"));

const yourPromise = 42;
const theirPromise = Promise.resolve(3);

Promise.all([myPromise, yourPromise, theirPromise])
  .then((values) => console.log(values))
  .catch((e) => console.log(e));

// could be useful for sending multiple mutually dependent requests in one go
// can't think of a real life example though
