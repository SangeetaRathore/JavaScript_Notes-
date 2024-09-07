/*
currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

There are several reasons why currying is ideal:

Currying is a checking method to make sure that you get everything you need before you proceed
It helps you to avoid passing the same variable again and again
It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
It is used in functional programming to create a higher-order function
This could be personal preference, but I love that it makes my code readable

*/
const addCurry =(a) => {
         return (b)=>{
             return (c)=>{
                 return a+b+c
             }
         }
     }
console.log(addCurry(2)(3)(5)) // 10