function retorno<variavel>(a: variavel): variavel {
  return a;
}

console.log(retorno("A game"));
console.log(retorno(10));
console.log(retorno(true));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Pera", "Limão", "Banana", "Maça", "Uva", "Mamão", "Manga"];

function firstFive<T>(lista: T[]) {
  return lista.slice(0, 5);
}

console.log(firstFive(numeros));
console.log(firstFive(frutas).map((item) => item));

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}

notNull("Andre")?.toLowerCase();
notNull(200)?.toFixed();

function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true);

function extractText<T extends HTMLElement>(el: T) {
  return {
    texto: el.innerText,
    el,
  };
}

const linkOk = document.querySelector("a");

if (linkOk) {
  console.log(extractText(linkOk).el.href);
}

async function getData<T>(url: string): Promise<T> {
  const responde = await fetch(url);
  return await responde.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

// async function handleData() {
//   const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json')
//   console.log(notebook.preco)
// }

// handleData()
