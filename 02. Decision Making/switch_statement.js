// Switch
//syntax
// switch ( expression ) {
//     case (expression == true):
//         //Code to execute
//     break;
//     case (expression == true):
//         //Code to execute
//     break;
//     default:
//         //code to execute
//     break;
// }

let activity = 'Learn Coding';

switch (activity ) {
    case "Get up":
        console.log("It is 6:30am");
    break;
    case "Breakfast":
        console.log("It is 7:00am");
    break;
    case "Drive to loctech in Benz":
        console.log("It is 8:00am");
    break;
    case "Learn Coding":
        console.log("It is 9:00am");
    break;
    case "Lunch":
        console.log("It is 12:00pm");
    break;
    case "Drive Home":
        console.log("It is 5:30am");
    break;
    case "Dinner":
        console.log("It is 6:30pm");
    break;
    case "Sleep":
        console.log("It is 1:30am");
    break;
    default:
        console.log("We do not do anything");
    break;
}


// Class Work ( Submit to the GOOGLE CLASSROOM)
// The JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number between 0 and 9:

// random number between 0 and 1
// let randomNumber = Math.random();
// console.log( Math.floor(randomNumber * 10) );
// multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
// randomNumber = Math.floor(randomNumber);



// In this exercise, we'll create a  random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// 5. Output the user's original answer, plus the randomly selected case response, to the console after the user enters their answer.