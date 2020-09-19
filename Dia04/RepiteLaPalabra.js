//Repite la palabra en JS
function repeat(word, times) {
    if(times <= 1){
        return word
    } else {
        return word + repeat(word, times - 1)
    }
}

var palabra = prompt('¿Qué palabra quiere repetir?')
var veces = parseInt(prompt('¿Cuántas veces quiere repetirla?'), 10)
alert(repeat(palabra, veces))