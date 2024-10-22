const img = document.querySelector('img')

function callback(event) {
  console.log(event)
}

// img.addEventListener('click', callback)


const imagensList = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.type)
}

imagensList.addEventListener('click', callbackLista)

// console.log(imagensList)

// previnir padrão (nao vai abrir o link)
const linkExperto = document.querySelector('a[href^="http"]')

function handleLinkExterno(event) {
  event.preventDefault()
  console.log(this.getAttribute('href'))
  console.log('clicou')
}

linkExperto.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event)
}

h1.addEventListener('mouseenter', handleEvent)
h1.addEventListener('mousemove', handleEvent)

function handleKeyboard(event) {
  if (event.key === 'f') {
    console.log('apertou F')
  }
}

window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll('img')

function handleImg(event) {
  console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  });
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
  console.log('Clicou em', event.target)
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento)
})

console.log(todosElementos)



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function HandleClick(event) {
  if (event.key === 't') {
    console.log('clicou T')
  }
}

window.addEventListener('keydown', HandleClick)