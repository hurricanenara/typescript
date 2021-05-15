//  --- interface ---

// type vs interface function

// type AddFunction = (a: number, b: number) => number;
interface AddFunction {
  // anonymous function in interface
  (a: number, b: number): number; // : return type
}
let add: AddFunction;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// interface can used by to only describe an object - but interface is clearer than type
// interface like a module in js?
interface Named {
  //readonly can be added but not public or private
  readonly name?: string;
  outputName?: string; // optional property with a question mark
}
interface Greetable extends Named {
  // can extend multiple interfaces
  greet(phrase: string): void; // ? can be added to turn into optional func
}

// combining interfaces with Named Greetable
// separation of concerns is good

// why not use type?
/* 
type Person = {
  name: string;
  age: number;

  greet(phrase: string): void;
};
*/

class Person implements Greetable {
  // can implement more than one interface separated by commas
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}
// interface forces/informs user1 must have a greet method
let user1: Greetable;

user1 = new Person();
// user1.name = "not Nara"; // can't be done

user1.greet("Hi, I'm");
console.log(user1);
