// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class employee {
    id;
    name;
    salary;
    role;
    set(id, name, salary, role) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.role = role;
    }

    get() {
        document.writeln(this.id);
        document.writeln(this.name);
        document.writeln(this.salary);
        document.writeln(this.role);
    }
}
const e1 = new employee();
e1.set(50, "Roshni", 30000, "Manager" + "<br>")
e1.get();

const e2 = new employee();
e2.set(82, "Manasi", 50000, "Accountant" + "<br>")
e2.get();

const e3 = new employee();
e3.set(94, "Saloni", 80000, "HR" + "<br>")
e3.get();


