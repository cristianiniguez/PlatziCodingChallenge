// Coercion en JavaScript

function StringToNumber(numberSt) {
  const chars = numberSt.split('')
  // Si tiene caracteres que no son números o un punto
  if (!chars.every(char => (parseInt(char) >=0 && parseInt(char) <= 9) || char === '.')) {
    return 'Esto no es un número'
  }
  // Si tiene más de un punto
  if (chars.filter(char => char === '.').length > 1) {
    return 'Esto no es un número'
  }
  return parseFloat(numberSt)
}

console.log(StringToNumber('12')) // 12
console.log(StringToNumber('45')) // 45
console.log(StringToNumber('3.14159')) // 3.14159
console.log(StringToNumber('3.141.59')) // Esto no es un número
console.log(StringToNumber('Hola')) // Esto no es un número