6. /*Static Methods & Properties
👉 Scenario: You are building a movie rating system where users can rate movies. The system should also track the total number of ratings given.

✅ Task:

Create a Movie class with properties: title and ratings (array).
Add a static property totalRatingsCount.
Implement a method addRating(rating) that updates both instance ratings and the static count.*/

class Movie {
    static totalRatings = 0; 
    
    constructor(title) {
      this.title = title;
      this.ratings = [];
    }
    
   
    addRating(rating) {
      this.ratings.push(rating);
      Movie.totalRatings++;
    }
  }
  
  const movie1 = new Movie("The Dark Knight");
  const movie2 = new Movie("Inception");
  
  movie1.addRating(5);
  movie1.addRating(4);
  movie2.addRating(5);
  
document.writeln(movie1.ratings); 
document.writeln(movie2.ratings); 
document.writeln("Total ratings:", Movie.totalRatings); 