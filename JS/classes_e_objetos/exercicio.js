/*Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km 
rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível 
nos  dê o valor gasto em reais para realizar este percurso. */

class Carro {
  marca; 
  cor;
  gastomedioKm;

  constructor (marca, cor, gastomedioKm){
    this.marca = marca;
    this.cor = cor;
    this.gastomedioKm = gastomedioKm;

  }
  calculaGastoPercurso(distancia, precoCombustivel){
   return distancia * this.gastomedioKm * precoCombustivel;
  }
}
const uno = new Carro('Fiat', 'Vermelho', 1/12);
console.log(uno.calculaGastoPercurso(55, 6));