/* create a class named student with private attributes roll_no,name,age,std and percentage, initialize
 all attributes by parameterized constructor(private attributes need to declare in global scope in class)
 and print all details for 3 students.*/

 class student{

    #roll_no;
    #name;
    #age;
    #std;
    #percentage;

    constructor(roll_no,name,age,std,percentage){
        this.#roll_no = roll_no;
        this.#name = name;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;   
    }

    print(){
        document.writeln(this.#roll_no);
        document.writeln(this.#name);
        document.writeln(this.#age);
        document.writeln(this.#std);
        document.writeln(this.#percentage);
    }
 }

 const s1 = new student(12,"Shruti",20,12+"std",94 + "<br>");
 s1.print();
 const s2 = new student(15,"Roshni",18,11+"std",94 + "<br>");
 s2.print();
 const s3 = new student(20,"Saloni",22,"clg",94 + "<br>");
 s3.print();

 


