// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM


// function insertTheCard(WithdrawMoney){
//          setTimeout(()=>{
//                   console.log("Processing");
//                   console.log("Enter pin");
//                   WithdrawMoney();
//          }, 5000);
// }
     
// function WithdrawMoney(eatingFood){
//          setTimeout(()=>{
//              console.log("collect your money");
//              eatingFood(payment);
//          }, 5000);
// }
     
// function eatingFood(payment){
//          setTimeout(()=>{ 
//              console.log("Eating Food");
//              payment(leaveHotel);
//          }, 2000);
// }
     
// function payment(leaveHotel){
//          setTimeout(()=>{
//              console.log("Payment");
//              leaveHotel();
//          }, 1000);
// }
     
// function leaveHotel(){
//          console.log("Leave the Hotel");
// }
     
// function visitingATM(){
//          console.log("Enter in the ATM");
//          console.log("Insert the card");
//          insertTheCard(deliveredFood);
// }
     
// visitingATM();
     




let treet1 = new Promise(function(resolve,reject){
         let party = true

         if (party){
                  resolve("Party is going on");
         }
         else{
                  reject("No party");
         }


})

treet1.then(
         
)


let treet2 = new Promise(function(resolve,reject){
         let gift =true
         if (gift){
                  resolve("Go for party");
         }
         else{
                  reject("No gift,No party");
         }

})