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
// type contraints

// function merge<T, U>(objA: T, objB: U) {
//   // returns intersection of the two inputs
//   // does not work with :object type
//   return Object.assign(objA, objB);
// }

// what we are doing by extending is we are providing constraints!
function merge<T extends object, U extends object>(objA: T, objB: U) {
  // function merge<T extends string | number, U extends object>(objA: T, objB: U) { flexible extensions
  // returns intersection of the two inputs
  // does not work with :object type
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Nara" }, { age: 30 }));
// const mergedObj = merge({ name: "Nara" }, 30); // passing in number instead of obj to second param will fail silently, but if object is extended like on line 28, it will throw and error
const mergedObj = merge({ name: "Nara" }, { age: 30 });
const mergedObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Nara", hobbies: ["hobby1"] },
  { age: 30 }
); // <> this is redundant as typescript will infer the types

// const mergedObj = merge({ name: "Nara" }, { age: 30 }) as {
//   name: string;
//   age: number;
// }; // but cumbersome
// console.log(mergedObj);
// console.log(mergedObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));
// console.log(countAndDescribe(["1", "2"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Nara" }, "name");

// generic classes
class DataStorage<T extends string | number | boolean> {
  // allows you to choose a data type and allow only that data type to be added/removed
  //   private data: (string | number | boolean)[] = []; with class DataStorage {}
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Nara");
textStorage.addItem("Seungyoon");
textStorage.removeItem("Seungyoon");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const naraObj = { name: "Naras" };
// objStorage.addItem(naraObj);
// objStorage.addItem({ name: "Seungyoon" });
// objStorage.removeItem(naraObj);
// console.log(objStorage.getItems());

// Partial Type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  //   return courseGoal; won't work
  return courseGoal as CourseGoal;
}

// readonly type
const names: Readonly<string[]> = ["Nara", "Seungyoon"];
// readonly prohibits push and pop
names.push("Paul");
names.pop();

// generic types LOCK IN a type
// union types are more flexible
