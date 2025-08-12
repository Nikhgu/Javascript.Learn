// Object Constructor
// Object constructor is a way to create an object using the Object() function
// It is useful for creating objects with specific properties and methods
// It is a more verbose way to create an object compared to Object Literal

//const tinderUser = new Object(); // creating an empty object using Object constructor(Singleton Object)
const tinderUser = {}; // creating an empty object using Object Literal(Not Singleton Object)
 tinderUser.id = "123abc"; // adding a property to the object
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser); // logging the empty object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nikhil",
            lastname: "Gupta"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj4 = {5: 'e', 6: 'f'}
//const obj3 = {obj1, obj2}; // creating an object with two objects as properties
//const obj3 = Object.assign({},obj1, obj2, obj4); // merging obj2,obj4 into obj1
//console.log(obj3); // logging the object with two objects as properties

// object.assign() is a method that copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// In Object.assign(), the first argument is the target object, and the rest are source objects.
// use {} it in object.assign({},source).

const obj3 = {...obj1, ...obj2, ...obj4}; // merging obj1, obj2, and obj4 into a new object
//console.log(obj3); // logging the merged object

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // logging the keys of the object
console.log(Object.values(tinderUser)); // logging the values of the object
console.log(Object.entries(tinderUser)); // logging the entries of the object

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checking if the object has a property 'isLoggedIn'



// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// It is useful for iterating over an object and getting both keys and values.

// Object.keys() returns an array of a given object's own enumerable string-keyed property names.
// It is useful for getting the keys of an object.

// Object.values() returns an array of a given object's own enumerable string-keyed property values.
// It is useful for getting the values of an object.

// Object.freeze() is a method that freezes an object, preventing new properties from being added to it, and marking all existing properties as read-only.
// It is useful for making an object immutable.
//Object.freeze(tinderUser);
//tinderUser.id = "456def"; // this will not change the id property because the object is frozen
//console.log(tinderUser); // logging the frozen object

// Object.seal() is a method that seals an object, preventing new properties from being added to it, but allowing existing properties to be modified.
// It is useful for making an object semi-immutable.
//Object.seal(tinderUser);
//tinderUser.id = "456def"; // this will change the id property because the object is sealed
//tinderUser.newProperty = "new"; // this will not add a new property because the object is sealed
//console.log(tinderUser); // logging the sealed object

// Object.getOwnPropertyDescriptor() is a method that returns a property descriptor for an own property of an object.
// It is useful for getting information about a property, such as its value, writable, enumerable, and configurable attributes.
//console.log(Object.getOwnPropertyDescriptor(tinderUser, 'id')); // logging the property descriptor for the id property


