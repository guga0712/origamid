function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  console.log(this.nome + ' andou');
}

const pessoa1 = new Pessoa('João', 20);

const pais = 'Brasil'
const cidade = new String('Rio')

const listaAnimais = ['Cachorro', 'Rato', 'Cavalo'];

const listaAnimaisArray = Array.prototype.slice.call(listaAnimais);
const listaAnimaisArray2 = Array.from(listaAnimais)