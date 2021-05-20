// decorators

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging - Person")
class Person {
  name = "Nara";

  constructor() {
    console.log("Creating Person object...");
  }
}

const per = new Person();
// console.log(per);
