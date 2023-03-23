/*
* Number() converter valores em numeros
* Prompt() registar entradas do usuario
* Alert()  mostrar mensagem  ao usuario
* Templete Strings string com expressao
*/
function calculadora() {

    const operacao = Number(prompt('Escolha uma opcao:' +
        '\n 1 - soma (+)' +
        '\n 2 - subtracao (-)' +
        '\n 3 - multiplicacao (*)' +
        '\n 4 - divisao real (/)' +
        '\n 5 - divisao inteira (%)' +
        '\n 6 - potenciacao (**)'
    ));

    if (!operacao || operacao >= 7) {
        alert('ERROR - Operaçao inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o  segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('ERROR - Parametros inválidos!')
            calculadora();
        } else {
            //utilizando menu com ifs
            /*if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisao_real();
            } else if (operacao == 5) {
                divisao_inteira();
            }
            else if (operacao == 6) {
                potenciacao();
            }*/
            //utilizando menu com switch
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao_real();
                    break;
                case 5:
                    divisao_inteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }


            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                nova_operacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                nova_operacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                nova_operacao();
            }
            function divisao_real() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                nova_operacao();
            }
            function divisao_inteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                nova_operacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª potencia = ${resultado}`);
                nova_operacao();
            }
            function nova_operacao() {
                let opcao = prompt('Deseja realizar outra operacao?\n 1 - Sim\n 2 - Não');
                if (opcao == 1) {
                    calculadora();
                }
                else if (opcao == 2) {
                    alert('Até mais!');
                }
                else {
                    alert('Opção inválida!');
                    nova_operacao();

                }
            }

        }
    }

}
calculadora();