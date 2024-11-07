/*

In JavaScript there are following conditional statements:

if ->  to specify a block of code to be executed, if a specified condition is true
 else -> to specify a block of code to be executed, if the same condition is false
else if -> to specify a new condition to test, if the first condition is false
switch -> to specify many alternative blocks of code to be executed
*/

// If

// if (condition)
// {
// //code to be executed if condition is true 
// }

// eg
let age = 19;
if(age>=18) {
console.log("You can cast vote "); // This code will execute 
}

// Else
// Eg
 age = 14;
if(age>=18) {
    console.log("You can cast vote "); // This code will execute 
}
else{
    console.log("You can not cast vote");
}


// Else if eg
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }
const time = 30;

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }



//  Switch
// Syntax
/*
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  } 
*/
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// Eg

const day = new Date().getDay();

switch(day){
    case 0: console.log("Today is sunday ");
             break;

    case 1:console.log("Today is Monday ");
             break;
    case 2:console.log("Today is Tuesday ");
              break;

    case 3:
        console.log("Today is Wednesday ");
              break;

    case 4:
        console.log("Today is Thursday ");
              break;

    case 5:
        console.log("Today is friday ");
             break;

    case 6:
        console.log("Today is Sat ");
           break;


}


// eg when default block will be executed 
switch (new Date("2024-11-5").getDay()) {
    case 4: // If this case matches then no other case will be executed so assume break here 
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend"; // This will be executed
  }
  console.log(text);

// Note->  Switch cases use strict comparison (===). 
// Eg

let x="0";
switch(x){
    case 0: 
           console.log("1st case");
           break;
    case 1: 
           console.log("2st case");
           break;
    default: 
           console.log("Default case "); // This case will be executed
        
}

 


 switch(x=2)
 {
    case 1: 
         var  aman = "hello";
    case 2: 
         var  aman = "no";
 }
 console.log(aman)


 


 