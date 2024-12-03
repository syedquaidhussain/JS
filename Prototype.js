// Methods of making a object 

// const obj= new Object({
//     name:"Aman"
// });

// const newObj = new obj();

// const newObj2 = {
//     name:"Naman"
// }


const obj1 = {
    name:"1",
    getName : function(){
        return this.name;
    }
}
/*
const obj2 = {
    role:"Developer",
    
    __proto__: obj // Works similar to  inheritance . Use  double uderscore
}

const obj3 = {
    class:"MCA",
    __proto__:obj2
}


// console.log(obj2);
console.log(obj2.getName());
console.log(obj3.getName());


*/

Array.prototype.myMethod= function(){
    console.log("This is my custom methdod");
    console.log(this);
    
}

const a = ['cities'];
a.myMethod();


function MyPrototype(name) {
    this.name = name;

}
MyPrototype.prototype = obj1;

const myproto = new  MyPrototype("MS");
console.log(myproto.getName())

