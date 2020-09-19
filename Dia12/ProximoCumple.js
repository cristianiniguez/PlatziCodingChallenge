//Proximo cumpleaños en JavaScript

const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24

function daysTillBirthday(birthDay, birthMonth) {
    let today = new Date()
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay)
    let timeLeft = nextBirthday.getTime() - today.getTime()
    if(timeLeft < 0){
        nextBirthday = new Date(today.getFullYear() + 1, birthMonth, birthDay)
        timeLeft = nextBirthday.getTime() - today.getTime()
    }
    return Math.floor(timeLeft / MILISECONDS_PER_DAY)
}

function numeroMes(strMes) {
    switch(strMes){
        case 'enero': return 0
        case 'febrero': return 1
        case 'marzo': return 2
        case 'abril': return 3
        case 'mayo': return 4
        case 'junio': return 5
        case 'julio': return 6
        case 'agosto': return 7
        case 'septiembre': return 8
        case 'octubre': return 9
        case 'noviembre': return 10
        case 'diciembre': return 11
        default: return NaN
    }
}

//Prueba
let diaNacimiento = parseInt(prompt('Introduzca su día de nacimiento'))
let mesNacimiento = numeroMes(prompt('Introduzca su mes de nacimiento').toLowerCase()) //Convierte fecha de texto a número
let diasRestantes = daysTillBirthday(diaNacimiento, mesNacimiento)
alert(diasRestantes == 0 ? `Feliz cumpleaños` : `Faltan ${diasRestantes} día(s) para tu cumpleaños`)
