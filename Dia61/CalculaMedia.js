// Calcula la Media en JavaScript

function media(...numeros) {
  if (typeof numeros[0] !== 'number') {
    numeros = numeros.flat()
  }
  const suma = numeros.reduce((a, b) => a + b)
  const n = numeros.length
  return suma / n
}

console.log(media(1, 2, 3, 4)) // 2.5
console.log(media([1, 2, 3, 4])) // 2.5