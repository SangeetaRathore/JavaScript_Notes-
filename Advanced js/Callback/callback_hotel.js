//Notes: Callback - 
// A callback function is a function that is passed as an argument to another function, 
// to be “called back” at a later time. 
// A function that accepts other functions as arguments is called a higher-order function, 
// which contains the logic for when the callback function gets executed. 
// It’s a way to make sure certain code doesn’t execute until other code has already finished execution. 
// Callback functions are used in JavaScript to perform asynchronous operations.


// const sayBye = ()=> "Bye";

// function sayHii(callback){
//     const data = callback();
//     return "Hii" + data;
// }

// const result = sayHii(sayBye);    //sayBye is a callback function, SayHii is a higher order function
// console.log(result);


//                 ***                     

// Task:

// Hotel Enter
// Order Food
// Food is preparing - 10 mins
// delivered to table - 5 mins
// eating - 3 mins
// payment - 2 mins
// Leave Hotel

// 1000milisecond=1 sec
// 10000ms = 10 sec




function preparedFood(delivered){
         setTimeout(()=>{
                  console.log("Food is preparing");
                  // console.log("Enter pin");
                  delivered(eatingFood);
         }, 10000);
}
     
function deliveredFood(ieatingFood){
         setTimeout(()=>{
             console.log("Food is delivered");
             ieatingFood(payment);
         }, 5000);
}
     
function eatingFood(payment){
         setTimeout(()=>{ 
             console.log("Eating Food");
             payment(leaveHotel); //payment name can be changed but callback fun shoukd be same  as function name
         }, 3000);
}
     
function payment(leaveHotel){
         setTimeout(()=>{
             console.log("Payment");
             leaveHotel();
         }, 2000);
}
     
function leaveHotel(){
         console.log("Leave the Hotel");
}
     
function visitingATM(){
         console.log("Enter in the Hotal");
         console.log("order the food");
         preparedFood(deliveredFood);
}
     
visitingATM();
     


