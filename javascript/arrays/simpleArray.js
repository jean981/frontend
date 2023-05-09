const notas = [];

notas.push(10);
notas.push(15);
notas.push(20);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota; 
}

const media = soma / notas.length;
console.log(media);

//Faça um programa que preencha uma lista com todos os números pares contidos no intervalo aleatorio;
const numbers = [];

function printer (){
    for (let i = 0; i < 10; i++) {
        numbers[i] = Math.floor(Math.random() * 100);
    }
    for (let i = 0; i <= numbers.length; i++) {
        let n = numbers[i];
        if(n % 2 === 0)
        console.log(n);
    }
}
printer();

