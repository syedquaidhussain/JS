// // Array-> are collections of items 
// // Method to create array -> array literal [],aray constructor


// // Creation of Array
// let arr = [1,2,'aman',true]
// console.log(arr);

// let brr = new Array('naman',2,3);

// //Accessing array elements 
// // through index 

// console.log(arr[0]);


//  array methods
// // push,pop, splice,slice, indexof, shift,unshift,map,reduce,filter,sort,find,etc.

// arr.push("rahul"); //insert at end

// console.log(arr)

// arr.pop(); // delete elemet from end 

// // shift-> remove first item 
// // unshift -> add at first position

// arr.shift();
// console.log(arr)

// arr.unshift("Aman Naman");
// console.log(arr)



// // slice -> gives part of array 
// // arr.slice(startIndex, endIndex);
// console.log(arr.slice(1,3))

// // splice -> through this we can change the content of array like we can IntersectionObserverEntry, replace , remove
// // eg
// console.log(brr);

// brr.splice(1,2,"After Removing");
// console.log(brr);




// // map function  -----------------------what is map function
// let a = [10,20,30];

// //  let answer = a.map((number)=>{
// //     return number*number;
// // })
// // console.log(answer)


// a.map((num,index)=>{
//     console.log(num)
//     console.log(index)

// })


// filter function . It is used to filter the elemenst like we
// can filter the odd and even elements ,strings etc
let a = [1,2,'bob',true,null]

let ans = a.filter((value)=>{
return typeof(value)==='string'
})
console.log(ans);


// reduce -> used if we want to perform mathematical operations on array and in the end want to get single result .Isse hum array ko reduce 
// krke single output lana chahte h 

// let num = [1,2,3,4,5];

// let ans2= num.reduce((acc,curr)=>{
//    return acc.push(curr*curr);  
// },[])

// console.log(ans2);



// Find function 
// const arr = [5, 12, 8, 130, 44];

// // Find the first element greater than 10
// const found = arr.find(element => element > 10);

// console.log(found);  // Output: 12


// Includes function-> to find any particular element exist in array or not 
// eg1
const arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3, 2));  // Output: true
console.log(arr.includes(2, 3));  // Output: false


// eg2
// const arr = [1, 2, 3, 4, 5];

// console.log(arr.includes(3));  // Output: true
// console.log(arr.includes(6));  // Output: false





// Challenge => implementation in map reduce filter