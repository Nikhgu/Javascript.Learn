
const name = "Nikhil Gupta"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name  is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Call-of-Duty");

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const  newString = gameName.substring(0, 4);
console.log(newString); 
//substring is inclusive of start index(0) and exclusive of end index. It will ignore the negative index and start from 0 index.

const anotherString = gameName.slice(-8, 8);
console.log(anotherString);

// slice is inclusive of start index and exclusive of end index. It can also accept negative indices, where -1 refers to the last character.

const newStringOne = '      Nikhil Gupta     ';
console.log(newStringOne);

console.log(newStringOne.trim()); // removes whitespace from both ends of a string

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); // replaces the first occurrence of "%20" with a space
console.log(url.replaceAll("%20", " ")); // replaces all occurrences of "%20" with a space

console.log(url.includes('hitesh')); // checks if the string contains 'hitesh'

console.log(gameName.split('-')); // splits the string into an array using '-' as the delimiter





