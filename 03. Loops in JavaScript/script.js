// 01. while loop
// Syntax is:
// while ( condition ){
//     // Code that gets executed as long as the condition is true
// }

var weeks = 0;
// while ( weeks < 8 ) {
//     console.log( weeks );
//     // weeks = weeks + 1; //increment weeks by 1
//     weeks++;
// }

// Work
// count down to the months of the year using the while loop
var year = 1;
//  while (year < 13 ){
//     console.log(year);
//     year++;
//  }

// 02. do while loop
// syntax
// do {
//     // Code to be executed if the condition is true
// } while ( condition );
let counter = 0;
let step = 5;
// do {
//     console.log(counter);
//     counter = counter + step;
// } while (counter <= 100 );

// ClassWork
// In this exercise, we will create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.
// 1. Set the starting counter to 0
// 2. Create a variable, step, to increase your counter by
// 3. Add a do while loop, printing the counter to the console and incrementing it by the step amount of each loop
// 4. Continue to loop until the counter is equal to 100 or less than 100

// For Loops
// The for loop is a very special type of loop
// Syntax
//for (initialize variable; condition;  (closing)statement  ) {
    // code to be executed
// }

for ( let weeks = 0; weeks < 10; weeks++ ){
    console.log(weeks);
}
// Work 2
// count down to the months of the year using for loop

// Class Work 3
// 1. What will be outputted to the console in this instance?
let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a); //
console.log(a > b && b > a); //
console.log(d > b || b > a); //

console.log(d > b && b > a) //

//Research on Ternary Operator
// 2.
// What will be outputted to the console in this instance?
let val = 100;
let message = (val > 100) ? `${val} was greater than 100` :
`${val} was LESS or Equal to 100`;
console.log(message);
let check = (val % 2) ? `Odd` : `Even`;
check = `${val} is ${check}`;
console.log(check);


// 3.
// What will be outputted to the console in this instance?
const q = 1;
switch (q) {
case '1':
answer = "one";
case 1:
answer = 1;
case 2:
answer = "this is the one";
break;
default:
answer = "not working";
}
console.log(answer);
