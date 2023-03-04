const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

myPromise.then((result) => console.log(result)).catch((error) => console.log(error));
