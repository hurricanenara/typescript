"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Nara" }, { age: 30 });
const mergedObj2 = merge({ name: "Nara", hobbies: ["hobby1"] }, { age: 30 });
console.log(mergedObj2);
