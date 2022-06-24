// Multidimensional Arrays
let an_array = [ 1, 2, 3 ];//Regular array
let arrInArray = [
     [ 1, 2, 3 ], // =  arrInArrays[0]
     [ 4, 5, 6],  // =  arrOfArrays[1]
     [ 7, 8, 9]   // =  arrOfArrays[2]
]
console.log(arrInArray[0]);
// Accessing a Multidimensional Array
console.log(arrInArray[2][2]);
 // We can also have arrays nested deeper
 let arr3dim = [ 
    [ [ 1, 2, 3 ], [ 4, 5, 6], [ 7, 8, 9 ] ], // arr3dim[0] = 1st array
    [ 10, 11, 12 ], // arr3dim[1] = 2nd array
    [ 13, 14, 15 ], // arr3dim[2] = 3rd array
]
// Accessing the middle element which is 5
console.log(arr3dim[0][1][1]);

// Class Work
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.