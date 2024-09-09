/*HOF = high order function
1. foreach
2. map
3. filter
4. sort
5. reduce
*/

// dummy data

let data = [
         {name: "sangeeta", age:23, place : "Agra" },
         {name: "Nisha", age:3, place : "Delhi" },
         {name: "Ruchi", age:20, place : "Gujrat" },
         {name: "Kajal", age:20, place : "Jaipur" },
]

let age = [1,2,3,4,56,7,8,92,32,45,23,12,200]
                  /*    forEach    */
// data.forEach(function(date,index){
//          console.log(date.name);
//          console.log(index);
// })

// data.forEach((data) => (console.log(data)))


                  /*    filter    */


/*
let myAge = age.filter(function(age){
         if (age>20){
                  return age
         }
})
console.log(myAge);   // [ 56, 92, 32, 45, 23, 200 ]*/

// let myAge1 = age.filter(age => age>20)
// console.log(myAge1);

// console.log(age.filter(age => age>20));


// let age = [1,2,3,4,56,7,8,92,32,45,23,12,200]

// age.filter(function(age){
//          if (age>20){
//                   console.log(age);
                  
//          }
// })
//  o/p56
//  92
//  32
//  45
//  23
//  200


// let newDate=data.filter(function(dat){
//          if (dat.age===20){
//                   return dat
//          }
// })
// console.log(newDate); 
/*Note: this way provide you, data in array form.*/


// data.filter(function(dat){
//          if (dat.age===20){
//                   console.log(dat);
                  
//          }
// })
/*Note: this way not provide you, data in array form.*/


// data.filter(dat => dat.age===20)

// 

                  /*    map    */
// console.log(data.map(eleent => eleent));
// let myData = data.map(function(dam){
//          return dam
// })
// console.log(myData);

let mydata = data.sort(function(a,b){
         if (a.age > b.age){
                  return 1
         }
         else{
                  return -1
         }
})

// console.log(mydata);

let myData = age.sort((a,b) => a-b)
// console.log(myData);
/* 
f a - b is negative, a will be placed before b.
If a - b is positive, a will be placed after b.
If a - b is zero, the two elements are considered equal.
*/
// 4-5 =-1 4,5
// 23-20=3  20,23



// reduce
let sumAge = age.reduce(function(total,age){
         return total+age;
},0)// this 0 is the  total=0

// console.log(sumAge);

// Feature	map()	                           forEach()
// Return Value	Returns a new array	         Returns undefined
// Purpose	Transform and create a new array	Perform an action (side effects)
// Mutation	Does not mutate the original array	Can mutate the original array
// Chaining	Can be chained with other methods	Cannot be chained
