// Falsy values - false, 0, "", null, undefined, NaN

// let isOpen = false;

// if (isOpen) {
//     console.log("The door is open");
// } else {
//     console.log("The door is closed");
// }

// let apples = 0;

// if (apples) {
//     console.log("We have apples");
// } else {
//     console.log("We have no apples");
// }

// let input = "";
// let message = input || "Hello!";
// let message = "Hello!" || input;
// console.log(message);

// let fname = null;
// if (fname) {
//     console.log("We have a name");
// } else {
//     console.log("We have no name");
//  }

// let fname;
// if(fname) {
//     console.log("Hi!" + fname);
// } else {
//     console.log("Hi! Guest");
// }



// let num1 = "Two";
// let num2 = 2;

// let result = num1/num2;
// console.log(result);  //Nan

// if(isNaN(result)) {
//     console.log("The result is not a number");
// } else {
//     console.log(result);
// }



// console.log(Boolean("false"));
// console.log(Boolean(" "));
// console.log(Boolean("0"));
// console.log(Boolean([]));
// console.log(Boolean({}));


// String and Number comparison

// Acc. to ASCII value :symbols < 0 to 9 number < A to Z < a to z

// console.log("Z" > "A");
// console.log("A" > "B");
// console.log("Priyanka" > "Punam");
// console.log("Mee" > "Me");
// console.log("Priya" > "Priyanka"); // it will check acc to length of string
// console.log("a" > "A");



// console.log("2" > 1); // "2" will convert to 2
// console.log("01" == 1); // "01" will convert to 1
// console.log("A" > 0);  // In JavaScript, A can't convert in numver so its gives false and any comparison with NaN always returns false

// console.log("A" == 65); //it not convert A acc. to ASCII value

// console.log(true > 0);  //true
// console.log(false > 0); //false
// console.log(true == 1); //true
// console.log(false == 0); //true

// console.log("0" == 0); //true
// console.log(Boolean("0")); //true
// console.log(Boolean(0)); //false

// console.log(typeof("0")); // string
// console.log(typeof(0)); //number
// console.log(typeof(false)); //boolean

// console.log(false === 0); //false
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// console.log(undefined == 0); //false
// console.log(undefined > 0);  //false
// console.log(undefined < 0);  //false


/*
console.log(typeof (1234 )) //number
console.log(typeof (1.23 )) //number
console.log(typeof ( 12n)) //bigint
console.log(typeof ( null)) //object
console.log(typeof ( undefined)) //undefined
console.log(typeof ("string" )) //string
console.log(typeof ( true )) //boolean

let a  = Symbol("123")
console.log(typeof (a )) //symbol



let obj = {
    name:"sangeeta"
} 
console.log(typeof (obj)) //object



let arr  = [1,2,3]
console.log(typeof (arr)) //object

let say = function () {};

console.log(typeof say); //fucntion
*/