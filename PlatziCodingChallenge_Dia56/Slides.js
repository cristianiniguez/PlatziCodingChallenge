// Slides en JavaScript

function middleChars(text) {
  let length = text.length
  let position = length % 2 === 0 ? length / 2 - 1 : (length - 1) / 2
  let number = length % 2 === 0 ? 2 : 1
  return text.substr(position, number)
}

console.log(middleChars('Platzi')) // at
console.log(middleChars('Colombia')) // om
console.log(middleChars('Brazo')) // a