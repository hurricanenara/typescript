// interface Admin = {
//   name: string;
//   privileges: string[];
// };

// interface Employee = {
//   name: string;
//   startDate: Date;
// };
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Nara",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function add(a: number): number; // works with one param if b is made optional on line 35
function add(a: number, b: number): number; // function overload
function add(a: string, b: string): string; // function overload
function add(a: number, b: string): string; // function overload
function add(a: string, b: number): string; // function overload
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// function overload

// const result = add("Nara", "Seungyoon") as string; // add as string to make split work
const result = add("Nara", "Seungyoon"); // add as string to make split work
const result2 = add("Nara", 1); //
result.split("");

// optional chaining

const fetchedUserData = {
  id: "u1",
  name: "Nara",
  job: { title: "CEO", description: "Naracoin" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title); // compiles to an if check

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("start date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Nara", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningspeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
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

// type casting
// ! -> will never yield null
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;

// alternative
if (userInput) {
  (userInput as HTMLInputElement).value = "Hi There";
}

userInput.value = "Hi There";

// Index properties
interface ErrorContainer {
  // {email: "Not a valid email", username: "must start with..."}
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital letter",
};

// function overloads - multiple ways to call a function with different params
