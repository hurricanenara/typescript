// generics

const names: Array<string> = []; // same as string[]
// const names: Array<string | number> = [];
// const names: any[] = [];

// promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  // const promise: Promise<any> = new Promise((resolve, reject) => { // this would allow us to falsely call built in functions on wrong types
  setTimeout(() => {
    resolve("Done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
