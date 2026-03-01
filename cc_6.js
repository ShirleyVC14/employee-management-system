class Employee {     //base for employee class
    constructor(name, departemnt) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employees {  //subclass under employee for managers
    constructor(name, departement, teamSize) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
