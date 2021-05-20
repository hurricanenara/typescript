// decorators

function Logger(logString: string) {
  console.log("LOGGER FACTORY ---");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY ---");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Logging - Person")
@Logger("LOGGING!")
@WithTemplate("<h1>Person Object</h1>", "app")
// the decorator FUNCTIONS executed bottom-up
class Person {
  name = "Nara";

  constructor() {
    console.log("Creating Person object...");
  }
}

// const per = new Person();
// console.log(per);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator -----");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
