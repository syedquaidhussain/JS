// // Note -> Comparing data of different types may give unexpected results.

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0.
// A non-numeric string converts to NaN which is always false.


let age = 18;
let height = 5.8;

if(age>18 && height > 6)
{
    console.log("You are perfect for the army")
}
else if(age === 18 && (height < 6 && height > 5.5))
{
 console.log("You are just at the border to apply for army  ");

}
else {
    console.log("You can not apply for the army ");
}
 
// Eg 2 
let a = true;
let b = false;
let c = true;

if (a && b || a && c) {
  console.log('Condition is true'); // this will be executed
} else {
  console.log('Condition is false');
}

// &&-> has higher priority than || so a && b will be evaluated then a and c after that or operation will be performed



















































// Challenge = // Comparing data of different types may give unexpected results.

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0.
// A non-numeric string converts to NaN which is always false.

