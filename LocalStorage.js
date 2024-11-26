// The localStorage object allows you to save key/value pairs in the browser.



// localStorage.setItem("city","delhi");
// console.log(localStorage.getItem("city"));


//to remove item from localstorage -> removeItem(key)
//localStorage.length -> gives no. of key value pairs stored in localstrorage

// localstorage.key(index)-> to get key from its index 

// Save Data to Local Storage
localStorage.setItem(key, value);

// Read Data from Local Storage
let lastname = localStorage.getItem(key);

// Remove Data from Local Storage
localStorage.removeItem(key);

// Remove All (Clear Local Storage)
localStorage.clear();


// Note
// The localStorage object stores data with no expiration date.

// The data is not deleted when the browser is closed, and are available for future sessions.
// if we save anything in localstorage then both key value will be stored in form 
// of string