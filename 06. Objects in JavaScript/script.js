// Objests
//Syntax
var car = {
    name: "Benz",
    mileage: 1000,
    color: 'silver'
}
// Instance of an object
// Create a dog object
let dog = {
    dogName: 'Bingo',
    weight: 3.5,
    color: 'light brown',
    breed: 'Dobberman',
    age: 3,
    burglarBitter: false
}; // A dog object with its properties.

// Referencing/Getting the Values from the Object
// 1. Dot notation
var theNameOfOurDog = dog.dogName;
console.log(dog.dogName);
console.log(theNameOfOurDog);
// reference the car name
// ...
// 2. Bracket Notation
var age = dog['age'];
console.log( dog['age'])
console.log( age );
// reference the car mileage with bracket notation
// ...

// Printing the object
console.log(dog);

// Updating Objects
dog.age = 5;
// Printing the object
console.log(dog);

// Class Work
// 1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
//Solution
let myCar = {
    make:  'volvo',
    color: 'black',
    speed: '300kmh',
    model: 'volvo2010'
}
// 2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// Solution
let color = 'color';
myCar[color] = 'red';
console.log(myCar);

// 3. Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
// Solution
color = 'forSale';
myCar[color] = true;
console.log(myCar);

// 4. Output make and model into the console.


// 5. Output the value of forSale into the console.
console.log(myCar['forSale']);

//Nesting Objects and Arrays
let myCars = {
    // Object in an Object
    makes: {
        carName1: 'Royce',
        carName2: 'Chevrolet',
        carName3: 'Ford'
    },
    color: 'black',
    speed: '300kmh',
    // Array in Object
    models: ['Royce2022', 'Chevrolet Limited Edition', 'Ford Future' ]
}
// Referencing the values from nested objects and arrays
//For Objects
var make = myCars.makes.carName2;
console.log(make);
// For Arrays
var model = myCars.models[1]
console.log(model);

// Objects in array
var arr = [ {}, {}, {} ];
var arr = [ 
    {
        a:'value1',
        b: 'value2',
        c: 'value3'
    }, 
    {
        d:'value1',
        e: 'value2',
        f: 'value3'
    }
];
// Example Usage:
var addresses = [
    {
        street: 'Okpoyo Cr',
        number: 4,
        zipcode: 123456,
        city: 'PH City',
        state: 'Rivers'
    },
    {
        street: '1st Boulevard',
        number: 13,
        zipcode: 1234,
        city: 'Somewhere in Anywhere',
        state: 'I dont know'
    }
];
let streetName = addresses[0].street;
console.log(streetName);

// Class Work 2: SUbmit in the Google Classroom.
// 1. Create an object named people that contains an empty array that is called friends.
// 2. Create three variables, each containing an object, that contains one of your friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.

// 4. Output it to the console.