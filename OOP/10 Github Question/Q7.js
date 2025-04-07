/*7. Getter & Setter Methods (Easier Example)
👉 Scenario: You are developing a student grading system where a student has marks in percentage, but the grade (A, B, C, etc.) should be automatically determined.

✅ Task:

Create a Student class with a property percentage.
Use a getter grade that returns the grade based on the percentage.
Use a setter grade that updates percentage based on the grade entered (A, B, C, etc.).
✅ Example:

let student = new Student();
student.percentage = 85;  // Setting percentage
console.log(student.grade); // Should return 'A'*/

class Student {
    constructor() {
        this._percentage = 0;
    }

    get percentage() {
        return this._percentage;
    }

    set percentage(value) {
        this._percentage = value;
    }

    get grade() {
        if (this._percentage >= 90) return 'A';
        if (this._percentage >= 80) return 'B';
        if (this._percentage >= 70) return 'C';
        if (this._percentage >= 60) return 'D';
        return 'F';
    }

    set grade(letter) {
        const gradeMap = {
            'A': 90,
            'B': 80,
            'C': 70,
            'D': 60,
            'F': 0
        };
        this._percentage = gradeMap[letter] || 0;
    }
}

let student = new Student();
student.percentage = 85;  
document.writeln(student.grade); 

student.grade = 'A';     
document.writeln(student.percentage); 