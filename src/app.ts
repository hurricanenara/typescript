class Department {
  //   private id: string;
  //   private name: string;
  // if private is used over protected, it will only be available in this lass
  protected employees: string[] = []; // use protected over private to have access from child classes

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // adding our own method of addEmployee by overriding
  addEmployee(name: string) {
    if (name === "Nara") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("a1", []);

accounting.addReport("First Report");
accounting.mostRecentReport = "Second Report";
accounting.addEmployee("Nara");
accounting.addEmployee("Gammie");

console.log(accounting.mostRecentReport);

const it = new ITDepartment("i1", ["Nara"]);
it.addEmployee("Nara");
it.addEmployee("Gammie");

// accounting.employees[2] = "P"; // avoid having more than one way to add

// it.describe();
// it.printEmployeeInformation();
// console.log(it);
console.log(accounting);

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
