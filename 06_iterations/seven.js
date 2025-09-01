const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  myNumbers.map( (num) => num + 10)
// const newNums =  myNumbers.map( (num) => {
//    return num + 10
// })

// Chaining in this the first map will form an array then another map will use it.
// we can apply map then filter any time.
const newNums = myNumbers
               .map((num) => num * 10)
               .map( (num) => num + 1)
                .filter((num) => num >= 40)
console.log(newNums);




























