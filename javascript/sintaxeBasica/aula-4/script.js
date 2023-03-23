var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores Válidos!') : console.log('Jogadores Inválidos!')
    
//if encadeado
if(jogador1 > 0 && jogador2 == 0){
        console.log('Jogador1 marcou ponto!')
        placar = jogador1 > jogador2;
}else if (jogador2 > 0 && jogador1 == 0){
    console.log('Jogador2 marcou ponto!')
    placar = jogador2 > jogador1;
    }
else{
     console.log('Nenhum jogador marcou ponto.')
}

//caso de escolha e padrao (default)
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador2 ganhou!');
        break;
default:
        console.log('O jogo terminou empatado!');
}

//trabalhando com loops
//loop for
let array = ['valor1','valor2','valor3','valor4','valor5','valor6']
let object = { propriedade1:'valor1', propriedade2:'valor2', propriedade3:'valor1'}

for(let indice = 0; indice < array.length; indice ++){
    console.log(indice);
}

//for in a partir de uma propriedada
for(let i in array){
    console.log(i);
}

//for in com object retorna a propriedade dentro do objeto
for(a in object){
    console.log(a);
}

//for of executa repeticao a partir de um valor
for(r of array){
    console.log(r);
}

//for of em objetos precisa da propriedade para pegar o valor(bit)
for (ob of object.propriedade1){
    console.log(ob);
}

//while verificacao feita antes da iteracao do laco
var n = 0;
var m = 0;
while(n < 10){
    n++;
    console.log(n);
}

//do while verificacao feita depois da iteracao do laco
do{
    m++;
    console.log(m);   
} while(m < 10);