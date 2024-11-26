// // It is used when we want to do talna the js code 
// let a = setTimeout(()=>{
// console.log("Hello")
// },1000)


// console.log(`Id is  ${a}`); // a is timeoutId. setTimeout function returns timeoutId
// console.log(a) ;

// clearTimeout(a);


// console.log(`id is  ${a}`);

/*
let b = setTimeout(()=>{
console.log("This is first ")
},4000)

let c = setTimeout(()=>{
console.log("This is second ")
},3000)

let d = setTimeout(()=>{
console.log("This is third ")
},1000)

*/


// setTimout with arguments 
const sum = (a,b) => {
console.log(`sum is ${a+b}`);
}


setTimeout(sum,1000,10,20);



// setInterval method -> The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.


let inId = setInterval(sum,2000,1,2)
