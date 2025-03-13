"use strict";
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("red");
const btn = document.querySelector("button");
btn?.click();
function isStringOld(value) {
    if (typeof value === "string") {
        return true;
    }
}
console.log(isStringOld(3));
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar("Produto").toUpperCase());
console.log(normalizar(["banana", "uva"]).filter);
function arredondar(valor) {
    if (typeof valor === "string") {
        const valorNumero = Number(valor);
        return Math.ceil(valorNumero).toString();
    }
    else {
        return Math.ceil(valor);
    }
}
console.log(arredondar("7.2"));
