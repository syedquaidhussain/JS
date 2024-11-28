// Window is global object and it is present at the top of the element hierarchy.
// browser creates the window object. Try window.open() in browser console.

// All methods and properties belong to the window object like window.console.log("Hello");

// to get element by id from dom -> document.getElementByid(idname)
// to get element by class from dom -> document.getElementByClassName(classname)
// to get element by tag name from dom -> document.getElementsByTageName(tagname) -> gives all the tags that has same tag name

// querySelector(class/id/tag) -> gives only the first result matched not all the tags.
// querySelectorAll(class/id/tag) -> gives all the tags


// To update the existing the element  we have 
// innerHTML -> by this we can get and set the innerHTML . it gives all the elements present inside the particular element
// outerHTML
// text-content -> gives content as actual code is written on backend including all the 
// spaces new line etc.

// innerText -> it gives the content as rendered on UI.


// To add Element
// ->document.createElement()
// ->appendChild(element) -> element will be added at  the end. now to add the element at specific position


// To replace child 
// document.replaceChild(new, old)


// DOM Event Listener -> 
// element.addEventListener("click", myFunction);
// element.addEventListener("click", mySecondFunction);






// let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');
// newElement.textContent = " This is my span";
// mydiv.insertAdjacentElement('beforebegin', newElement);

// document.querySelector('button').onclick = function() {
//     alert("Why clicked on the button")
// }
// document.querySelector('button').onclick = function() {
//     alert("clicked on the button"); // It will overwrite the above onclick event.
// }

/*
document.querySelector('button').addEventListener('click',()=>{
    prompt("Enter the number which you want to insert ")
})

// Adding event listener when user resizes the window
window.addEventListener("resize",()=>alert("Your progress will be lost"));

 */







// Event Bubbling 
/*
Event Bubbling
Definition: The event starts at the target element (where the event occurred) and then bubbles upwards to its parent elements, and then to their parents, all the way up to the document object.
Example: A click on a button inside a <div> will first trigger the button's event, then the <div>'s event, then its parent, and so on.
Key Points:
Bubbling moves upwards in the DOM.
This is the default behavior in JavaScript.
Visual 
*/

// Eg of event bubbling 
// document.querySelector('#mydiv').addEventListener('click',()=>{
//     alert("Div clicked ");
// });
// document.querySelector('button').addEventListener('click',()=>{
//     alert("button clicked ");
// })

// Eg of event capturing
document.querySelector('button').addEventListener('mouseover',()=>{
    alert("Div clicked ");
});
// document.querySelector('button').addEventListener('click',()=>{
//     alert("button clicked ");
// });

document.querySelector('button').removeEventListener('mouseover',()=>{
    alert(" div removed  ");
},true);



// Note ->
// The addEventListener() method allows you to add many events to the same element, without overwriting existing events: