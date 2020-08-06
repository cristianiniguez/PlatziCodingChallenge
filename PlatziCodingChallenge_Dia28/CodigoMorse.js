//Codigo Morse en JavaScript

const CODIGO_MORSE = new Map([
    ['a', '.-'], ['b', '-...'], ['c', '-.-.'], ['ch', '----'], ['d', '-..'], ['e', '.'], ['f', '..-.'], ['g', '--.'], ['h', '....'], ['i', '..'], ['j', '.---'], ['k', '-.-'], ['l', '.-..'], ['m', '--'], ['n', '-.'], ['ñ', '--.--'], ['o', '---'], ['p', '.--.'], ['q', '--.-'], ['r', '.-.'], ['s', '...'], ['t', '-'], ['u', '..-'], ['v', '...-'], ['w', '.--'], ['x', '-..-'], ['y', '-.--'], ['z', '--..'], ['0', '-----'], ['1', '.----'], ['2', '..---'], ['3', '...--'], ['4', '....-'], ['5', '.....'], ['6', '-....'], ['7', '--...'], ['8', '---..'], ['9', '----.'], ['.', '.-.-.-'], [',', '-.-.--'], ['?', '..--..'], ['"', '.-..-.'], ['!', '--..--'],
])

function codificar(texto) {
    let caracteres = texto.toLowerCase().split('')
    let codigos = caracteres.map(char => CODIGO_MORSE.get(char))
    return codigos.join(' ')
}

console.log(codificar('Hola Mundo')) //.... --- .-.. .-  -- ..- -. -.. ---