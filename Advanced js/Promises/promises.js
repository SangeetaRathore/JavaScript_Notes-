// Promises -
// a promise is an object that may produce a single value some time in the future:
// either a resolved value, or a reason that it's not resolved (e.g., a network error occurred).
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

//  Why used Promises -  to Perform async operations

// pending - initial state
// fulfilled - value
// rejected - reason

// How to create a Promise - using Promise constructor

let treet = new Promise(function(resolve,reject){
         let party = false
         if (party){
                  resolve("Promises is done")
         }
         else{
                  reject("Promises is not done")
         }
})

console.log(treet);

treet.then((resule)=>{
         console.log(resule);
}).catch((error)=>{
         console.log(error);
})


// let isParty = function (result) {
//   return new Promise(function (resolve, reject) {
//     // let party = false;
//     if (result) {
//       resolve("Party is on");
//     } else {
//       reject("Party is off");
//     }
//   });
// };

// let isGiftRecieved = function () {
//   return new Promise(function (resolve, reject) {
//     let gift = true;
//     if (gift) {
//       resolve(true);
//     } else {
//       reject(false);
//     }
//   });
// };

// isGiftRecieved()
//   .then((result) => {
//     console.log(result);
//     return isParty(result);
//   })
//   .then((result) => {
//     console.log(result, "result");
//   })
//   .catch((error) => {
//     if (!error) {
//       console.log("No Gift");
//     }
//     console.log(error, "error");
//   });