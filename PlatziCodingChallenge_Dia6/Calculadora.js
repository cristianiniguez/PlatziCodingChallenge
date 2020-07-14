//Calculadora en JS
function calculator(number1, number2, operator) {
    switch (operator) {
        case "+":
            return number1 + number2
        case "-":
            return number1 - number2
        case "*":
            return number1 * number2
        case "/":
            return number1 / number2
        default:
            return "Error"
    }
}

let numero1 = parseFloat(prompt('Introduzca el numero 1'))
let numero2 = parseFloat(prompt('Introduzca el numero 2'))
let operador = prompt(`Introduzca el operador (+, -, *, /)`)

let resultado = calculator(numero1, numero2, operador)
let mensaje_salida = resultado != "Error"
                                ? `${numero1} ${operador} ${numero2} = ${resultado}`
                                : `Hubo un error`
alert(mensaje_salida)