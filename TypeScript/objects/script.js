"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 'J.R.R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
    return null;
}
const product = buscarProduto('O Hobbit');
if (product instanceof Livro) {
    console.log(`Livro encontrado: ${product.autor}`);
}
if (product instanceof Jogo) {
    console.log(`Jogo encontrado: ${product.nome}`);
}
if (product instanceof Produto) {
    console.log(product.nome);
}
