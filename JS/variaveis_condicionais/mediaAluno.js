const nota1 = 5.0;
const nota2 = 4.5;
const nota3 = 3.5;
const media = (nota1 + nota2 + nota3) / 3;
if (media < 5) {
  console.log(media.toFixed(2));
  console.log("Aluno reprovado!");
} else if (media >= 5 && media <= 7) {
  console.log(media.toFixed(2));
  console.log("Aluno em recuperação!");

} else {
  console.log(media.toFixed(2));
  console.log("Aluno aprovado!");
}