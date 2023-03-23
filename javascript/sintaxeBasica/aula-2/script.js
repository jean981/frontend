//tipos de dados primitivos

//tipos booleans
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));

//tipos number
var anyNumber = 2;
console.log(anyNumber);
console.log(typeof(anyNumber));

//tipos string
var myName = 'jose';
console.log(myName);
console.log(typeof(myName));

// variaveis de scopo
let anyNewName = 'pedro';
console.log(anyNewName);
anyNewName = 'joaquim'
console.log('nome alterado: ',anyNewName);

var globalScope = 'global';
console.log(globalScope);

function globalScope(){
    let localScope = 'local';
    console.log(localScope);
}

//comparacao de valores

let comparacao = '0' == 0;
console.log(comparacao);

let comparacaoIdentica = 0 === '0';
console.log(comparacaoIdentica);

// operadores aritmeticos

var soma = 1 + 1;
console.log(soma);
var sub = 3 - 1;
console.log(sub);
var mult = 3 * 2;
console.log(mult);
var divReal = 6 / 2;
console.log(divReal);
var pot = 8 ** 2;
console.log(pot);

var maiorQ = 5 > 2;
console.log(maiorQ);
var menorQ = 5 < 2;
console.log(menorQ);
var menorIgual = 5 <= 2;
console.log(menorIgual);

//operadores relacionais 

var e = true && false;
console.log(e);
var ou = true || false;
console.log(ou);
var nao = !false;
