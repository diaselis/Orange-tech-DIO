/*
1- débito 10% de desconto 
2- dinheiro ou pix 15% de desconto 
3 - cartão 2x sem desconto 
4 acima de 2x preço normal + acréscimo de 10%
*/
const precoEtiqueta = 150;
const formaPagamento = 4;
if (formaPagamento === 1) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaPagamento === 2) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaPagamento === 4) {
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
} else {
  console.log(precoEtiqueta);
}