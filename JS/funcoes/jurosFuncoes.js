function aplicarDesconto (valor, desconto){
  return (valor -(valor * (desconto/100)));
}

const precoEtiqueta = 150;
const formaPagamento = 3;

if (formaPagamento === 1) {
  console.log(precoEtiqueta - (precoEtiqueta ,10));
} else if (formaPagamento === 2) {
  console.log(precoEtiqueta - (precoEtiqueta , 15));
} else if (formaPagamento === 4) {
  console.log(precoEtiqueta + (precoEtiqueta ,10));
} else {
  console.log(precoEtiqueta);
}