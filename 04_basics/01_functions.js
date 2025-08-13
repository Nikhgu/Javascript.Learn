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

//return num1 + num2; //returning the result directly
//    //this will work because the function is returning a value
//    //the return statement ends the function execution and returns the value
//}
//const result = addTwoNumbers(3, 5)//(Argument)

//console.log("Result: ", result); //undefined because the function does not return anything


function loginUserMessage(username = "Sam"){
    if(!username) {
      // console.log("Please provide a username");
       return 
    }
    return `${username} just logged in!` 
}
//console.log(loginUserMessage("Nikhil"))
//console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000)); 

//...num1 is a rest parameter(operator)
//it allows us to pass an indefinite number of arguments to the function
//it will return an array of all the arguments passed to the function

const user = {
    username: "Nikhil",
    price: 199,
}

   function handleObject(anyObject) {
  //console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
   }

// handleObject(user);
handleObject({
    username: "Sam",
    price: 399,
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //200














