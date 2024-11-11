// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// let a , b ,rest;

// [a,b,...rest] = [1,2,3,4,5] //----------
// console.log(a);
// console.log(b);
// console.log(rest);


// Usage of destructuring 
// 1-> swapping of values 

// const arr = [1,2,3,4,5];

// [arr[0],arr[4]] = [arr[4],arr[0]]
// console.log(arr);

// // 2 Assign array elements to variable

// let [a,b,...extra] = arr;

// console.log(a);


// Eg
// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined }; // b is 2
// const { c = 2 } = { c: null }; // c is null

// Eg
// const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.


// Eg
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;
// car= mustang
// suv=expendition




// Rest property
// We can end a destructuring pattern with a rest property ...rest. 
// This pattern will store all remaining properties of the object or array into a new object or array.

let [a,b,...rest] = [1,2,3,{a:"a"}]
console.log(a,b,rest)   

// Note->The rest property must be the last in the pattern, and must not have a trailing comma.



// Nested Object destructring 
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  let {brand,registration:{state,city}}=vehicleOne
  



  