/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// (original/old version)
// let result = "5" - 2;
// console.log("The result is: " + result);

// let isValid = Boolean("false");
// if (isValid) {
//    console.log("This is valid!");
// }

// let age = "25";
// let totalAge = age + 5;
// console.log("Total Age: " + totalAge);

/*

Part 1: Debugging Challenge
Fixed the type conversion issues using explicit conversions
and added comments explaining each fix.

*/

// Explicitly convert the string "5" into a number before subtraction
// This makes the operation clearer and easier to understand
let result = Number("5") - 2;

console.log("The result is: " + result);

// Boolean("false") returns true because any non-empty string is truthy
// Explicitly compare the string value instead
let isValid = "false" === "true";

if (isValid) {
  console.log("\nThis is valid!");
} else {
  console.log("\nThis is NOT valid!");
}

// Convert the string "25" into a number before adding
// Without Number(), JavaScript would concatenate the values as text
let age = Number("25");

let totalAge = age + 5;

console.log("\nTotal Age: " + totalAge);

/*

Part 2: Type Conversion Examples

*/

// Example of implicit type conversion
// JavaScript automatically converts the number 5 into a string
let implicitExample = "Score: " + 5;

console.log("\nImplicit Conversion Example:");
console.log(implicitExample);          // Output: Score: 5
console.log(typeof implicitExample);   // Output: string

// Example of explicit type conversion
// Explicitly convert a string into a number
let explicitExample = Number("42");

console.log("\nExplicit Conversion Example:");
console.log(explicitExample);          // Output: 42
console.log(typeof explicitExample);   // Output: number

// Edge Case Example: NaN
// Trying to convert non-numeric text into a number results in NaN
let invalidNumber = Number("hello");

console.log("\nEdge Case Example:");
console.log(invalidNumber);          // Output: NaN
console.log(typeof invalidNumber);   // Output: number

// Edge Case Example: null and undefined
console.log(Number(null));        // Converts to 0
console.log(Number(undefined));   // Converts to NaN
