// Javascript Exectution Context 
// 

//Global Execution Context
//Function Execution Context
//Eval Execution Context in mongoose is a property for global EC

//Execution context means how javascript files are run and execute.
//Firstly we give code to javascript the global execution is created everytime and global execution context is stored to (this variable ) where it is stored 
// ** For Browser the execution context is window


//Files are run into two phases
// 1)memory Creation Phase/creation phase in this phase we useally allocate a memory for variable or declare thing and we don't execute it.  
//2)Exection phase in this phase 

let val1 = 10
let val2 = 5
function addNum(num1, num2) { 
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2)
//1) Global Execution(global environment) code run firstly in global execution then allocte to (this)  
//2)Memory Creation Phase in this we gather all the variables store in a memory 
// Ist Cycle 
// val1=> undefined
// val2 => undefined
// addNum => definition 
// result1=>undefined
//result2=>undefined
// 3)  Execution Phase
//val1=> 10
//val2 => 5
//addNum =>another execution is created for result1 
//(// every time the function is executed every time new executional context(new variable environment + execution thread ) 
// new variable environment + execution thread 
//memory phase 
// val1=> undefined
//val2 => undefined
//total=> undefined
//execution context then processing starts then execute mathmatical content and data manipulate 
//num1=>10
//num2=>2
//total=>12
//total is return to global executional context 
//now the new executional context will be deleted 
//)

// result1=>15
//result2 =>undefined
//addNum => another execution is created for result2
//(// every time the function is executed every time new executional context(new variable environment + execution thread ) 
// new variable environment + execution thread 
//memory phase 
// val1=> undefined
//val2 => undefined
//total=> undefined
//execution context then processing starts then execute mathmatical content and data manipulate 
//num1=>10
//num2=>2
//total=>12
//total is return to global executional context 
//now the new executional context will be deleted 
//)



//Call Stack 
// Firstly Global execution is pushed into stack
// Then the function will pushed onto  the stack(function method  one()) is executed is poped onto the stack
//lifo execution
