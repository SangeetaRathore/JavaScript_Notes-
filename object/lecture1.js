
// var _ =require('lodash');

// const { reduce } = require("lodash");

// map, filter and reduce
// deep copy and shallow copy
// lodash library
// factory function



// Array methods

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - returns a new array, does not change the original array
// loop through the array and apply a function to each element

// callback function - when a function is passed as an argument to another function
// Higher Order Function - a function that takes another function as an argument
// for(initilization; condition; increment) {
//     // code
// }


// const printelement = (element)=>{
//     console.log(element + 2);
// }


// const result = array.map((element)=>{
//     return element + 2;
// });

// console.log(result);
// console.log(array);

// Filter - returns a new array, does not change the original array
// loop through the array and apply a function to each element and 
// check if the element satisfies the condition \
// (true return the element, false skip the element)


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = array.filter((element)=>{
//     return element % 2 === 0;
// })

// console.log(even);

// reduce - returns a single value, does not change the original array

// const array = ["a", "b", "c", "d", "e"];

// const result = array.reduce((accumlator, current)=>{
//    return accumlator + current;
// },"Hello")


// console.log(result);

// DRY - Don't Repeat Yourself
// Factory Function - a function that returns an object

// const student1 = {
//     name:"Bhagya",
//     job:"Developer"
// }

// const student2 = {
//     name:"Avantika",
//     job:"Developer"
// }

// const student3 = {
//     name:"Puran",
//     job:"Developer"
// }

// function createStudent(firstName, profession){
//     return {
//         name:firstName,
//         job:profession
//     }
// }

// const Bhagya = createStudent("Bhagya", "Developer");
// const Avantika = createStudent("Avantika", "Developer");
// const Puran = createStudent("Puran", "Developer");
// const Shweta = createStudent("Shweta", "Developer");

// console.log(Bhagya);
// console.log(Avantika);
// console.log(Puran);
// console.log(Shweta);