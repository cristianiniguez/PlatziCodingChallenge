// Funciones y números binarios en JavaScript

function binario(numero) {
  let binario = ''
  while (numero > 1) {
    let residuo = numero % 2
    binario = `${residuo}${binario}`
    numero = (numero - residuo) / 2
  }
  binario = `${numero}${binario}`
  return binario
}

console.log(binario(14)) // 1110
console.log(binario(38)) // 100110
console.log(binario(127)) // 111111