//  Print the output
// ; is used to terminate the line


// console.log("hello"); //text or String
// console.log(5); //number

// alert("Hello World");



/* Variable: A variable is a container for storing data values.
let and const are used to declare a variable. (ES6) - 2015.
var is also used to declare a variable but it is not recommended. 
= is used to assign value to a variable , assignment operator.
We can not redeclare a variable using let keyword.
identifier - name of the variable.
in const , we can not reassign a variable and we can not redeclare a variable.

// Hoisting- JavaScript hoisting is the process of moving all the declarations to the top of the current scope (block scope / functional scope).


//  var - global scope / functional scope
// let and const - block scope
// var - hositing
// let and const - no hositing*/

// Rule for naming JS variable:

// 1. Variable names can only contain letters, numbers, $ and _.\
// 2. Variable names can not start with a number.
// 3. Variable names are case sensitive.
// 4. Variable names can not contain spaces.
// 5. Variable names should be descriptive.
// 6. Variable names can not contain reserved words.


// MultipleWords - camelCase,

// namingConvention
// camelCase; - JS
// PascalCase; - React
// snake_case; - Python
// kebab-case, dash-case; - CSS


let firstname; //variable declaration
let lastname; 

firstname = "Jhon"; // "", '' used for Text / String   and variable assigned
lastname = "Cena";

lastname = "Mark";  //re-assigned the value of variable
// console.log("Name = " ,firstname,lastname); //use comma to separate the varaiable during print 

const firstNumber = 8; //decleared + Assigned

// firstNumber = 10; // Can not Reassign


let firstNumber1 = 8; //decleared + Assigned

// firstNumber1 = 10; // Re-assign
// console.log("Number - ", firstNumber1);

// Varibale Types / Data Types
/*

There has 2 data type 1. primitive data type 2. non-primitive data type
primitive data type :  it has 7 types
        a.number      b. symbol       c. bigInt    d. string    e. null   f. undefined
        g. boolean
non-primitive data type: it has 3 types  
        a. array     b. object     c. function

*/


let test = 10 > 5;
console.log(test);


// Array - Collection of data of same type or different type.index based locations - index statrs from 0
// const array = [10, 5, "Punam", "Sangeeta", true];

// object - Collection of key value pairs

// let student = {
//     name:"Punam",
//     age: 25,
//     location: "Pune",
//     phone: {
//         mobile: 1234567890,
//         landline: 1234567890
//     } 
// }

// undefined - variable is declared but not assigned any value.
// // null - variable is declared and assigned null value.

// let box2 = null; // empty

// // console.log(box2);

// What is JavaScript?
/*
Ans: Dynamically type language - JS

*/



// let test1 = "10.7";

// // typeof - that returns its data type

// // console.log(typeof test1);

// // integer - 1, 2, 3
// // float - decimal number ( 1.3 , 1.4556)

// // Convert Number to String , String to Number

let num4 = String(3);
// console.log(typeof num4);

let num5 = Number("5");
// console.log(typeof num5);

// Arithmatic Operators

// + // Addition
// - // Subtraction
// * // Multiplication
// / // Division
// % // Modulus - returns reminder
// ** // Exponentiation - power

let num6 = 10;
let num7 = 3;


// console.log(Math.pow(num6,2))

// console.log(num6 ** 2);

// Increment and Decrement Operators

// Post Increment
// ++ // Increment
// -- // Decrement

let num8 = 10;

// post increment - first return then increment
// pre increment - first increment then return

// console.log(num8--,"first");

// console.log(num8,"second");

// console.log(num8 -- ,"first"); // 10

// console.log(num8,"second"); // 9

// console.log(10 + 8 + "8") = 18 + "8" = "188";

// console.log(10 + 5 + "Hello" + 9 + 9);  // 10 + 5 = 15 + "Hello" = 15Hello + 9 = 15Hello9 + 9 = 15Hello99
// left to right

// let num10 = 10;
// let num11 = 20;
// let word = "ten";

// console.log(num10 + num11 + word);

// String + Number = String

//  + concatenation operator

// let a = "Java";
// let b = "Script";
// let output  = a < b;
// console.log(output);


// let a = 5;
// let b = 10;
// console.log(a == b && a < b);
// console.log(a == b || a < b);
// console.log(!(a == b));



// let a = 10;
// console.log(++a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a);
// console.log(a--);
// console.log(a);