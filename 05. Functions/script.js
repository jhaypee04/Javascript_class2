// Basic Functions
// What is a function
// A function performs a task, gives us results, and does something!
// Syntax
// function theNameOfTheFunction() {
//     //code to execute
// }
// Example of a Basic function
// declared a function
function sayHello(){
    console.log('Hello');
}
// invoking/call the function
sayHello();

// Naming Functions
// 1. Use camelCase for your functions
// 2. Make sure that the name describes what the function is doing
// 3. Use a verb to describe what the function is doing

// Exercise
// Create a function to print out good bye! in the console.

// Parameters and arguments
let myName = 'Paul';
function sayHelloToSomeone( num, name ){
    var greeting = 'Hello '
    console.log(greeting + name + '. You are ' + num + ' years old.' );
}
sayHelloToSomeone( 123, 'Paul' );

// Exercise 1
// See if you can write a function for yourself. We want to write a function that adds two numbers.
// 1. Create a function that takes two parameters, adds the parameters together.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using console.log.
// 4. Create a second call to the function using two more numbers as arguments sent to the function.
//Solution
let num1 = 20;
let num2 = 10;
function addNum ( num1, num2 ) {
    let added = num1 + num2;
    console.log( added );
}
addNum(num1, num2);

// Exercise 2
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
var describePerson = [ 'Good', 'Best', 'Handsome', 'Beautiful', 'Happy' ]
// 2. Create a function that contains a prompt asking the user for a name.
function userName(){
    var _userName = window.prompt('Tell me your name!');
    // 3. Select a random value from the array using Math.random.
    var randomValue = Math.floor(Math.random() * describePerson.length );
    // 4. Output into the console the prompt value and the randomly selected array value.
    console.log( _userName + ' is ' + describePerson[ randomValue ] );
}
// 5. Invoke the function.
// userName()

// return
// There is a key word called return
function myAge(){
  return 10;
}
var a = myAge( );
console.log(a);

// Variable Scope in functions
// We have two types of variable scopes
//1. Global variable
//2. Local variable

var outside = 3; //Global

function church(){
    var inside = 'saints'; //Local
    console.log(inside);
    console.log(outside);
}
church();

// Class Work 1
// What value is output into the console and why?
// State your reasons
let val = 10; //Glob

function tester(val){
    val += 10;
    if(val < 100){
    return tester(val);
}
return val;
}
tester(val);

console.log(val);
// Class Work 3
// Modify the calculator that you made in Practice exercise 2 to return added values
// instead of printing them. Then, call the function 10 or more times in a loop, and store
// the results in an array. Once the loop finishes, output the final array into the console.
// 1. Set up an empty array to store the values that will be calculated within the
// loop.
// 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two
// values each iteration. For the first value, multiply the value of the loop count by 5. For the second value, multiply the value of the loop counter by itself.
// 3. Create a function that returns the value of the two parameters passed into the
// function when it is called. Add the values together, returning the result.
// 4. Within the loop, call the calculation function, passing in the two values as
// arguments into the function and storing the returned result in a response
// variable.
// 5. Still within the loop, push the result values into the array as it iterates
// through the loop.
// 6. After the loop is complete, output the value of the array into the console.
// 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for
// the array in the console.

// Solution
let values = [];
let counter = 10;
let num3 = 20;
let num4 = 10;
function addNum ( num3, num4 ) {
    let added = num3 + num4;
    return added;
}
var value = addNum(num3, num4);

for (let i =0; i < counter; i++){
    values.push(value);
}
console.log(values);

// Assignment
// 1. Make a research on Default or unsuitable Parameters.
// 2. Make more research on the variable scopes
// 3. Find out the differences between var and let.
// 3. Find out the differences between var variable scope and let scope.
// 4. What is a code block?
// 5. Also research on the const scope
// 6. Learn about Nested Functions, solve an example
// 7. Learn about recursive functions