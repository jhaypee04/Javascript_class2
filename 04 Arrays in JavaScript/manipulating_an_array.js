//pop(), push(), shift(),
//unshift()

// Class Work 2
// Manipulating arrays
const aList = [ 'Lawrence', 'Svekis', true, 35, null, undefined, [ 'one', 'two' ] ];
// aList[6][1];
// manipulate the  array above using the following methods:
// pop(), push(), shift(), and unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// You can take the following steps:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console. (POST YOUR ANSWER TO THE GOOGLE CLASSROOM)

//Solution
//1. 
aList.shift();
aList.pop();
console.log(aList);
// 2.
aList.unshift('FIRST');
aList[3] = 'Hello World';
aList[2] = 'MIDDLE';
aList.pop();
aList.pop();
aList.push('LAST');
console.log(aList);

// Assignment (Submit to the Google Class room)
// Demonstrate in an example the concat method of an array
