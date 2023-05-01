class Person{
    name;
    age;
    dayOfBirth;

    constructor(name,age){
        this.name = name;
        this.age = age;
        this.dayOfBirth = 2022 - age;
    }

    description(){
        console.log(`My name is ${this.name} and my age is ${this.age} year old.`);
    }

}
// afeter class Person is created, the function comparePerson receive two objects to verify the parameters:
function comparePerson(p1,p2){
    if(p1.age > p2.age){
        console.log(`${p1.name} is older than ${p2.name}.`);
    } else
    if(p2.age > p1.age){
        console.log(`${p2.name} is older than ${p1.name}.`);
    } else {
            console.log(`${p1.name} and ${p2.name} have the same age.`);
    }   
}

const bob = new Person('Robert', 25);
const zoe = new Person('Marian', 35);

comparePerson(bob,zoe);