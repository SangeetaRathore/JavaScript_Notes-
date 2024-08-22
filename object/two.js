let obj = {
         name: "sangeeta",
         class: 12,
         "my city": "Agra",
}

console.log(obj.name);
console.log(obj["my city"]);

var hobby = Object.create(obj)
console.log(hobby);


