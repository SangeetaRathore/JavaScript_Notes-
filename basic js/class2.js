
// Assignment Operators --> =, +=, -=, *=, /=, %=, **=

// let x = 5;
// x = x + 10;
// console.log(x);

// x += 10; // same as x = x + 10;
// console.log(x);

// let a = "JavaScipt";
// a += " is Awesome";
// console.log(a);

// x -= 2; // same as x = x - 2;
// console.log(x);

// x *= 2; // same as x = x * 2;
// console.log(x);

// x /= 2; // same as x = x / 2;
// console.log(x);

// x %= 2; // same as x = x % 2;
// console.log(x);

// x **= 2; // same as x = x ** 2;
// console.log(x);



// Comparison Operators --> ==, ===, !=, !==, >, <, >=, <=

// let a = 5;
// let b = "5";

// console.log(a == b); // checks only value  known as equal check 
// console.log(a === b); // checks value and datatype  known as strict check 
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

let a = "Java";
let b = "Script";
let output  = a < b;
console.log(output);

// let x = "A";
// let y = "B";
// let output = x < y;
// console.log(output);

// let a = "Amit";
// let b = "Kumar";
// let z = a + " " + b;
// console.log(z);

// let x = 5;
// let y = "10" + x;
// console.log(y);



// Logical Operators --> &&, ||, !

// let a = 5;
// let b = 10;
// console.log(a == b && a < b);
// console.log(a == b || a < b);
// console.log(!(a == b));

// let a = 5;
// let b = 2;
// console.log(a**b);
// console.log(Math.pow(a,b));

// Primitive Data Types --> Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Reference / Non-Primitive Data Types --> Object, Array, Function


// Template literals - backticks(``)
//    ${} known as string intrpolation

// let fName = "Punam";
// let lName = "Kumari";
// console.log("My Name is " + fName + " " + lName);
// console.log(`My Name is ${fName} ${lName}`);

// let a = 5;
// let b = 10;
// let total = "Total amount is " + (a + b) + " only";
// let total = `Total amount is ${a + b} only`;
// console.log(total);

// let fName = "Punam";
// console.log(`Hello ${fName}`);

// let a = 10;
// console.log(++a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a);
// console.log(a--);
// console.log(a);

/*
Q. What is Scope?
Ans Scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.

Types of Scope
1. global Scope      2. Local Scope    3. functional Scope    4. block scope   5. lexical scope

Lexical scoping:In JavaScript, lexical scope is the concept of determining a variable's scope based on where it is declared, not where it is used. It's also known as static scoping.

 decalared variable in:
 Local Scope : fn, conditionl statement, loops and block of code.they cannot be directly accessed from outside it.
 fn scope: fn 
 block scope: conditionl statement, loops and block of code. let and const keyword has block scope


 global Scope:global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code. var has global scope

Local scope: loacal scope refers to the sope of a variable that is defined within a specific block of code. such as  fn, conditionl statement, loops and block of code,

 The Concept of Variable Shadowing
Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable with the same name in a higher scope.


Scope chain: This process of searching for variables through multiple scopes is known as the "scope chain."
In JavaScript, the scope chain is a mechanism that determines how variables are looked up when a variable is referenced. It's a list of all the scopes that are available to the current scope, with the current scope at the beginning. The scope chain works by searching for variables in the following order: 
1st current scopr < 2nd outer scope  < 3rd global scope*/

https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/#the-concept-of-variable-shadowing

/*
global scope are different in node environment and browser environment

Conclusion: ander ki things bahra  nahi jaani chaiye. bhara ki things ander aa skti hai (scope chain(in fn) and lexical scoping (in fn) and clouser)
*/

// control flow 
// let score=400
// if (score==400)  console.log("400"); //not a good way to write the code


let myobj =  {}
if (Object.keys(myobj).length==0){
         // console.log("yes");
         
}

// Object.keys () provided a array of object's keys. 
// let a=null;
// console.log(a ?? 10);