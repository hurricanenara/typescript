// decorators

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Nara";

  constructor() {
    console.log("Creating Person object...");
  }
}

const per = new Person();
console.log(per);
