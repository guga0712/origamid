"use strict";
function typeGuard(value) {
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
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
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
function handleCursos(data) {
    if (data instanceof Array) {
        console.log("eh array");
    }
    if (Array.isArray(data)) {
        console.log("eh array");
    }
}
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        data.toLowerCase;
    }
}
// handleData(200);
