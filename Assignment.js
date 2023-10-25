//Problem solve start
//Problem 1: Write a function to calculate the area of a triangle
function value(base, height){
 const areaValue = (base * height)/2; 
 return("this area of the triangle is "+ areaValue);
}
//Problem 2: Write a function to convert degrees to radians.
function degToRad(deg){
    return deg * (Math.PI/180.0);
}
console.log(degToRad (90.0));
//Problem 3: Create a function calculateFactorial that takes a number and returns it's factorial.
function calculateFactorial(n){
 if(n == 0) {
     return 1
 }
 else{ 
    return calculateFactorial(n-1) * n
 }
}
console.log(calculateFactorial(5));
// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
 function isPrime(n){
     if(n<2)
     return '${n} is not a prime'

     for (let i = 2; i < n; i++){
         if ( n % i === 0) {
             return '${n} is not a prime number'
         }
     } return '$ is a prime number'
 }
 console.log(isPrime(19));
 // Problem 5:Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays
 const name = ["Rahim","Karim","Emon","Shakil"]
 const city = ["Dhaka","Kolkata","Turkish","Pentagon"]
 const common = [...name,...city]
 console.log(common);
 //Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
let dupArray = [1,2,1,3,4,3,5,6];
function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates(dupArray));
//Problem 8:Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function CelsiusToFahrenheit(Celsius){
    fahrenheit = (Celsius *9/5) +32;
    return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit){
    Celsius = (fahrenheit -32) *5/9;
    return Celsius;
}
console.log(CelsiusToFahrenheit(30));
console.log(fahrenheitToCelsius(86));
//Problem 9: Write a function to find the maximum of five numbers.
const fewNumber = [ 25,35,45,55,65];
const max = Math.max(...fewNumber);
console.log(max);
//Problem solve end.


//Ans to the Ques. No -2:
//What is JavaScript?

//Ans: javaScript is a scripting or programing language that can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data. In 4 December 1997 it's designed by Brendan Eich .

 // what is its primary purpose in web development?

 //Ans: The primary purpose for some websites is simply to present, share, or display some information or content online. The core purpose of web development is to create a simplicity and flexibility in website to help a user find and navigate links. It becomes easier and faster for a visitor to scroll and browse a website.

// Ans to the Ques. No -3:
// var
// Variables defined with var can be Redeclared
// Variables defined with var can be updated
 var Name = "Prince";
 var Name = "Das";
 console.log(Name);
// Let
// Variables defined with let cannot be Redeclared
// Variables defined with let can be updated
let favoriteColor = "blue";
favoriteColor ="Red";
console.log(favoriteColor);

// const variables can neither be updated nor re-declared.
const number = "12";

//Ans to the Ques. No -5:
// difference between "null" and "undefined" in JavaScript
//Null: 1. null is an assigned value. It means nothing.
// 2. It's type Object.
// 3. Null is also referred as false.
// Examples: 
isNaN(2 +  null)      // false
//Undefined: 1. undefined means a variable has been declared but not defined yet.
// 2. It's type undefined.
// 3. undefined is also referred as false.
//Examples:var temp;
if(temp === undefined)
console.log("true");
else
console.log("false");

//Output:

 true
// Ans to the Ques. No -4:
//difference between global and local scope.

//Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.
function myLocalScope() {
    let scopeName = "Local";
}
// Global Variables − A global variable has a global scope which means it can be defined anywhere in your JavaScript code.
let bradName = "Volvo";
function myFunction() {

}
