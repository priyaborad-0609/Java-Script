/*4. Abstraction (Hiding Implementation Details)
👉 Scenario: You are developing a car rental system. The way a car starts (startEngine()) differs based on whether it’s a PetrolCar or ElectricCar, but the main method should remain the same.

✅ Task:

Create an abstract Car class with a method startEngine().
Implement two subclasses PetrolCar and ElectricCar, each defining startEngine() differently.*/


class Car{

    #name;
    #type;

    constructor(name,type){
        this.#name = name;
        this.#type = type;
    }

    StartEngine(){
        if(this.#type === "petrol")
        {
            document.writeln(this.#name + "STARTING PETROL ENGINE.." + "<br>");
        }
        else if(this.#type === "electric")
        {
            document.writeln(this.#name + "STARTING ELECTRIC ENGINE.." + "<br>");
        }
        else
        {
            document.writeln(this.#name + "UNKNOWN CAR.." + "<br>");
        }
    }
}

const petrol_car = new Car("Kia","electric");
const electric_car = new Car("Honda","petrol");

petrol_car.StartEngine();
electric_car.StartEngine();
