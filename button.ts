const button = document.querySelector("button");

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return; // return needed if noImplicitReturns turned on
}

function clickHandler(message: string) {
  // let userName = "Nara";
  console.log("Clicked" + message);
}

// button?.addEventListener("click", () => {
//   console.log("clicked");
// });

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "Correct Type"));
}
