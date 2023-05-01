const person = {
    name:"person",
    age: 99,
    weight: 70,
    //declaring a function 
description : function(){
    console.log(`My name is ${this.name} and my age is ${this.age} years old.` );
}
}
person.description();

console.log(person.name);
console.log(person.age);
console.log( person.weight);

//add and get values ​​dynamically
person.height = 1.80,
//delete value
delete person.name

//attribute a value like person = "Jhon"
person['name'] = 'Jhon';
//get values
const attribute = 'name';
console.log(person[attribute]);
