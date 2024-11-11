// spread operator -> The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)


// Eg 2
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //o/p-> 

//   {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'yellow',
//   type: 'car',
//   year: 2021
// }
  


// Application of spread/rest operator
/*
Applications of Spread/Rest Operator
Array Manipulation:

Cloning arrays.
Concatenating arrays.
Adding or removing elements from arrays.


Object Manipulation:
Cloning objects.
Merging multiple objects.
Updating properties in objects.


Function Arguments:
Accepting an indefinite number of arguments (rest parameters).


Destructuring:
Extracting specific values and collecting the rest of the data using destructuring (both for arrays and objects).

React and JSX:
The spread operator is commonly used in React for passing props or combining attributes.
*/  