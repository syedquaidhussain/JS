// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true



// use of for loop with Loop Scope

var i = 5;

for (var i = 1; i < 10; i++) {
  console.log(i)
}

console.log(i) // Here i will be 10



// for in loop 
// Eg 1
const object = {
    "name ": "Aman",
    "age" : 20,
    "city":"Delhi"
}

for(let keys in object) {
    console.log(`Keys in object is ${keys} and its corresponding value is ${object[keys]}`)
 
}
// 2
const cars = ["BMW", "Volvo", "Mini"];


for (let x in cars) {
  console.log(x)
}


// For of loop Eg
// 1
const nameOfPerson =  "Aman";

for(let x of nameOfPerson) {
    console.log(x)
}

// 2
const collection = ["BMW", "Volvo", "Mini"];
for(let x of collection)
{
    console.log(x)
}
























// Note
/*
Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order we expect.
*/
// Explaination 

// let arr = [10, 20, 30]; 

// arr["foo"] = "bar"; // Adding a custom property

// for (let index in arr) {
//   console.log(index); // Outputs "0", "1", "2", "foo" in some order
//   console.log(arr[index]); // May not return in the order of "0", "1", "2"
// }



