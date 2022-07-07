//Looping arrays
let Names = [ 'Cheetah', 'John', 'Maxwell', 'Bob', 'Jaydar' ];
console.log(Names);

for (let i = 0; i < Names.length; i++){
    console.log(Names[i]);
}

// for of loop
console.log('\nfor of loop:')
var array_of_cars = [ 'Benz', 'Ford', 'Chevrolet', 'Volvo', 'Rolls Royce' ];

for ( let car of array_of_cars ) {
    console.log(car)
}

// Exercise 1: for of
// This exercise will construct an array as it loops through the incrementing values of x. Once the array is done, this exercise also will demonstrate several ways to output array contents.
// 1. Create an empty array
let empty_array = []
// 2. Run a loop 10 times, adding a new incrementing value to the array
for ( let i = 0; i < 10; i++){
    empty_array.push(i)
}
// 3. Log the array into the console
console.log(empty_array)
// 4. Use the for loop to iterate through the array (adjust the number of iterations to however many values are in your array) and output into the console.
for ( let i = 0; i < empty_array.length; i++) {
    console.log(i)
}
// 5. Use the for of loop to output the value into the console from the array
console.log('\nfor of loop:')
for (let value of empty_array) {
    console.log(value)
}