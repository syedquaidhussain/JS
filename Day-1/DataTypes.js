// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined-> Variable has been declared but not assigned a value 
// Null-> null is an assignment value, meaning that a variable has been declared and given the value of null .
// Symbol
// Object


// Eg


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// Eg of BigInt -> When integer value is very long 
let c = BigInt("123456789012345678901234567890");




// Learnings
// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let x1 = 16 + 4 + "Volvo";
// output-> 20Volvo

let x2 =  "Volvo"+16 + 4 ;
// output-> Volvo164



// Learning

// // You cannot perform math between a BigInt type and a Number type.
