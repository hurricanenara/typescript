abstract class Department {
  // static props are not available inside of other class props -but can be used like Department.props
  // static props are detached from instances
  static fiscalYear = 2021;
  //   private id: string;
  //   private name: string;
  // if private is used over protected, it will only be available in this lass
  protected employees: string[] = []; // use protected over private to have access from child classes

  constructor(protected readonly id: string, public name: string) {
    // shorthand initialization in params
    // readonly prohibits it from changing
    // this.name = n;
    // console.log(Department.fiscalYear); // this works
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log(`IT Dept ID - ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

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

  private constructor(id: string, private reports: string[]) {
    // private constructor => singleton
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Dept - ID: ${this.id}`);
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

const employee1 = Department.createEmployee("Nara");
// console.log(employee1, Department.fiscalYear);

const accounting = AccountingDepartment.getInstance();

accounting.addReport("First Report");
accounting.mostRecentReport = "Second Report";
accounting.addEmployee("Nara");
accounting.addEmployee("Gammie");

accounting.describe();

// console.log(accounting.mostRecentReport);

const it = new ITDepartment("i1", ["Nara"]);
it.addEmployee("Nara");
it.addEmployee("Gammie");
it.describe();

// accounting.employees[2] = "P"; // avoid having more than one way to add

// it.describe();
// it.printEmployeeInformation();
// console.log(it);
// console.log(accounting);

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
