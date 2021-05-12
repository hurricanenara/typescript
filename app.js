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
    throw { message: message, errorCode: code };
}
generateError("An error occurred", 500);
