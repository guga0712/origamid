function pintarTela(cor: string): void {
  document.body.style.background = cor;
}

pintarTela("red");

const btn = document.querySelector("button");

btn?.click();

function isStringOld(value: any) {
  if (typeof value === "string") {
    return true;
  }
}

console.log(isStringOld(3));

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

// abortar("um erro ocorreu");
// console.log("tente novamente");

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {
  forma.perimetro(3);
}

function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

console.log(normalizar("Produto").toUpperCase());
console.log(normalizar(["banana", "uva"]).filter);

// exercicio

function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: number | string): number | string {
  if (typeof valor === "string") {
    const valorNumero = Number(valor);
    return Math.ceil(valorNumero).toString();
  } else {
    return Math.ceil(valor);
  }
}

console.log(arredondar("7.2"));
