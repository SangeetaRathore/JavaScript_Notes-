// Event Bubbling
// Event Capturing or trickling

// Event Bubbling

const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// If we want to stop the event bubbling we can use e.stopPropagation() method


grandParent.addEventListener("click", () => {
//        e.stopPropagation();
         console.log('grandParent bubbling');
//       alert('grandParent bubbling');
})

parent.addEventListener("click", () => {
         // e.stopPropagation();
         console.log("parent bubbling");
//       alert('parent bubbling');
});

child.addEventListener("click", () => {
//       e.stopPropagation();
         console.log("child bubbling");
//        alert('child bubbling');
});


// Event Capturing or trickling

// grandParent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log('grandParent capturing');
// },
// {capture: true}
// )

// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("parent capturing");
//   },
//   { capture: true }
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("child capturing");
//   },
//   { capture: true }
// );


// If we want to capture the element only once then we can use {once: true} in the event listener
//For event bubbling

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();
//     console.log("grandParent bubbling");
//   },
//   { once: true}
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();
//     console.log("parent bubbling");
//   },
//   { once: true}
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("child bubbling");
//   },
//   { once: true}
// );


//For event capturing

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("grandParent capturing");
//   },
//   { once: true, capture: true}
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("parent capturing");
//   },
//   { once: true, capture: true}
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("child capturing");
//   },
//   { once: true, capture: true}
// );




// To remove the element after a given time

// function printGrandParent(){
//     console.log('grandParent bubbling');
// }

// grandParent.addEventListener("click", printGrandParent);

// setTimeout(() => {
//     grandParent.removeEventListener("click", printGrandParent);
// }, 5000)


// To remove the element after a given time using a button

// const button = document.querySelector('#btn');

// function printGrandParent(){
//     console.log('grandParent bubbling');
// }

// grandParent.addEventListener("click", printGrandParent);

// function removeListener() {
//     setTimeout(() => {
//         grandParent.removeEventListener("click", printGrandParent);
//     }, 5000)
// }

// btn.addEventListener("click", removeListener);



// MOUSE EVENTS

// grandParent.addEventListener("mouseover", () => {
//     console.log("hovering");
// })

// grandParent.addEventListener("mouseenter", () => {
//     console.log("hovering");
// })

// grandParent.addEventListener("mouseout", () => {
//   console.log("hovering");
// });

// grandParent.addEventListener("mouseleave", () => {
//     console.log("hovering");
// })