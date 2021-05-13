class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // shorthand initialization in params
    // readonly prohibits it from changing
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("E1", "Engineering");
accounting.addEmployee("Nara");
accounting.addEmployee("Gammie");

// accounting.employees[2] = "P"; // avoid having more than one way to add

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
