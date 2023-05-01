/*create a class to reprents people.
 *the attributes are : name, age, height and weight.
 *This class should have a method calculate IMC and classify the wheight. 
 */

 class People {
    name;
    age;
    imc;
    height;
    weight;

    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    whoAmI(age) {
        this.age = age;
        console.log(`My name is ${this.name} and my age is ${this.age} year old.`);
    }

    calculateIMC(){
        return this.imc = this.weight / Math.pow(this.height,this.height);
    }

    imcClassification(){
        this.imc = this.calculateIMC();

        if(this.imc < 18.5){
            return 'Under weight!';
        } else
            if(this.imc >= 18.5 && this.imc < 25){
                return 'Normal weight!';
            } else
            if(this.imc >= 25 && this.imc < 30){
                return 'Overweight!';
            } else
            if(this.imc >= 30 && this.imc < 40){
                return 'Obese!';
            } else
                return 'Severe Obesity!';
    }

}

const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

new People('joe',30,20).whoAmI(15);
joe.whoAmI(25);
console.log('And my IMC is '+ joe.calculateIMC());
console.log('So Im '+ joe.imcClassification());