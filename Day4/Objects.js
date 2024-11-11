// // How to Define a JavaScript Object
// // Using an Object Literal -> An object literal is a list of name:value pairs inside curly braces {}.
// // Using the new Keyword
// // Using an Object Constructor

// //Note->Usually we make objects with const

// //A. Create an Object
// // 1
// const person = {
//     firstName:"John", 
//     lastName:"Doe", 
//     age:50, 
//     eyeColor:"blue"
// };

// // 2
// const person2= {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";


// // using new keyword
// // const  obj = new Object();
// // obj.age=20;
// // console.log(obj)

// // Note ->  For readability, simplicity and execution speed, use the object literal method.





// // Accessing Object Properties
// // We can access object properties in two ways:

// // objectName.propertyName
// // objectName["propertyName"]
// const  obj = new Object();
// obj.age=20;
// console.log(obj.age)
// console.log(obj["age"]);




// const person = {



// firstName:"John", 
// lastName:"Doe", 
// age:50, 
// eyeColor:"blue",
// greet: function(){
// return this.first+this.lastName
// }
// };

// console.log(person.greet())





// Note
/*
Objects are containers for Properties and Methods.

Properties are named Values.

Methods are Functions stored as Properties.

Properties can be primitive values, functions, or even other objects.
*/

// modifying Properties
// person.firstName = "NOO OONO"
// console.log(person)





// Accessing js properties

// The syntax for accessing the property of an object is:

// objectName.property
// let age = person.age;
// or

// //objectName["property"]
// let age = person["age"];
// or

// //objectName[expression]
// let age = person[x];
// eg
// let x = "firstname";
// let y = "age";
// person[x] + " is " + person[y] + " years old.";





// Deleting Properties
// The delete keyword deletes a property from an object:

// delete person["age"];
// // or
// delete person.age;








// Nested Objects 
// const person2 = {
//     firstName:"John", 
//     lastName:"Doe", 
//     age:50, 
//     eyeColor:"blue",

//     greet: function(){
//     return this.firstName+ this.lastName
//     },
    
//     obj2:{
//         fName:"Aman"
//     }
//     };
    
//     console.log(person.obj2[fName])
//     // or
//     console.log(person.obj2.fName)
//     // or
//     console.log(person["obj2"]["fName"])



    // Object Methods
/*
// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)----------------------------------------
*/



// JavaScript Object.assign()
// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Create Source Object
//   const person3 = {firstName: "Anne",lastName: "Smith"};
  
//   // Assign Source to Target
//   Object.assign(person1, person2);

//   console.log(person1)



//   Object.entries(object)->returns an array of the key/value pairs in an object:
// Object.entries() also makes it simple to convert objects to maps,Object.entries() makes it simple to use objects in loops:



// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
//   };
  
//   let text = Object.entries(person);
//   console.log(text)
  


//   for(let [val1,val2] of text){
//     console.log("property is",val1+ "  value is "+val2)

//   }





//   JavaScript Object.fromEntries()
// The fromEntries() method creates an object from a list of key/value pairs.

/*
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];
  
  const myObj = Object.fromEntries(fruits);

  */

  


//   Object.keys()
//   const keyArray = Object.keys(person);
//   console.log(keyArray)



//   Object.values()-> gives array of object values 
  