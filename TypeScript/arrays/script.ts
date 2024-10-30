const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3]

function maiorQue10(data: Array<number>) {
  return data.filter(n => n > 10)
}

function filtrarValores(data: Array<number | string>) {
  return data.filter(v => typeof v === 'number')
}


console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));
