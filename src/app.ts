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

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

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
