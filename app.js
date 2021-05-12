"use strict";
var userInput; // not any - unknown is more restrictive
var userName;
userInput = 5;
userInput = "Nara";
// userName = userInput; // this is not allowed as userInput is of type unknown
// but this is allowed
if (typeof userInput === "string") {
    userName = userInput;
}
// the never type
function generateError(message, code) {
    //without never, it will be inferred with void though
    // instead of using void, using never is better as it will NEVER return anything
    // throw crashes this part of the script, therefore never returns anything
    throw { message: message, errorCode: code };
    //   while (true) {} is also a never function
}
generateError("An error occurred...", 500);
