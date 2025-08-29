//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is best number");
        
    }
   // console.log(element);
}
// First i initialization then we check condition is true
// then further inner code will execute
//i will be iterated(increse)
// then after condition will be checked if true further execution 
// if condition is false then it will be out of block

for (let i = 1; i <= 10; i++) {
      //console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <=10;  j++) {
        //console.log(`Inner loop value  ${j} and inner loop ${i}`)
        //console.log(i + '*' + j + ' = ' + i*j);
    }
    
}

let myArray = ["Flash", "batman", "superman"]

//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);    
}

//Keywords

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`); 
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`); 
}

