// Javascript Exectution Context 

//Execution context means how javascript files are run and execute.
//Files are run into two phases
// 1)memory Creation Phase/creation phase in this phase we useally allocate a memory for variable or declare thing and we don't execute it.  
//2)Exection phase in this phase 

let val1 = 10
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
// every time the function is executed every time new executional context(new variable environment + execution thread ) 
// new variable environment + execution thread 
//memory phase 
// val1=> undefined
//val2 => undefined
//total=> undefined
//execution context then processing starts 
