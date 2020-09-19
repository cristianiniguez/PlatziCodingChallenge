//Traductor de Pig Latin en JavaScript
const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']

function traductorPigLatin(palabra){
    let primeraLetra = palabra.charAt(0)
    if(vocales.includes(primeraLetra)){
        return `${palabra}way`
    } else {
        let letras = palabra.split('')
        let posPrimeraVocal = 0
        for (const i of letras) {
            if (vocales.includes(i)) {
                posPrimeraVocal = palabra.indexOf(i)
                break
            }
        }
        let primerasConsonantes = palabra.substr(0, posPrimeraVocal)
        let resto = palabra.substr(posPrimeraVocal)
        return `${resto}${primerasConsonantes}ay`
    }
}

const palabra = prompt('¿Qué palabra quiere traducir?')
alert(`Palabra traducida: ${traductorPigLatin(palabra)}`)