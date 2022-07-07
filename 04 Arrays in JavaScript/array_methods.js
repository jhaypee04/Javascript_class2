// Array Methods
// forEach()
let arr = [ 'grapefruit', 4, 'hello', 5.6, true ]
arr.forEach( printStuff )

function printStuff( e, i , a) {
    console.log( "e reps: " + e + ' | i is position: ' + i + ' | a is the array: ' + a)
}

// filter()
var newArray = arr.filter( onlyStrings )

function onlyStrings(e){
    if ( typeof e == "string"  ) {
        return e
    }
}
console.log( newArray )

// map()
let num = [1,2,3,4,5,6,7,8,9]

var added_one = num.map( addOne)

function addOne (e){
    return e + 1
}
console.log( added_one )
console.log( num )

// reduce
// returns a value
var initial_value = 0
var returned_value = num.reduce( addAll, initial_value )

function addAll( previous_result, next_value) {
    return previous_result + next_value
}
console.log(returned_value)