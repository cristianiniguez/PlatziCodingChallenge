//Memory (parte 1) en JavaScript

//Funcion que devuelve un elemento aleatorio de un array
function randomChars(chars, number) {
    let charsList = []
    for (let i = 0; i < number; i++) {
        charsList.push(chars[Math.floor(Math.random()*chars.length)])
    }
    return charsList
}

//Impresion de caracter aleatorio
const caracteres = ['"', '#', '$', '%', '(', ')', '/', '&']
console.log(randomChars(caracteres, 4))
