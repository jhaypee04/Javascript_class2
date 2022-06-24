// Nested Functions
function main(){
    console.log("I'm Happy!");
    function innerFunc(){
        console.log("Actually, I'm very Happy!");
    }
    innerFunc(); //Local function
}
main();
// Scope

// class Work 1 : Submit to the google class room
// i. Declare a variable and assign to it a prompt from the user
let userResponse = window.prompt('What is your name');
// ii. Use the response from the user to say the name.
// 1a. Create a function call it sayMyName.
// 1b. Declare sayMyName with a parameter value
function sayMyName( a ){
    // 2. Create another function inside sayMyName, call it: nestedFucntion
    // 2b. Declare nestedFunction with a parameter value as well.
    function nestedFucntion( param){
        // 3. print out a message containing the name of the user in the nestedFunction that you created.
        console.log( "Welcome " + param );
    }
    nestedFucntion(a)
}
sayMyName(userResponse);