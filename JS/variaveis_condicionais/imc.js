const peso = 70;
const altura = 1.69;
const IMC = peso / (altura * altura)
if (IMC < 18.5) {
  console.log(IMC.toFixed(2));
  console.log('Abaixo do peso')
} else if (IMC >= 18.5 && IMC <= 25) {
  console.log(IMC.toFixed(2));
  console.log('peso normal')

} else if (IMC >= 25 && IMC <= 30) {
  console.log(IMC.toFixed(2));
  console.log('Acima do peso')

} else if (IMC >= 30 && IMC <= 40) {
  console.log(IMC.toFixed(2));
  console.log('Obeso')
} else {
  console.log(IMC.toFixed(2));
  console.log('Obesidade grave')
}