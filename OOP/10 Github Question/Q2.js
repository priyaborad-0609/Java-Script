/* 2. Inheritance (Tricky Question with All Types)
👉 Scenario: You are working on a vehicle rental system. Different types of vehicles share some common properties, but there are multiple levels and categories of vehicles.

✅ Task:

Create a Vehicle class with properties brand and year.
Create a Car class that extends Vehicle and adds a fuelType property.
Create a Bike class that extends Vehicle and adds a hasGear property.
Add another class ElectricCar that extends Car and adds a batteryCapacity property.
Implement a getDetails() method in Vehicle and override it in different subclasses. */

class Vehicle{

    #brand;
    #year;

    constructor(brand,year){
        this.#brand = brand;
        this.#year = year;
    }

    getDetailes(){
        document.writeln("Brand: "+this.#brand+"<br>")
        document.writeln("Year: "+this.#year+"<br>")
    }
}

class Car extends Vehicle{
    #fuletype;

    constructor(brand,year,fuletype){
        super(brand,year);
        this.#fuletype = fuletype;
    }

    getDetailes(){
        super.getDetailes();
        document.writeln("Fuletype: "+this.#fuletype);
    }
}

class Bike extends Vehicle{
    #hasgear;

    constructor(brand,year,hasgear){
        super(brand,year);
        this.#hasgear = hasgear;
    }

    getDetailes(){
        super.getDetailes();
        document.writeln("hasgear: "+this.#hasgear);
    }
}

class ElectricCar extends Car{
    #batteryCapacity;

    constructor(brand,year,batteryCapacity){
        super(brand,year,fuletype);
        this.#batteryCapacity = batteryCapacity;
    }

    getDetailes(){
        super.getDetailes();
        document.writeln("batteryCapacity: "+this.#batteryCapacity);
    }
}


const car = new Car("Tata Nexon",2017,"Petrol"+"<Br>");
car.getDetailes();

const bike = new Bike("Honda",2010,"Petrol");
car.getDetailes();

const EV = new ElectricCar("Kia",2023,"Electric");
car.getDetailes();