//Eliminar vocales en JS
function removeVowels(text) {
    let vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]
    vowels.forEach(element => {
        while (text.includes(element)) {
            text = text.replace(element,"")
        }
        while (text.includes(element.toUpperCase())){
            text = text.replace(element.toUpperCase(),"")
        }
    });
    return text
}

let texto = prompt('Introduzca el texto para quitarle las vocales')
alert(removeVowels(texto))