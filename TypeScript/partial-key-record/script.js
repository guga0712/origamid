"use strict";
const artigo = {
    titulo: "TypeScript: O novo paradigma do JavaScript",
    visualizacoes: 10000,
    tags: ["TypeScript", "JavaScript"],
    autor: "John Doe",
};
console.log(artigo.autor); // John Doe
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({ dado: 1, titulo: "TypeScript" }); // "TypeScript"
