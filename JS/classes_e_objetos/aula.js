/*Objeto*/
const pessoa = {
  nome: 'Elisângela Dias',
  idade: 31,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);

  }
};

pessoa.descrever();


