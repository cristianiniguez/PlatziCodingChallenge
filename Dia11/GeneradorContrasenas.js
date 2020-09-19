// Generador de contraseñas en JavaScript

// Caracteres UNICODE (32 - 126)
const CODES_SYMBOLS1 = Array.from({length: 47 - 32 + 1}, (v, i) => i + 32) /* [32, 47] */
const CODES_NUMBERS = Array.from({length: 57 - 48 + 1}, (v, i) => i + 48) /* [48, 57] */
const CODES_SYMBOLS2 = Array.from({length: 64 - 58 + 1}, (v, i) => i + 58) /* [58, 64] */
const CODES_UPPERLETTERS = Array.from({length: 90 - 65 + 1}, (v, i) => i + 65) /* [65, 90] */
const CODES_SYMBOLS3 = Array.from({length: 96 - 91 + 1}, (v, i) => i + 91) /* [91, 96] */
const CODES_LOWERLETTERS = Array.from({length: 122 - 97 + 1}, (v, i) => i + 97) /* [97, 122] */
const CODES_SYMBOLS4 = Array.from({length: 126 - 123 + 1}, (v, i) => i + 123) /* [123, 126] */

function generatePassword(lenght, lower = true, upper = true, numbers = true, special = false) {
    /* WHICH CHARACTERS ARE ALLOWED */
    let charscodes = []
    if (special) {
        charscodes = charscodes.concat(CODES_SYMBOLS1)
        charscodes = charscodes.concat(CODES_SYMBOLS2)
        charscodes = charscodes.concat(CODES_SYMBOLS3)
        charscodes = charscodes.concat(CODES_SYMBOLS4)
    }
    if (numbers) charscodes = charscodes.concat(CODES_NUMBERS)
    if (lower) charscodes = charscodes.concat(CODES_LOWERLETTERS)
    if (upper) charscodes = charscodes.concat(CODES_UPPERLETTERS)
    /* ¿IS THERE ANY CHARACTER ALLOWED? */
    if (charscodes.length < 1) return 'no se puede generar contraseña con estas condiciones'
    /* WRITING THE PASSWORD */
    let password = ''
    for (let i = 0; i < lenght; i++) {
        password += String.fromCharCode(charscodes[Math.floor(Math.random()*charscodes.length)])
    }
    return password
}

const largo = parseInt(prompt('¿Cuántos caracteres quiere en su contraseña?'))
const minusculas = prompt('¿Quiere que su contraseña permita minúsculas? (si/no)') == 'si'
const mayusculas = prompt('¿Quiere que su contraseña permita mayúsculas? (si/no)') == 'si'
const numeros = prompt('¿Quiere que su contraseña permita números? (si/no)') == 'si'
const especiales = prompt('¿Quiere que su contraseña permita caracteres especiales? (si/no)') == 'si'
alert(`Su contraseña es: ${generatePassword(largo, minusculas, mayusculas, numeros, especiales)}`)