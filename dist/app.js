"use strict";
var _a;
var e1 = {
    name: "Nara",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add("Nara", "Seungyoon");
var result2 = add("Nara", 1);
result.split("");
var fetchedUserData = {
    id: "u1",
    name: "Nara",
    job: { title: "CEO", description: "Naracoin" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("start date: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Nara", startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo" + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningspeed;
    }
    console.log("Moving at " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
var userInput = document.getElementById("user-input");
if (userInput) {
    userInput.value = "Hi There";
}
userInput.value = "Hi There";
var errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital letter",
};
