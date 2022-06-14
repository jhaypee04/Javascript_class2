//Data Type: STRINGS
var message = "I am a newbie in JavaScript!";
// alert(message);
// So the above statement is a string

// Types of Strings
// 1. Single Quotation 
// 2. Double Quotation
// 3. String Template Literal

// 1. Strings in single quotes
var strSingle = 'Hello Africa!';
console.log(strSingle);

// 2. Strings in double quotes
var strDouble = "Welcome to Nigeria!";
console.log(strDouble);
// 3. String Template Literal
var strTempL = `The Sentence is: ${strSingle}, ${strDouble}!`;
console.log(strTempL);

// String Concatenation
// String concatenation is usually performed on single and double quote strings.
// It is used to combine a string with another value or variable.
var string1 = 'Hello ';
var concat = string1 + 'World';
console.log(string1);
console.log(concat);

// Escaping Character
var message = 'I\'m passing a very important message'; //Single string
console.log(message);

var message = "I'm passing another crucial message";

// New line
var paragraph = "This is a sentence.\nThis will start on a new line.";
console.log(paragraph);