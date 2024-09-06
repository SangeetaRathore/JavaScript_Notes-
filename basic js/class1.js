// ; is used to terminate the line
/* github and vscode is product of Microsoft.

IDE =  Integrated Development Environment, 
which is a software application that helps programmers develop software code more efficiently.

Terminal command: node <filname> to run the file.*/

// console.log("hello"); //text or String
// " "  OR ' ' OR template literal(  ` hello &{}`  )IS used to write the string.
// console.log(5); //number

// alert("Hello World"); 

// convresion of data type

// let score = 33
// let changeIntoString = String(score)
// console.log( typeof score);

// let score = "33abc"
// let changeIntoString = Number(score)
// console.log( typeof changeIntoString);  //number
// console.log(changeIntoString); //Nan

// +  is knaown as concating operator
// string+ number = string

// console.log(null > 0 ); //false
// console.log(null == 0 ); //false
// console.log(null >= 0 ); //true

/*  reason : The reason is that an equality check == and comparisons > < >= <= work differently . Comparison convert null to a number , treating it as 0 that's why 3rd is true and 1st is false.
underfined gives false with all.


=== called strick check . It check the value and also data type.

null means no zero, there has no value  
*/


const valu1 = Symbol('123') 
const valu2 = Symbol('123') 
// console.log(valu1===valu2); //false
// symbols gives a differet identity to each value


// console.log("Name = " ,firstname,lastname);

// put the n in the last it makes BigInt

/* types of function is object function , gives function in o/p */

/*
In JS , there are 2 types of memory  
1. stack memeory    2. heap memory
all primitive data goes in stack memeory .In stack memeory it makes a copy.
All non-primitive data types goes to heap memory . It gives refrence of original memory.



// // let button = document.getElementById('btn'); // button
// // let text = document.getElementById('text'); //text
// // button.addEventListener('click', function(){  //change text on button click
// //     text.innerHTML = "Hii";
// // });


/* Variable: A variable is a container for storing data values.
let and const are used to declare a variable. (ES6) - 2015.
var is also used to declare a variable but it is not recommended. 
= is used to assign value to a variable , assignment operator.
We can not redeclare a variable using let keyword.
identifier - name of the variable.
in const , we can not reassign a variable and we can not redeclare a variable.

// Hoisting- JavaScript hoisting is the process of moving all the declarations to the top of the current scope (block scope / functional scope).


// var - global scope / functional scope
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
Reference / non-primitive data type: it has 3 types  
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

let box2 = null; // empty

// console.log(box2);

// What is JavaScript?
/*
Ans: Dynamically type language - JS
JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it.
JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments.
JavaScript is considered lightweight due to the fact that it has low CPU usage, is easy to implement, and has a minimalist syntax. Minimalist syntax as in, has no data types. Everything is treated here as an object. It is very easy to learn because of its syntax similar to C++ and Java.
The V8 engine initially uses an interpreter, to interpret the code. On further executions, the V8 engine finds patterns such as frequently executed functions, and frequently used variables, and compiles them to improve performance.


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


// Logical Operators --> &&, ||, !

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


