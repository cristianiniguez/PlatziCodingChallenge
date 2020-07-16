//Número secreto en JavaScript
const SECRET_NUMBER = Math.floor(Math.random() * 100) + 1
let numberAttempts = 0

numberAttempts++
let number = parseInt(prompt('Estoy pensando en un número del 1 al 100 ¿Cuál es?'))
while (number != SECRET_NUMBER) {
    if(number > SECRET_NUMBER){
        numberAttempts++
        number = parseInt(prompt('Es un número más pequeño'))
    }else if(number < SECRET_NUMBER){
        numberAttempts++
        number = parseInt(prompt('Es un número más grande'))
    }
}
alert(`Felicidades, adivinaste mi número (${SECRET_NUMBER}) en ${numberAttempts} intento(s)`)