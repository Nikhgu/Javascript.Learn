// Dates

let myDate = new Date();
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toDateString);
// console.log(myDate.toJSON()); // JSON format of the date
// console.log(myDate.toISOString());  // ISO format of the date
// console.log(myDate.toLocaleDateString()); // Local date format
// console.log(myDate.toLocaleTimeString()); // Local time format
// console.log(myDate.toLocaleString()); // Local date and time format

// console.log(typeof myDate); // "object"

// let myCreatedDate = new Date(2023, 0, 23); // January is 0 in JavaScript
// console.log(myCreatedDate.toDateString()); // "Mon Jan 23 2023"

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString()); // "Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)"

let myCreatedDate = new Date('2023-01-23T05:03:00Z'); // ISO format
// console.log(myCreatedDate.toLocaleString()); // "Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)"

let myTimestamp = Date.now(); // Current timestamp in milliseconds
//console.log(myTimestamp); // e.g., 1700000000000

//console.log(myCreatedDate.getTime()); // Timestamp of myCreatedDate in milliseconds

//console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

let newDate = new Date();
// console.log(newDate.getMonth()); // Current month (0-11, where 0 is January)
// console.log(newDate.getDate()); // Current day of the month (1-31)
// console.log(newDate.getFullYear()); // Current year (4 digits)
// console.log(newDate.getHours()); // Current hour (0-23)
// console.log(newDate.getMinutes()); // Current minutes (0-59)
// console.log(newDate.getSeconds()); // Current seconds (0-59)
// console.log(newDate.getDay()); // Current day of the week (0-6, where 0 is Sunday)
// console.log(newDate.getMonth() + 1); // Current month (1-12, where 1 is January)

//`${newDate.getDay()} and the time` 

newDate.toLocaleString('default', {

    weekday: "long", // "Monday"
    year: "numeric", // "2023"
    month: "long", // "January"
    day: "numeric", // "23"
    hour: "2-digit", // "05"
    minute: "2-digit", // "03"
    second: "2-digit", // "00"
    timeZoneName: "short" // "GMT"
})

