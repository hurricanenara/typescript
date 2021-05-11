// union type in ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // literal types
) {
  // you can have more than two pipes/types
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNams = combine("Nara", "Seungyoon", "as-text");
console.log(combinedNams);
