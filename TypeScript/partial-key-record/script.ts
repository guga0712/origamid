interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: "TypeScript: O novo paradigma do JavaScript",
  visualizacoes: 10000,
  tags: ["TypeScript", "JavaScript"],
  autor: "John Doe",
};

console.log(artigo.autor); // John Doe

type objetoLiteral = Record<string, unknown>;

function mostrarTitulo(obj: objetoLiteral) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo({ dado: 1, titulo: "TypeScript" }); // "TypeScript"
