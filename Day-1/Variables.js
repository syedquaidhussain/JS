// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// 1.Automatically-Not recommended 
// 2.Using var
// 3.Using let
// 4.Using const

// Eg of Automatically
x=2;
y=3;
z=x+y;
console.log(z);


// Example using var
var x=2;
var y=3;
var z=x+y;

// Example using let
let x = 5;
let y = 6;
let z = x + y;


//Example using const
const x = 5;
const y = 6;
const z = x + y;


//Mixed Example

const price1 = 5;
const price2 = 6;
let total = price1 + price2;


// Difference between let,var,const

// LET
// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope

// Eg-> {
//   let x = 2;
// }
// x can NOT be used here


// VAR 
// Variables declared with the var always have Global Scope.

// Variables declared with the var keyword can NOT have block scope:

// {
//     var x = 2;
//   }
// // x can  be used here

//CONST
// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope


// Use of var , let const 

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

