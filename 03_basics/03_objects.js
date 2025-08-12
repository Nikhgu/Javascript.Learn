// Destructuring objects
const course = {
    courseName: "JavaScript Basics",
    price: "$999",
    courseInstructor: "hitesh"
    
}
//course.courseInstructor

const {courseInstructor:Instructor} = course; // destructuring the object
//console.log(course.courseInstructor); // logging the course instructor
console.log(Instructor); // logging the destructured instructor

// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

// API 
//Json Format
// {
//     'name': "hitesh",
//     'coursename': "JavaScript Basics",
//     'price': "free",
    
// }

// [
//     {},
// {},
//     {},
// ]


