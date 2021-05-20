// decorators

function Logger(logString: string) {
  console.log("LOGGER FACTORY ---");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
// since line 17-25 moved into second return statement, decorator not executed unless class instantiated instead of when class is defined
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY ---");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        // ...args -> ..._ since args not used
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

const per = new Person();
// console.log(per);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator -----");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decotator ------");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decotator ------");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decotator ------");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2 // accessor decorator
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

  @Log3 // method decorator
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(
  _: any, // changed to _ from target since not used
  _2: string | Symbol, // changed to _ from methodName since not used
  desciptor: PropertyDescriptor
) {
  const originalMethod = desciptor.value; // gives us the original method/function
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // getter layer binds the method to the class
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
  // locally scoped with arrow function without decorator
  // showMessage = () => {
  //   console.log(this.message);
  // };
}

// after autobind it works like this as well
// printer.showMessage();

const button = document.querySelector("button")!;
const printer = new Printer();
button.addEventListener("click", printer.showMessage);
// button.addEventListener("click", printer.showMessage.bind(printer)); // bind method
