function comparar(tipo: string, ...numeros: number[]) {
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
}

console.log(comparar("maior", 4, 5, 3, 2, 3));
