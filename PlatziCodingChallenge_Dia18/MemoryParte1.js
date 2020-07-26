//Memory (parte 1) en JavaScript

//Funcion que devuelve un elemento aleatorio de un array
function randomChar(chars) {
    // const chars = ['"', '#', '$', '%', '(', ')', '/', '&']
    return chars[Math.floor(Math.random()*chars.length)]
}

//Impresion de caracter aleatorio
console.log(randomChar(['"', '#', '$', '%', '(', ')', '/', '&']))