// decorators

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Logging - Person")
@WithTemplate("<h1>Person Object</h1>", "app")
class Person {
  name = "Nara";

  constructor() {
    console.log("Creating Person object...");
  }
}

const per = new Person();
// console.log(per);
