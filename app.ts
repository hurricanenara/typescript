function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  // can have a return type of undefined e.g. return;
  console.log("result" + num);
}

printResult(add(5, 12));

// let someValue: undefined; //is valid
