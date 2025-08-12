//Objects can be declared into two forms 
//1. Object Literal
//2. Object Constructor

// singleton 
// singleton is a design pattern that restricts the instantiation of a class to one single instance
//If we use object constructor then single instance will be created

//Object Literal
Object.create({}) // this will create an empty object
//Object.create is a method that creates a new object with the specified prototype object and properties
//It is useful for creating objects with a specific prototype chain or for creating objects with specific properties
//It can also be used to create objects that inherit from other objects

const mySym = Symbol("key1")

// If we want to use a symbol as a key in an object, we can do it like this
// use square brackets to define the key
const JsUser = {
    name: "Nikhil",
    "full Name": "Nikhil Gupta",
    [mySym]:"key1",
    age : 25,
    location: "India",
    email:"nikhil@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Object Literal is a way to create an object using curly braces
//It is a simple and concise way to create an object with properties and methods
//It is useful for creating objects with specific properties and methods
// console.log(JsUser.email);
// console.log(JsUser["full Name"]); // accessing property with space in name using bracket notation

// console.log(JsUser["email"]); // accessing property using bracket notation
// console.log(JsUser[mySym]);

JsUser.email = "nikhil@chatgpt.com"; // updating property value
//console.log(JsUser["email"]); // accessing updated property value
//Object.freeze(JsUser); // freezing the object to prevent further modifications
// Object.freeze() makes an object immutable, meaning its properties cannot be changed, added, or removed
// It is useful for creating constants or for preventing accidental modifications to an object

JsUser.email = "nikhil@microsoft.com";
//console.log(JsUser); // still accessing the original value, as the object is frozen

JsUser.greeting = function() { 
    console.log("Hello JS user");
}
console.log(JsUser.greeting()); // calling the method, but it won't be added to the object due to freezing
JsUser.greetingTwo = function() {
    console.log( `Hello JS user, ${this.name}` );
}
console.log(JsUser.greetingTwo()); // calling the method with 'this' context


