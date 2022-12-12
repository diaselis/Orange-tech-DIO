class Pessoa {
  nome;
  idade;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoNascimento = 2022 - idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
  }
}
const elis = new Pessoa('Elis', 31);
const raquel = new Pessoa('Raquel', 38);
elis.descrever();
raquel.descrever();
console.log(elis);