// deep copy and shallow copy

// deep copy - 
// when a new object, array is created and all the properties are 
// copied to the new object

// shallow copy - 
// when a new object, array is created and the reference of 
// the original object is copied to the new object


// data types = 
// primitive data - number, string, boolean, null, undefined, symbol
// non-primitive data - object, array, function (reference data types)


// let num1 = true;

// let num2 = num1;
// num2 = false;

// console.log(num1, num2);

// let num1 = [1,2]

// let num2 = num1;
// // num2[0] = 3;
// num2.push(5); 

// console.log(num1, num2);


// const object1 = {
//     name: 'John',
//     age: 25,
//     country:{
//         name: 'Nepal',
//         city: 'Kathmandu'
//     },
//     sayHi(){
//         console.log('Hi');
//     }
// }

// console.log(object1.country.name)

//  ... spread operator , object.assign
//  = top level properties are copied to the new object
//  nested objects are not copied, reference is copied

// const object2 = {...object1};

// Object.assign(targetObject, sourceObject)

// const object2 = Object.assign({}, object1);

// object2.name = 'Puran';
// object2.age= 30
// object2.country.name = 'India';

// deep copy
// const object2 = JSON.parse(JSON.stringify(object1));
// object2.name = 'Puran';
// object2.age= 30

// object2.country.name = 'India';



// console.log(object1);
// console.log(object2);

// lodash library
// structuredClone()

// const object1 = {
//     name: 'John',
//     age: 25,
//     country:{
//         name: 'Nepal',
//         city: 'Kathmandu'
//     },
//     sayHi(){
//         console.log('Hi');
//     }
// }

// const object2 = _.cloneDeep(object1)
// object2.name = 'Puran';
// object2.age = 30;
// object2.country.name = 'India';

// console.log(object1);
// console.log(object2);