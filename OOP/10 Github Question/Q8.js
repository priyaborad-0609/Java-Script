/*8. Composition (Object Inside Object - Clearer Explanation)
👉 Scenario: You are developing a company employee management system where each department has multiple employees.

✅ Task:

Create an Employee class with properties name and position.
Create a Department class that contains an array of Employee objects.
Implement a method in Department to return the names of all employees in that department.*/


class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];  
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getEmployeeNames() {
        return this.employees.map(employee => employee.name);
    }
}


const emp1 = new Employee("John Doe", "Developer");
const emp2 = new Employee("Jane Smith", "Designer");
const emp3 = new Employee("Mike Johnson", "Manager");

const devDepartment = new Department("Development");
devDepartment.addEmployee(emp1);
devDepartment.addEmployee(emp2);
devDepartment.addEmployee(emp3);

document.writeln(devDepartment.getEmployeeNames()); 
