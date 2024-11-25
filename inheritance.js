// class User {
//     constructor(username,email,password)
//     {
//         this.username=username;
//         this.email= email;
//         this.passwor = password;
//     }
//     //Method 
//     logMe(){
//       console.log(`Your name is 1 ${this.username}`);
//     }

        
// }

// class Teacher extends User{

//     constructor(username) {
//         this.username=username;

//     }
//     addCourse() {
//         console.log("Suggest any course ");
//     }
   
// }


class Car {
    constructor(carName) {
        this.carName = carName;

    }

    logMe() {
        return`I have car with car name ${this.carName}`;
    }
    logMe2() {
        console.log(`I have car with car name ${this.carName}`);
    }

}

//child class 
class Model extends Car {
    constructor(carName,mod) {

        super(carName);
        this.carName = "Nop"
        this.model = mod;
        
    } 

    show() {
        console.log(` ${this.logMe()} and it is has model ${this.model}` )
    }
}


const modelName = new Model("Swift","Desire");

modelName.show();
console.log(modelName instanceof Model)


