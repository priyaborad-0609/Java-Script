/*10. Factory Pattern
👉 Scenario: You are developing a vehicle manufacturing system where cars and bikes are created dynamically based on input.

✅ Task:

Implement a VehicleFactory class with a createVehicle(type, brand, year) method.
Based on the type, return either a Car or Bike instance.*/


class Vehicle {
    constructor(type, brand, year) {
      this.type = type;
      this.brand = brand;
      this.year = year;
    }
  
    displayInfo() {
        document.writeln(`Type: ${this.type}, Brand: ${this.brand}, Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, year) {
      super("Car", brand, year);
      this.wheels = 4;
    }
  
    honk() {
        document.writeln("Beep beep! 🚗");
    }
  }
  
  class Bike extends Vehicle {
    constructor(brand, year) {
      super("Bike", brand, year);
      this.wheels = 2;
    }
  
    ringBell() {
        document.writeln("Ring ring! 🚲");
    }
  }
  
  class VehicleFactory {
    static createVehicle(type, brand, year) {
      switch (type.toLowerCase()) {
        case "car":
          return new Car(brand, year);
        case "bike":
          return new Bike(brand, year);
        default:
          throw new Error("Unknown vehicle type!");
      }
    }
  }
  
  const myCar = VehicleFactory.createVehicle("Car", "Toyota", 2023);
  const myBike = VehicleFactory.createVehicle("Bike", "Honda", 2022);
  
  myCar.displayInfo(); 
  myCar.honk();       
  
  myBike.displayInfo(); 
  myBike.ringBell();  

  