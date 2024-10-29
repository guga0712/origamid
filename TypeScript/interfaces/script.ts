"use strict";

interface Produto {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
  </div>
  `;
}
preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: true
});

preencherDados({
  nome: 'Notebook',
  preco: 2500,
  teclado: true
});


