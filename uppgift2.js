/* I den här uppgiften ska ni arbeta med nummer/integers och strings. 
Se till att den andra <script> raden i index.html inte är utkommenterad när ni testar koden.
Datorn kan läsa numeriska värden som de är men inte tecken. 
Använd citattecken för att lägga in tecken som data.
*/


var name = "Catherine";
var age = 26;
var height = 164
var weight = 60
var eyes = "brun"
var hair = "svart"
  
console.log("Det här är " + name + ".");
console.log(name + " är " + age + " år");
console.log(name + " är " + height + "cm lång." );
console.log(name + " väger " + weight + "kg." );
console.log( name + " har " + eyes + " ögon och " + hair + " hår" );

console.log("Om vi lägger ihop " + name + "s ålder vikt och längd får vi " + (age + height + weight));