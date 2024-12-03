// // Set -> collection of unique data ie It contains unique values 
// // We can put any object, array , int , string into the set 
// const myArray = [2,2,3,4,5,4,5,4,33,2,1];
// const mySet = new Set(myArray);
// console.log(mySet);

// mySet.add("ab")
// mySet.add({});

// console.log(mySet);

// mySet.delete("ab");

// mySet.delete("ab");

// console.log(mySet);

// console.log(mySet.has("ab"));

// // To traverse the elements of set we can use forEach(),for of loop



// mySet.clear("ab");
// console.log(mySet);

// Map -> It stores the data in the form key value pairs.
// A Map remembers the original insertion order of the keys.

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);


  const myMap= new Map();
  myMap.set("Hello","Aman");
  myMap.set("Hello","Naman");

  myMap.set({Key:"value"},"Naman");

  console.log(myMap);

  
  
//   const it =  myMap.entries();
// for(let x of  myMap.entries()) 
//     // console.log(x);
    
// }



// forEach loop for Map
// myMap.forEach((value,key)=>{
//     console.log(key);
// console.log(value);

// })

console.log(myMap.values());



