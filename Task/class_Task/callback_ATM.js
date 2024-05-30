 // ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM


function preparedFood(deliveredFood){
         setTimeout(()=>{
             console.log("Food is being prepared");
             console.log("Food is ready");
             deliveredFood(eatingFood);
         }, 10000);
}
     
function deliveredFood(eatingFood){
         setTimeout(()=>{
             console.log("Food is delivered to your table");
             eatingFood(payment);
         }, 5000);
}
     
function eatingFood(payment){
         setTimeout(()=>{ 
             console.log("Eating Food");
             payment(leaveHotel);
         }, 2000);
}
     
function payment(leaveHotel){
         setTimeout(()=>{
             console.log("Payment");
             leaveHotel();
         }, 1000);
}
     
function leaveHotel(){
         console.log("Leave the Hotel");
}
     
function visitingATM(){
         console.log("Entering the Hotel");
         console.log("Order Food - Biryani ");
         preparedFood(deliveredFood);
}
     
visitingATM();
     