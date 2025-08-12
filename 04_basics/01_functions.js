const { use } = require("react");

function sayMyName() {
console.log("N");
console.log("I");
console.log("K");
console.log("H");
console.log("I");
console.log("L");
}

//sayMyName()
                       //(Parameter)
// function addTwoNumbers(num1, num2) {
    
//     console.log(num1 + num2);
// }

//function addTwoNumbers(num1, num2) {
    
//    let result = num1 + num2;
//    return result; //returning the result
//    //this will not work because the function is returning a value
//return num1 + num2; //returning the result directly
//    //this will work because the function is returning a value
//    //the return statement ends the function execution and returns the value
//}
//const result = addTwoNumbers(3, 5)//(Argument)

//console.log("Result: ", result); //undefined because the function does not return anything


function loginUserMessage(username = "Sam"){
    if(!username) {
       console.log("Please provide a username");
       return 
    }
    return `${username} just logged in!` 
}
//console.log(loginUserMessage("Nikhil"))
console.log(loginUserMessage("hitesh"));



















