

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