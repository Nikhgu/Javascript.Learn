const user = {
    username: "Nikhil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,  welcome to website`);
        console.log(this);
        
    }
    
};

// this.   will refer the current context(values) of the function
// user.welcomeMessage(); // Nikhil, welcome to website
// user.username = "Sam" 
// user.welcomeMessage(); // Sam, welcome to website
//console.log(this);


// function chai(){
//     let username = "Nikhil"
//     console.log(this.username); // undefined in strict mode, window.username in non-strict mode
    
// }
//     chai(); // window object in browser or global object in node


// const chai = function(){
//     let username = "Nikhil"
//     console.log(this.username); // undefined in strict mode, window.username in non-strict mode
    
// }
// chai(); // window object in browser or global object in node


const chai = () => {
    let username = "Nikhil"
    console.log(this); 
    
}
//chai(); 
// this will refer to the global object in non-strict mode, and undefined in strict mode
// In arrow functions, `this` does not refer to the function's context but to the enclosing lexical context.
// So in this case, it will refer to the global object in non-strict mode or undefined in strict mode.

// const addTwo =  (num1, num2) => {
//     return num1 + num2; // Expcit return is not needed in arrow functions with a single expression
// }

// const addTwo =  (num1, num2) =>   num1 + num2;
// const addTwo =  (num1, num2) =>   (num1 + num2); // Implicit return with parentheses
const addTwo =  (num1, num2) =>   ({username : "Nikhil"}); // Implicit return with parentheses, returning an object
console.log(addTwo(3, 4)); // 7
 
const myArray = [2,5,3,7,8]

//myArray.forEach() => 