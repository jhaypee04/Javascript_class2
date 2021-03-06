// Arrays
// What is an Array?
// Arrays stores multiple values in one variable
// It is a data type that falls under the non-primitive
// Syntax:
 var any_variable_Name = []; // An empty array
 var arr = [ 1, "Kenny", 3, 4, true, 56, 7, 8]; // An array with values;
console.log( arr[1] );  // Accessing the values from the arrays

 // Overriding the values in an array
arr[1] = "Fola";
console.log( arr[1] );

 // Methods
 // What is a method?
 // Methods are functions!
 // Examples of methods are 
 // 1. length
 // 2.
 console.log( arr.length );

  // Deleting values from arrays
 // pop () //method
 // shift () //method
 console.log(arr);
arr.pop(); // Deletes the last value(item)
console.log(arr);
arr.shift(); // Deletes the first value (item)
console.log(arr);
//  Adding values to arrays
// push () //method adds value from the last index
arr.push("PrinceWill");
console.log(arr);
// Class Work 1
// 1. Create an array to use as your shopping list with 3 items: "gitMilk," "Bread," and "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

// More methods in arrays
// sort() and reverse()
let names = [  "James", "Alicia", "Fatima", "Maria", "Bert"  ];
console.log(  names );
console.log(  names.sort()  );

let _names = [  "James", "Alicia", "Fatima", "Maria", "Bert"  ];
console.log(  _names );
console.log(  _names.reverse()  );

// More array methods
// Slice  & Splice
let $names = [  "James", "Alicia", "Fatima", "Maria", "Bert"  ];
let someNames = $names.slice(1, 3);

console.log($names);
console.log(someNames);

let $_names = [  "James", "Alicia", "Fatima", "Maria", "Bert"  ];
let s = $_names.splice(2);
console.log($_names);
console.log(s);

