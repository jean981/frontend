//o que sao funcoes - sao blocos de comando para executar determinadas tarefas
function funcao(){
    console.log('esta eh uma funcao');
}
funcao();

//funcao com parametros de entrada
function funcao_com_parametros(parametro1, parametro2){
    console.log(parametro1, parametro2);
}
funcao_com_parametros('valor 1','valor 2');

//acima temos os exemplos de funcoes declarativa

//expressoes de funcoes possuem nomeacao opcional
//nomeada
var expressao = function funcao_expressao_nomeada(){
    console.log('Mensagem de uma funcao de expressao')
}
expressao();

//sem nome
expressao = function (){
    console.log('Mensagem de uma funcao de expressao sem nome')
}
expressao();

// arrow function - funcoes de sintaxe curta, sempre sao anonimas
//sem nome
var arrow_function = () => {
    console.log('Mensagem de uma arrow function!')
}
arrow_function();