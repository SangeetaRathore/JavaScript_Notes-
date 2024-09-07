//Notes: Callback - 
// A callback function is a function that is passed as an argument to another function, 
// to be “called back” at a later time. 
// A function that accepts other functions as arguments is called a higher-order function, 
// which contains the logic for when the callback function gets executed. 
// It’s a way to make sure certain code doesn’t execute until other code has already finished execution. 
// Callback functions are used in JavaScript to perform asynchronous operations.


// Q.1 What is the CallBack hell?
// Callback hell in JavaScript occurs when multiple callbacks are nested within a function, creating a complex and hard-to-maintain code structure that resembles a pyramid, hence the term “pyramid of doom.” This situation makes the code difficult to understand and maintain




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
             payment(leaveHotel); //payment name can be changed but callback fun should be same  as function name
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
     
function visitingHotel(){
         console.log("Enter in the Hotal");
         console.log("order the food");
         preparedFood(deliveredFood);
}
     
visitingHotel();
     

// ****

 // ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM



function insertTheCard(enterThePin){
    setTimeout(()=>{
        console.log("Processing");
        enterThePin(WithdrawMoney);
    }, 5000);
}

function enterThePin(WithdrawMoney){
    setTimeout(()=>{
        console.log("XXXX2344");
        WithdrawMoney(collectCase);
    }, 2000);
}

function WithdrawMoney(collectCase){
    setTimeout(()=>{ 
        console.log("your money is withdrawing");
        collectCase(leaveATM);
    }, 5000);
}

function collectCase(leaveATM){
    setTimeout(()=>{
        console.log("Collect the money");
        leaveATM();
    }, 1000);
}

function leaveATM(){
    console.log("Leave the ATM");
}

function visitingHotel(){
    console.log("Entering the ATM");
    console.log("Insert the Card");
    insertTheCard(enterThePin);
}

visitingHotel();




// ****Callback hell example




// Hotel Enter
// Order Food
// Food is preparing - 10 mins
// delivered to table - 5 mins
// eating - 20 mins
// payment - 10 mins
// Leave Hotel

function preparedFood(foodDelivered){
    setTimeout(()=>{
        console.log("Food is being prepared");
        console.log("Food is ready");
        foodDelivered();
    }, 10000);

}

function deliveredFood(iameating){
    setTimeout(()=>{
        console.log("Food is delivered to your table");
        iameating();
    }, 5000)
   
}

function eatingFood(doingPayment){
    setTimeout(()=>{
        console.log("Eating Food");
        doingPayment();      
    }, 2000)
}

function payment(iamleaving){
    setTimeout(()=>{
        console.log("Payment");
        iamleaving();
    }, 1000)
}

function leaveHotel(){
    console.log("Leave the Hotel");
    console.log("Thank you for visiting the hotel");
}


function visitingHotel(){
console.log("Entering the Hotel");
console.log("Order Food - Biryani ");
preparedFood(()=>{
   deliveredFood(()=>{
       eatingFood(()=>{
           payment(()=>{
               leaveHotel()
           })
       })
   })
})   
}

visitingHotel();


