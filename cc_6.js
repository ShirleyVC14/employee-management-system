class Employee {     //base for employee class
    constructor(name, departemnt) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {  //subclass under employee for managers
    constructor(name, departement, teamSize) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

const emp1 = new Employee("Tina Fox", "Marketing");
const emp2 = new Employee("John Wolf", "Finance");

const mgr1 = new Manager("David Toads", "IT", 7);
const mgr2 = new Manager("Allison Bee", "HR", 5);

class Company {
    constructor() {
        this.employees = [];
    }

addEmployee(employee) {
    this.employees.push(employee);
    }
listEmployees() {
    this.employees.forEach(em => {
            console.log(emp.describe());
        });
    }
}
