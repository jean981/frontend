/*
** condicao de pagamento:
1 - A vista debito, recebe 10% de desconto;
2 - A vista dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preco normal de etiqueta sem juros;
4 - Acima de duas vezes, preco normal de etiqueta mais 10% de juros;
*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}
function verificarFormaPagamento(formaPagamento, precoEtiqueta){
    if(formaPagamento === 1){
        console.log('Valor a ser pago: '+ aplicarDesconto(precoEtiqueta, 10));
    } else
        if(formaPagamento === 2){
            console.log('Valor a ser pago: '+ aplicarDesconto(precoEtiqueta, 15));
    } else
        if(formaPagamento === 3){
            console.log('Valor a ser pago: '+ precoEtiqueta);
    } else
        if(formaPagamento === 4){
            console.log('Valor a ser pago: '+ aplicarJuros(precoEtiqueta, 10));
        }
}
(function () {
    const precoEtiqueta = 100;
    const formaPagamento = 1;
    verificarFormaPagamento(formaPagamento, precoEtiqueta);
})();