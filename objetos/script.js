// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativar() {
//     this.element().classList.add('ativar')
//   }
// }

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor)

//   }
//   this.ativar = function (classe) {
//     this.element().classList.add(classe)
//   }
// }

// const li = new Dom('li');
// li.ativar('ativar');


// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function pessoaConstructor(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new pessoaConstructor('João', 20);
const maria = new pessoaConstructor('Maria', 25);
const bruno = new pessoaConstructor('Bruno', 15);



// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  this.elements = function () {
    return document.querySelectorAll(selector)
  }
  this.addClass = function (classe) {
    this.elements().forEach(element => {
      element.classList.add(classe)
    })
  }
  this.removeClass = function (classe) {
    this.elements().forEach(element => {
      element.classList.remove(classe)
    })
  }
}
