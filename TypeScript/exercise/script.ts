
function toNumber(value: number | string) {
  if (typeof value === "number") {
    return console.log(value);
  } else if (typeof value === "string") {
    return console.log(Number(value))
  } else {
    throw "value deve ser um número ou uma string";
  }
}


toNumber(100)