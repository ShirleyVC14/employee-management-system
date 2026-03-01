class Employee {     // base for employee class
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {  // subclass under employee for managers
    constructor(name, department, teamSize) {
        super(name, department);   
        this.teamSize = teamSize;  // manager team size
    }

    describe() {  
        return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} employees.`;
    }
}

const emp1 = new Employee("Tina Fox", "Marketing"); //employee samples
const emp2 = new Employee("John Wolf", "Finance");

const mgr1 = new Manager("David Toads", "IT", 7);  //manager samples
const mgr2 = new Manager("Allison Bee", "HR", 5);

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());  // fixed variable name
        });
    }
}

const myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();
