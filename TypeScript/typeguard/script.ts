function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerHTML;
  }
}

typeGuard("oi");
typeGuard(2);
typeGuard(document.body);

const obj = {
  nome: "Origamid",
};

if ("teste" in obj) {
  console.log("sim");
}

interface Produto {
  nome: string;
  preco: number;
}
async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}

// function handleProduto(data: any) {
//   if ("preco" in data) {
//     document.body.innerHTML += `
//     <p>Nome: ${data.nome}</p>
//     <p>Preço: R$ ${data.preco + 100}</p>
//   `;
//   }
// }

function isProduto(value: unknown): value is Produto {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "preco" in value
  ) {
    return true;
  } else {
    return false;
  }
}
function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data.nome);
  }
}

fetchProduto();

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log("eh array");
  }
  if (Array.isArray(data)) {
    console.log("eh array");
  }
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}
function handleData(data: unknown) {
  if (isString(data)) {
    data.toLowerCase;
  }
}

// handleData(200);
