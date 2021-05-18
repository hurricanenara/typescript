// generics

// const names: Array<string> = []; // same as string[]
// // const names: Array<string | number> = [];
// // const names: any[] = [];

// // promises
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   // const promise: Promise<any> = new Promise((resolve, reject) => { // this would allow us to falsely call built in functions on wrong types
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// creating generic functions

function merge<T, U>(objA: T, objB: U) {
  // returns intersection of the two inputs
  // does not work with :object type
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Nara" }, { age: 30 }));
const mergedObj = merge({ name: "Nara" }, { age: 30 });
const mergedObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Nara", hobbies: ["hobby1"] },
  { age: 30 }
); // this is redundant as typescript will infer the types

// const mergedObj = merge({ name: "Nara" }, { age: 30 }) as {
//   name: string;
//   age: number;
// }; // but cumbersome
console.log(mergedObj2);
