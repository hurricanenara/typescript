function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  // can have a return type of undefined e.g. return;
  console.log("result" + num);
}

printResult(add(5, 12));

// function types
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));

// let someValue: undefined; //is valid
