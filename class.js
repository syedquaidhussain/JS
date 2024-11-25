// // // Making a class 
// // class User{

// //     // constructor
// //     User(name,email,password)
// //     {
// //         this.name = name;
// //         this.email = email;
// //         this.password = password;
// //     } 
 
// // // No need to specify the function keyword 
// //        encypyt() {
// //          return `your pass is ${this.password}abc`;
// //      } 

// // };

// // const obj = new User("Aman","abc@gmail.com",'opop');
// // console.log( obj.encypyt() ) ;







// class User {
//     //for making constructor use of constructor keyword is must 
//     constructor(username,email,password) {
//         this.username = username;
//         this.email= email;
//         this.password = password;
//     }
   
//     // No need of function keyword
//     encryptPassword() {
//         return `Your password in hashed form is ${this.password}abc`;
//     }
//     changeUsername() {
//         return `Your changed username is ${this.username.toUpperCase()}`
//     }

// }

// const  aman = new User("Naman","anc@gmail.com","1234");
// console.log(aman.encryptPassword());
// console.log(aman.changeUsername());



//Behind the scenes 
function User(username,email,password)
{
    this.username = username;
    this.email= email;
    this.password=password;

   

}

User.prototype.encryptPassword = function(){
  return `Your password in hashed form is ${this.password}abc`;

}

User.prototype.changeUsername = function(){
  return `Your password in hashed form is ${this.username}abc`;

}

const  aman = new User("Naman","anc@gmail.com","1234");
console.log(aman.encryptPassword());
console.log(aman.changeUsername());



// Js does not have  concept of  protected data members but it supports public and private.
// properties and methods are public by default



// eg. of private property
class Person {
  #age; // Private property

  constructor(name, age) {
    this.name = name; // Public property
    this.#age = age; // Private property
  }

  getAge() {
    return this.#age; // Accessing private property inside the class
  }
}

const person = new Person("Alice", 30);
console.log(person.name); // Output: Alice (public)
console.log(person.getAge()); // Output: 30 (via getter)
// console.log(person.#age); // Error: Private field '#age' must be declared in an enclosing class









// Use of this
// The this keyword refers to the current instance of the class. 
// It is used to access properties and methods of the object within the class.


// Instance Methods 
// Instance methods are functions defined inside a class and are available to instances of the class.

// Properties
// Properties are values associated with an instance of a class. These are typically defined in the constructor using the this keyword.