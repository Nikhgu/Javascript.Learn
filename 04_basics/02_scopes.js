//var c = 300
let a = 300
if(true) {
   let a  = 10
   const b = 20
   //var c = 30
  //console.log("Inner: ", a);
}

//console.log(a); // 10
//console.log(b); // 20
//console.log(c); // 30

function one () {
    const username = "Nikhil"

    function two () {
        const website = "youtube"
        console.log(username);
    }
   // console.log(website); // ReferenceError: website is not defined
    
   two();
}
//one();

if(true){
    const username = "Nikhil"
    if(username === "Nikhil") {
        const website = " youtube"
       // console.log(username + website);
    }
   // console.log(website);
    
}
//console.log(username); 


//++++++++++++++++++++++++ intersecting +++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){

return num + 1;
}


console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization(because of the `const` declaration and hoisting)
const addTwo = function(num) {
    return num + 2;
}
 
    

























