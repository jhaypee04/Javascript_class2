// Decision
//Booleans: two values- true or false
var rain = false;
var sun = true;
//Control Structures
//1. if else statement
//syntax
// if ( condition == true ) {
//     //code here will execute
// } else{
//     //code will run when condition is false
// }
if ( rain == true ){
    console.log( 'Rain Rain go away come...' );
}else{
    console.log( 'it is not raining now, so come out..');
}
if (sun){
    console.log( 'It is a Sunny Day!' );
} else{
    console.log('I hate the waether');
}

var age = 18;
if ( age < 18 ) {
    console.log( 'We are sorry, but you can\'t get in' );
} else{
    console.log( 'Welcome' );
}

var hobby = 'dancing';

if ( hobby  == 'coding' ){
    console.log('I love coding too!');
}else{
    console.log('Can you teach me that?');
}

//  Class Work
// 1. Create a variable with a Boolean value.
var a = false;
// 2. Output the value of the variable to the console.
console.log(a);
// 3. Check whether the variable is true and if so, output a message to the console, using the following syntax:
if(a) {
    console.log( 'I\'m true');
}
// 4. Add another if statement with a ! (NOT operator) in front of the variable to check whether the condition is not true, and create a message that will be printed to the console in that instance. You should have twwo if statements, one with a ! (Not Operator) and the other without. You could also use an if and an else statement instead - experiment!(optional)
if ( !a ){
    console.log(  ' Am I really true ');
}
// 5. Change the variable to the opposite to see how the result changes.

// if elseif statement
var age = 10;
var cost = 0;
var message;

if ( age < 3 ){
    cost = 0;
    message = 'Access is free under three years old';
} else if ( (age >= 3) && ( age < 12 ) ){
    cost = 5;
    message = 'With the child discount, the fee is 5 dollars';
} else if ( age >= 12 && age < 65 ){
    cost = 10;
    message = 'A regular ticket is 10 dollars.';
} else {
    cost = 7;
    message = 'A ticket is 7 dollars.';
}
console.log(message);
console.log('Your Total cost  '+ cost);

// Class Work 2
// 1. Create a prompt to ask the user's age
// var number = 20; //Hardcodimg
// var age = window.prompt('How old are you');
console.log(age);
// 2. Convert the response from the prompt to a number 
// Number();
var newAge = Number(age);
console.log(newAge);
// 3. Declare a message variable that you will use to hold the console message for the user
var message;
// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
if ( newAge >= 21 ) {
    message= 'confirm entry to a venue and the ability to purchase alcohol';
    // 5. If the input age is equal to or greater than 19, set the message variable to
    // confirm entry to the venue but deny the purchase of alcohol
} else if ( newAge >= 19  ) {
    message = 'confirm entry to the venue but deny the purchase of alcohol';
    // 6. Provide a default else statement to set the message variable to deny entry if
    // none are true
} else {
    message = 'deny entry'
}
// 7. Output the response message variable to the 
console.log( message );