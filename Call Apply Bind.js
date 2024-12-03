// let userDetails = {
//     name : "Aman",
//     age:"23",
//     Designation:"SDE",

//     // this keyword is used for self referencing
//     printDetails:()=>{
//         console.log("This  is ",this);
//       console.log("Name is ",this.name);
      
//     }

// }

// let userDetails2 = {
//     name : "Zaid",
//     age:"20",
//     Designation:"Doctor",
// // I also want print details function in this object as well but I dont want to write it 
// // so I can use call
// }
  

// // Call is used for function borrowing
// userDetails.printDetails.call(userDetails2);


// Case 2
// let we have global function 
// Note -> Dont use arrow functions because-> 
// Arrow functions do not have their own this context. Instead, they inherit this from their surrounding (lexical) scope at the time they are defined. In this case, the this in printDetails will refer to the this context of the surrounding scope, which is most likely the global object (global in Node.js, or undefined in strict mode).

// When you use call to explicitly bind this to userDetails or userDetails2, it has no effect on arrow functions because their this is fixed and cannot be changed.
let printDetails = function (state,country){
    console.log("This points to ",this);
    console.log("Name is ",this.name);
    console.log("His/Her State is ", state);
    console.log("His/Her country is ", country);
    
}

let userDetails = {
        name : "Aman",
        age:"23",
        Designation:"SDE",
      
          
        }

        let userDetails2 = {
                name : "Zaid",
                age:"20",
                Designation:"Doctor",
          
            }
              
    //  printDetails.call(userDetails,"delhi","India")
    //  printDetails.call(userDetails2,"delhi","India")

    // In apply the arguments are passed as Array.But the working is same
    //  printDetails.apply(userDetails2,["delhi","India"]);
     
     //Bind()-> the borrowed function will  not be invoked automatically like in case of call and apply.
     //  we can invoke the method by ourself 

   let fun=   printDetails.bind(userDetails2,"delhi","India");
   console.log(fun);
   
   fun();






