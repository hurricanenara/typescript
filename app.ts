function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  // can have a return type of undefined e.g. return;
  console.log("result" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // see line 17 regarding void callback
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  //   return result; although specified to not return anything, this is legal, but it just won't be used in any way
});

printResult(add(5, 12));

// function types
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));

// let someValue: undefined; //is valid
