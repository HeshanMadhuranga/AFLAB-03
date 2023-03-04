const promiseModule = require("./promise.js");

async function myasynfunction() {
  try {
    const result = await promiseModule.myPromise();
  } catch (error) {
    console.log(error);
  }
}
myasynfunction();
