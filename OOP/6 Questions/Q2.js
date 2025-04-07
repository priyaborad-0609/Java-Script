/* wap to craete a class for animal with attribute like name,type,gender and age, make these all
 attribute private to secure direct access of the users, perform input and output for 3 defferent
 animals.*/


class animal {
    #name;
    #type;
    #gender;
    #age;
    input(name, type, gender, age) {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age;
    }

    output() {
        document.writeln(this.#name);
        document.writeln(this.#type);
        document.writeln(this.#gender);
        document.writeln(this.#age);

    }
}

const a1 = new animal();
a1.input("Tuna","fish","male",24 + "<br>")
a1.output();

const a2 = new animal();
a2.input("Rabbit","belgian","male",9 + "<br>")
a2.output();

const a3 = new animal();
a3.input("Bear","black bears","female",15 + "<br>")
a3.output();