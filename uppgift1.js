/* 
I den här uppgiften ska ni arbeta med nummer/integers. 
För att lösa uppgiften, använd vanliga matematiska operatorer så som +,-,*,/. 
Se till att den första <script> raden i index.html inte är utkommenterad när ni testar koden.

För att se resultatet av er kod så måste ni öppna webbläsarens console.
Efter du är klar med uppgiften, manipulera värdena i variablerna nedanför och se vad som händer.
*/

var cars = 100;
var seats_in_car = 4;
var drivers = 30;
var passengers = 90;

//Använd variablerna ovan för att lösa koden nedan

var cars_without_drivers = cars - drivers;
    
var cars_with_drivers = cars - cars_without_drivers;
  
var carpool_capacity = cars_with_drivers * seats_in_car;  //Räkna ut det totala antalet passagerarplatser, alla bilar med förare (cars_with_drivers) har tillsammans;
  
var average_passengers_per_car_in_pool =  passengers / cars_with_drivers  //Räkna ut snittet på antal passagerare per bil som ingår i carpoolen.
  
//När ni gjort klart variablerna ovan så bör koden nedanför visa resultatet i konsollen på er webbläsare
  
console.log("There are " + cars + " cars available.");
console.log("There are only " + drivers + " drivers available");
console.log("There will be " + cars_without_drivers + " cars without drivers");
console.log("We can transport " + carpool_capacity + " people today");
console.log("We have " + passengers + " to carpool today");
console.log("We need to put about " + average_passengers_per_car_in_pool + " in each car");