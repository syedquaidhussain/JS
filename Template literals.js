// Automatic replacing of variables with real values is called string interpolation.orAutomatic replacing of expressions with real values is called string interpolation.

// Template literals are enclosed by backticks (`) instead of regular quotes (' or "). They offer several powerful features, including:

// String Interpolation (Embedding expressions inside strings)
// Multiline Strings
// Tagged Templates

//  String Interpolation (Embedding Expressions)
let name = "Aman";
let lastName = "Naman";

console.log(`Your name is ${name} ${lastName}`)

// Multiline Strings
let multilineMessage = `
  This is a message
  that spans multiple lines
  using template literals.
`;

console.log(multilineMessage);


/* -------------------------------------------------------------------------
function tagExample(strings, ...values) {
    // Modify the template before output (e.g., convert all values to uppercase)
    let result = strings[0];
    values.forEach((value, i) => {
        result += value.toUpperCase() + strings[i + 1];
    });
    return result;
}

let name = "alice";
let age = 25;

let message = tagExample`Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);  // Output: "Hello, my name is ALICE and I am 25 years old."

*/
 
 // Advantage of template Literal
 /*
 String Interpolation: Embed variables and expressions directly in strings.
 Multiline Strings: Easily create strings that span multiple lines.
 Tagged Templates: Process and transform the string content before it’s output.
 Cleaner and More Readable Code: Avoid complex concatenation, making the code easier to understand.
 */