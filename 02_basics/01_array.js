//array

const myArr = [1, 2, 3, 4, 5, 'hello', true, null, undefined];
// In square brackets we contain the elements of the array(it can be any type of data(numbers, strings, objects, etc.))
//console.log(myArr)
//console.log(myArr[0]) // Accessing the first element of the array;

const myHeroes = ['Batman', 'Superman', 'Wonder', 'Flash', 'Aquaman'];
const myArr2 = new Array(1, 2, 3, 4)

// Array methods

//myArr.push(6)// Adds an element to the end of the array
//myArr.push(7)
//myArr.pop() // Removes the last element of the array

//myArr.unshift(9); // Adds an element to the beginning of the array
//myArr.shift(); // Removes the first element of the array

// console.log(myArr.includes(9)); // Checks if the array includes a specific element
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9)); // Returns -1 if the element is not found
//console.log(myArr.length); // Returns the length of the array

// const newArr = myArr.join(' '); // Joins the elements of the array into a string with a specified separator

// console.log(myArr);
// console.log(newArr); // Output the joined string
// console.log(typeof newArr); // Check the type of the newArr variable is 'string'


// slice and splice methods
// Shallow copy gives a new reference to the array, but the elements are still the same references as in the original array
// console.log("A ", myArr); // Returns a shallow copy of a portion of an array into a new array object

// const myn1 = myArr.slice(1, 3); // Creates a shallow copy of the entire array
// console.log(myn1);
// console.log("B ", myArr); // Original array remains unchanged

// const myn2 = myArr.splice(1, 3);
// console.log("C" , myArr); // Changes the original array by removing elements

// console.log(myn2); // Removes elements from the array and returns them

//In slice method the original array remains unchanged(the first and the last index is not taken), while in splice method the original array is modified(the portion is removed from the array).


