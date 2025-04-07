// wap to perform method overriding to display student details.
// school(name,year) -> student(name,std,school,year)
// display() <- override this method

class School {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    display() {
        console.log(`School Name: ${this.name}`);
        console.log(`Established Year: ${this.year}`);
    }
}

class Student extends School {
    constructor(name, std, school, year) {
        super(school, year); // Call parent constructor
        this.studentName = name;
        this.standard = std;
    }

    display() {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Standard: ${this.standard}`);
        super.display(); // Call parent's display method
    }
}

const mySchool = new School("ABC Public School", 1990);
console.log("School Details:");
mySchool.display();

console.log("\nStudent Details:");
const student1 = new Student("Rahul Sharma", "10th", "ABC Public School", 1990);
student1.display();
