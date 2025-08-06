//Datatypes are charaterised based on memory access and how data is stored in memory 

//Primitive DataType are call by value it does not give Reference/address of the memory it gives the copy of the data where we need to change


// 7 types :String ,Number, Boolean, Null, Undefined,Symbol,BigInt
// Undefined means we declared the datatype but doesnot define the value in it

// JavaScript is a dynamically typed language.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 343674235025698766667n



// Non Primitive/Referenced DataTypes

//Array, Objects, Functions

const heros = ["Shakiman","Ironman","Doga"]

let myObj = {
    name:"Nikhil",
    age: 24,

}

const myFunction = function(){
console.log("Hello World");
}

//console.log(typeof anotherId);

//typeof Opertor Results
//Undefined => Undefined
//Null => Object
//Boolean => Boolean
//Number => Number
//String => String
//file of typeof Operator Results
// https://learn.microsoft.com/en-us/openspecs/ie_standards/ms-es3/8dbafca7-d96d-4026-a10b-f86daa72825c

//*************************************************************************************/
// Stack and Heap Memory
// Stack Memory is used for Primitive DataTypes and Heap Memory is used for Non Primitive DataTypes
// Stack Memory is faster than Heap Memory
// Stack Memory is used for static memory allocation and Heap Memory is used for dynamic memory allocation
// Stack Memory is used for storing variables and Heap Memory is used for storing objects
// Stack Memory is used for storing function calls and Heap Memory is used for storing objects and arrays

//In Stack memory we get a copy of the data and in Heap memory we get a reference to the data(means address of the data in memory(Original Data)) 
//*************************************************************************************/
let myYoutubename = "Nikhil Gupta.com"

let anothername = "ChaiaurCode";
console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upiId: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "nikhil@google.com"
console.log(userOne.email); // Output:
console.log(userTwo.email); // Output:


