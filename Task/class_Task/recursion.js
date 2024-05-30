// find the factorial number using while loop
function factorial(n) {
         if (n < 0) {
           return "Factorial is not defined for negative numbers";
         }
       
         let result = 1;
         
         while (n > 0) {
           result *= n;
           n--;
         }
         
         return result;
}
       
// console.log(factorial(5)); 
       


// find the factorial number using for loop

function fac(num) {
    let sum = 1;
    for (let i = num; i >= 1; i--) {
        sum = sum * i;
    }
    return sum;
}

// console.log(factorial(5));




// print output given positive number to 1
function counter(num) {
         if (num <=0){
             console.log("equal to zero or negative number")
             return 
         }
         if (num ==1) {
             console.log(1);
             return;
         }
         console.log(num);
         counter(num - 1);
}
     
// counter(0);



// print the power of giver number
function power(base, expo) {
         if (expo === 0) {
             return 1;
         }
         if (expo === 1) {
             return base;
         }
         return base * power(base, expo - 1);
}
     
// console.log(power(2, 3));



// sum of array
function sumOfArray(arra) {
         let sum=0
         if (arra.length === 0) {
           return sum;
         }
         sum=arra[0] + sumOfArray(arra.slice(1));
         return sum;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sumOfArray(myArray));





//                             Class     Work



// Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.

function sumOfNumber(num){
         if (num==0){
                  return 0;
         }
         return num + sumOfNumber(num-1)
}

// console.log(sumOfNumber(2))


//Write a recursive function that takes a number as an input and returns the factorial of that number.

function fact(num){
         if (num<0){
                  return "It is a negative number and It is invalid number of factorial."
         }
         else if (num<=1){
                  return 1;
         }
         return num * fact(num-1)
}
// console.log(fact(0));


// Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.

function fibonacci(n) {
    if (n <= 0) {
      return 0;
  } else if (n === 1) {
      return 1;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
}


console.log(fibonacci(0));   // Output: 0
console.log(fibonacci(1));   // Output: 1
console.log(fibonacci(2));   // Output: 1
console.log(fibonacci(3));   // Output: 2
console.log(fibonacci(4));   // Output: 3
console.log(fibonacci(5));   // Output: 5
console.log(fibonacci(10));  // Output: 55


// Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.

function productOfNumber(arra){
    let product=1
        if (arra.length === 0) {
           return product;
        }
        product=arra[0] * productOfNumber(arra.slice(1));
        return product;
}
let myArray1 = [1,2,3,4,5,6,7,8,9,10]
// console.log(productOfNumber(myArray1))


// Write a function that takes a string and returns if the string is a palindrome.

const isPalindrome = (text,originalText = text) => {
    if (typeof text !== 'string' || text.length === 0) {
      return 'String should not be empty!';
    }
    if (text.length == 1) {
      return originalText;
    }
    if (text[0] !== text[text.length - 1]) {
      return 'It is not a palindrome';
    }
    return isPalindrome(text.slice(1, text.length - 1), originalText);
  };
  
//   console.log(isPalindrome("racecar"));
//   console.log(isPalindrome("hello"));
//   console.log(isPalindrome("madam"));       
//   console.log(isPalindrome("a"));      
//   console.log(isPalindrome(""));
  
// Write a recursive function that takes a string and reverse the string.



// Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
// input array :    ['foo', 'bar', 'world', 'hello']
// output array : ['FOO', 'BAR', 'WORLD', 'HELLO']


const capitalizeWords = (words) => {
    if (words.length === 0) {
        return [];
    }
    const firstWord = words[0].toUpperCase();
    const restCapitalized = capitalizeWords(words.slice(1));
    return [firstWord, ...restCapitalized];
};
      
const inputArray = ['foo', 'bar', 'world', 'hello'];
const outputArray = capitalizeWords(inputArray);
// console.log(outputArray);
      


// Write a recursive function to find sum of range a-b numbers.
	// example - [5,8]
	// sum = 26

function sumOfRangeNumber(a,b){
    let sum = a    
    if(a==b){
        return sum
    }
    return sum = sum + sumOfRangeNumber(a+1,b)
}

console.log(sumOfRangeNumber(1,9))
     




       
    
