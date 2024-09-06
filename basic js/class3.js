// Conditional branching - if, else, else if

// let age = 19;
// if (age >= 18) {
//     console.log("You are eligible to vote");
// }

// let year = 2024;
// if (year % 4 == 0) {
//     console.log("This is a leap year");
//     console.log("I can vote");
// }

// let age = 15;
// if (age < 18) {
//     console.log("You are not eligible to vote");
// }
// else {
//     console.log("You are eligible to vote");
// }

// let speed = 60;
// if (speed < 20) {
//     console.log("You are driving too slow");
// }
// else if (speed >= 20 && speed <= 60) {
//     console.log("You are driving at a moderate speed");
// }
// else {
//     console.log("You are driving too fast");
// }


// Conditional operator "?:" or Ternary operator

// Syntax ----> let result = condition ? value1 : value2;

// let age = 15;
// let canVote = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(canVote);

// let speed = 80;
// let message = (speed < 20) ? "You are driving too slow" : (speed >= 20 && speed <= 60) ? "You are driving at a moderate speed" : "You are driving too fast";
// console.log(message);

// Switch statement

// let day = 8;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// Nullish Coalescing Operator - "??"

// The result of a ?? b is:
// A. if a is defined, then a,
// B. if a is undefined / null, then b.

// let a=null;
// console.log(a ?? 10);

// let a = 5;
// console.log(a ?? "Hello"); //5

// let b = undefined;
// console.log(b ?? "Hello"); //Hello

// let firstName;
// let lastName;
// let nickName = "SuperCoder";
// console.log(firstName ?? lastName ?? "Anonymous");  //Anonymous
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); //SuperCoder

// let height = 0;
// console.log(height ?? 100); //0
// console.log(height || 100); //100

// let height = 10;
// let width;
// let area = (height ?? 100) * (width ?? 50);
// console.log(area); //500

// let height;
// let width = 10;
// let area = (height ?? 100) * (50 ?? width ?? 100 ?? 10);
// console.log(area); //5000


// Truthy and Falsy values

// Falsy values - false, 0, "", null, undefined, NaN

// except falsy value all are truthy value

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// let height = 0;
// console.log(height ?? 100); //0
// console.log(height || false || NaN); //NaN : when all are the falsy value it will print last  falsy value

let a = "";
let b = "";
console.log(a ?? 5); // 
console.log(b || 10); //10

// null is standalone value
// typeof(null)  "o/p= object" 
// typeof(undefined)  "o/p= undefined" 
// typeof ()  it is used to know the type 


// "use strict"; //treat all JS code as newer version

// alert("saan")   // it will give a pop menu /notification on browser

/*
Q. What is scope?
scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.
These scopes control the accessibility of variables in different parts of your code */


