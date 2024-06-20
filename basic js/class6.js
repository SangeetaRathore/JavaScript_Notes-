// Rounding

// 1. Math.floor - Rounds down to the nearest integer

// console.log(Math.floor(3.1)); //3
// console.log(Math.floor(3.9)); //3
// console.log(Math.floor(-3.1)); //-4
// console.log(Math.floor(-3.9)); //-4

// 2. Math.ceil - Rounds up to the nearest integer

// console.log(Math.ceil(3.1)); //4
// console.log(Math.ceil(3.9)); //4
// console.log(Math.ceil(-3.1)); //-3
// console.log(Math.ceil(-3.9)); //-3

// 3. Math.round - Rounds to the nearest integer
// .1 to .4 -> rounds down to the nearest integer
// .5 to .9 -> rounds up to the nearest integer

// console.log(Math.round(3.1)); //3
// console.log(Math.round(3.9)); //4
// console.log(Math.round(-3.1)); //-3
// console.log(Math.round(-3.9)); //-4
// console.log(Math.round(3.5)); //4
// console.log(Math.round(-3.5)); //-3

// let num = 3.14159265359;
// let a = num*100;
// console.log(a);
// let b = Math.round(a);
// console.log(b);
// console.log(b/100);

// let num = 3.148;
// let a = num*100;
// console.log(a);
// let b = Math.round(a);
// console.log(b);
// console.log(b/100);

// toFixed() - Rounds to the nearest integer and returns a string

// let num = 3.14159265359;
// console.log(typeof num); //number
// console.log(num.toFixed(5), typeof num.toFixed(5)); //3.14159 string
// console.log(typeof num); //number

// let num2 = 3.148;
// console.log(num2.toFixed(2));

// let num = 3.1;
// console.log(num.toFixed(0));
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));
// console.log(num.toFixed(5));

// let a = 1/3;
// console.log(a.toFixed(20));

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2); //false

// console.log(0.1.toFixed(20));
// console.log(0.2.toFixed(20));

// let a = 0.1 + 0.2;
// console.log(a.toFixed(2));

// console.log(99999999999999999);


// finish

// isNaN() - Checks if the value is NaN

// console.log(NaN);  //NaN
// console.log(isNaN(NaN)); //true
// console.log(isNaN(10)); //false
// console.log(isNaN('10')); //false becuse NaN  is try convert the value in number
// console.log(isNaN('Hello')); //true
// console.log(isNaN('10Hello')); //true

// isFinite() - Checks if the value is a finite number

// console.log(isFinite(10));
// console.log(isFinite('10'));
// console.log(isFinite('Hello'));
// console.log(isFinite('10Hello'));
// console.log(isFinite(10.5468546));
// console.log(isFinite(Infinity));