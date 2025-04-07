/* perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
 indian class - adharNo,birthPlace
 person - name,age,gender
 emp - id,salary, role
 access all properties of parent by child class only and set and get all values.*/

 class india{
    constructor(adharNo,birthPlace){
        this.adharNo = adharNo;
        this.birthPlace = birthPlace;
    }

    print(){
        document.writeln(this.adharNo + "<br>");
        document.writeln(this.birthPlace + "<br>");
    }
 }

 class person extends india{
    constructor(adharNo,birthPlace,name,age,gender){

        super(adharNo,birthPlace)

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    person_print(){
        document.writeln(this.name + "<br>");
        document.writeln(this.age + "<br>");
        document.writeln(this.gender + "<br>");
    }
 }

 class employee extends person{
    constructor(adharNo,birthPlace,name,age,gender,id,salary,role){
        super(adharNo,birthPlace,name,age,gender)

        this.id = id;
        this.salary = salary;
        this.role = role;                       
    }

    employee_print(){
        document.writeln(this.id + "<br>");
        document.writeln(this.salary + "<br>");
        document.writeln(this.role + "<br>");

    }
 }

 const information = new employee(235645127896,"goa","Rishi",20,male,450,40000,"Hr")
 information.print();
 information.person_print();
 information.employee_print();