/*5. Constructor & Object Creation
👉 Scenario: You are building a food delivery app where each restaurant has a name, cuisine type, and rating.

✅ Task:

Create a Restaurant class with properties: name, cuisineType, and rating.
Instantiate 3 restaurant objects with different values.*/

class Restaurant {
    constructor(name, cuisineType, rating) {
      this.name = name;
      this.cuisineType = cuisineType;
      this.rating = rating;
    }
}

document.writeln("Name: "+this.name+"<br>");
document.writeln("CuisineType: "+this.cuisineType+"<br>");
document.writeln("Rating: "+this.Rating+"<br>");

const restaurant1 = new Restaurant("Burger King", "American", 4.1);
const restaurant2 = new Restaurant("Sushi Palace", "Japanese", 4.5);
const restaurant3 = new Restaurant("Taco Fiesta", "Mexican", 4.3);

restaurant1.print();
restaurant2.print();
restaurant3.print();
