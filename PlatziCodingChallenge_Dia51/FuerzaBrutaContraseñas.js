// Fuerza bruta en contraseñas en JavaScript

function contrasPosibles(lenght) {
  let passwordsOneChar = Array.from({ length: 126 - 32 + 1 }, (v, i) => i + 32).map(n => String.fromCharCode(n))
  if (lenght === 1) {
    return passwordsOneChar
  } else {
    return passwordsOneChar.flatMap(char => contrasPosibles(lenght - 1).map(pass => `${pass}${char}`))
  }
}

function passwordGuesser(password, maxAttempts = 1000) {
  let passwordLength = password.length // Obtiene el largo de la contraseña
  // Obteniendo todas las contraseñas posibles
  let possiblePasswords = contrasPosibles(passwordLength)
  // Buscando la contraseña entre las posibles
  let generatedPassword
  let attempts = 0
  let start = new Date().getTime()
  do {
    let randomIndex = Math.floor(Math.random() * possiblePasswords.length)
    generatedPassword = possiblePasswords.splice(randomIndex, 1)
    generatedPassword = generatedPassword[0]
    attempts++
    // debugger
  } while (generatedPassword !== password && attempts < maxAttempts);
  let end = new Date().getTime()
  let time = end - start
  let guessed = generatedPassword === password
  return { password, attempts, time, guessed }
}

console.log(passwordGuesser('a'))
// {password: "a", attempts: 26, time: 0, guessed: true}
console.log(passwordGuesser('f0?'))
// {password: "f0?", attempts: 15381, time: 17, guessed: true}
// console.log(passwordGuesser('Amo Platzi')) ... Muchas letras