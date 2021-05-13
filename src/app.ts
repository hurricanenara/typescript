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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("a1", []);
const it = new ITDepartment("i1", ["Nara"]);
accounting.addReport("First Report");
it.addEmployee("Nara");
it.addEmployee("Gammie");

// accounting.employees[2] = "P"; // avoid having more than one way to add

it.describe();
it.printEmployeeInformation();
console.log(it);
console.log(accounting);

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
