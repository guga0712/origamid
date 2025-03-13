"use strict";
async function fetchCursosOld() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
}
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else {
            color = "red";
        }
        document.body.innerHTML += `
    <div>
      <h2 style="color: ${color}">${curso.nome}</h2> 
      <p>Horas: ${curso.horas}</p>
      <p>Gratuito: ${curso.gratuito ? "Sim" : "Não"}</p>
      <p>Tag: ${curso.tags.join(", ")}</p>
      <p>Aulas: ${curso.idAulas.join(" | ")}</p>
    </div>
    `;
    });
}
fetchCursosOld();
