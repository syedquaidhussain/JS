// syntax of function in js  
/*
function name(parameter1, parameter2, parameter3) {
   // code to be executed
 }
   */

 function sum(x,y) {

    return x+y;
}

let result = sum(2,4);
console.log("Sum of two numbers are ", result);




// Arrow functions 
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:


// Eg1 of Arrow function with parameter and with one return statement 
const sum1 = (x,y) => x+y;
console.log("Sum is ", sum1(1,1))


// Eg 2

let isPrime = number=>{
if(number==1) 
    return "Neither prime nor composite";

for(let i=2; i<number; i++)
{
 if(number%i==0)
    return false;
else 
  return true;
}
}

console.log(isPrime(1))




















/*
 A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}
 */

// Learning 
// 1.Accessing a function without () returns the function and not the function result:

/*
2.In JavaScript, when you access a function without parentheses () (i.e., myFunction), you're not invoking the function — you're referring to the function object itself.
This is similar to accessing a reference to a function, but JavaScript doesn't have explicit pointers like languages such as C or C++. Instead, JavaScript handles functions 
as first-class objects, 
which means they can be passed around and used as values just like any other object.
*/

// 3.In function we dont specify the type of argument that is being passed like this
// function print(let x)


