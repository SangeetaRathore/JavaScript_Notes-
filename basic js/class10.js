let fName = "Shrutika";

function sayHello() {
    fName = "Vishakha";

    let message = "Hello " + fName;
    console.log(message);
}
console.log(fName);
sayHello();
console.log(fName);



// Parameters and Arguments

// function greet(name) {
//     console.log("Hello " + name);
// }
// greet('Alka');
// greet(12);
// greet('Sushmita');

// function greet(city) {
//     console.log("I belongs to " + city);
// }

// greet('Pune');
// greet(); 
// greet();  // can give default vale in paarameter e.g :function greet(city="Agra")
// greet('Mumbai', 'Pune');
// greet('Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Satara');


// function greet(city, country) {
//     console.log("I belongs to " + city + " in " + country);
// }
// greet('Pune', 'India');
// greet('Delhi');   //o/p = I belongs to Delhi in undefined
// greet();
// greet("", "India");
// greet(undefined, "India");
// greet(, "India");

// function age(name, age) {
//     console.log(name + " is a good boy");
// }
// age('Rajkumar', 20);

function greet(fName1, age) {
    fName1 = "Hi" + fName1;
    console.log(fName1 + age);
}
var fName1 = "Gayatri";
greet(fName1, 20);
console.log(fName1);//Since the modification of fName1 inside the function doesn't affect the global fName1 (due to parameter shadowing), the value remains "Gayatri"

// function greet(fName, age = 22) {
//     console.log("Hello " + fName + " you are " + age + " years old");
// }
// greet("Nikita");
// greet("Nikita", 20);
// greet("Eram", undefined);
// greet("Eram", null);
// greet("Eram", false);


// null vs undefined
// undefined vs not defined

// function place(city, country) {
//     if(country === undefined) {
//         country = 'China';
//     }
//     console.log("I belongs to " + city + " in " + country);
// }
// place('Mumbai', 'India');
// place('Delhi');

// function place(city, country) {
//          country = country || 'China';
//          console.log("I belongs to " + city + " in " + country);
//      }
//      place("Delhi");