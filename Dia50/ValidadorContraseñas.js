// Validador de Contraseñas en JavaScript

// Caracteres UNICODE (32 - 126)
// CODES_SYMBOLS1 = [32, 47]
// CODES_NUMBERS = [48, 57]
// CODES_SYMBOLS2 = [58, 64]
// CODES_UPPERLETTERS = [65, 90]
// CODES_SYMBOLS3 = [91, 96]
// CODES_LOWERLETTERS = [97, 122]
// CODES_SYMBOLS4 = [123, 126]

function validatePassword(password) {
  let parameters = 0
  let charCodes = password.split('').map(char => char.charCodeAt())
  // ¿Incluye una letra minúscula?
  if (charCodes.find(charCode => charCode >= 97 && charCode <= 122)) { parameters++ }
  // ¿Incluye una letra mayúscula?
  if (charCodes.find(charCode => charCode >= 65 && charCode <= 90)) { parameters++ }
  // ¿Incluye un número?
  if (charCodes.find(charCode => charCode >= 48 && charCode <= 57)) { parameters++ }
  // ¿Incluye un caracter especial?
  if (charCodes.find(charCode => {
    return (charCode >= 32 && charCode <= 47)
    || (charCode >= 58 && charCode <= 64)
    || (charCode >= 91 && charCode <= 96)
    || (charCode >= 123 && charCode <= 126)
  })) { parameters++ }
  // ¿Tiene una longitud mínima de 8 caracteres?
  if (charCodes.length >= 8) { parameters++ }
  // ¿Cuántos parámetros cumple?
  if (parameters <= 2) {
    return 'Contraseña insegura'
  } else if (parameters >= 3 && parameters <= 4) {
    return 'Contraseña medianamente segura'
  } else if (parameters === 5) {
    return 'Contraseña segura'
  }
}

console.log(validatePassword('hola')) // Contraseña insegura
console.log(validatePassword('abcde1234')) // Contraseña medianamente segura
console.log(validatePassword('P6gFqqsUIZ3@')) // Contraseña segura