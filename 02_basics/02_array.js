const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//Push will give a nested array

//Using concat to merge two arrays and avoid nesting to give a new array
//This will not modify the original arrays
//Instead, it creates a new array that combines both

// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_Heros);

//Spread operator is used to merge arrays
//It can also be used to merge objects
//It is a more modern and preferred way to merge arrays
//It is more readable and concise than using concat
//It also avoids the nesting issue that can occur with push
//Spread operator can also be used to copy arrays and objects
//It is a powerful feature in JavaScript that allows for more flexible and dynamic code

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // 2 is the depth of flattening
//  console.log(real_another_array);

//flat method is used to flatten nested arrays
//It can take a depth argument to specify how deep to flatten
//It is useful for working with arrays that have multiple levels of nesting
//It can also be used to clean up data structures that have unnecessary nesting


console.log(Array.isArray("Nikhil")); // false
console.log(Array.from("Nikhil")); // ['N', 'i', 'k', 'h', 'i', 'l']

console.log(Array.from({name: "Nikhil"}));// [] if we want not to give a empty array then we need to give to convert a key into or value into array
//intersting example above 
//Array.isArray checks if the value is an array
//Array.from creates a new array from an array-like or iterable object
//It can be used to convert strings, sets, maps, and other iterable objects into arrays
//It is a useful method for working with data that needs to be transformed into an array format

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
//Array.of creates a new array with the given elements
//It is similar to Array.from but does not require an iterable object
//It can be used to create arrays from individual values or variables
//It is a more modern way to create arrays compared to the Array constructor
//It is useful for creating arrays with specific values without needing to use the new keyword



