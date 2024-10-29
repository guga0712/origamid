// @ts-check

const produtos = [
  {
    nome: "O senhor dos anéis",
    tipo: "Livro",
  },
  {
    nome: "A Guerra dos Tronos",
    tipo: "Livro",
  },
  {
    nome: "Dark Souls",
    tipo: "Jogo",
  }
]

function filtrarLivros(dados) {
  return dados.filter(item => item.tipo === "Livro")
}

console.log(filtrarLivros(produtos))