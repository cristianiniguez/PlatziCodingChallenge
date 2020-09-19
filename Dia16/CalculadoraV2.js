//Calculadora v2 en JavaScript
const add = numbers => numbers.reduce((a, b) => a + b)
const multiply = numbers => numbers.reduce((a, b) => a * b)

let numeros = []
do {
    numeros.push(parseFloat(prompt('Introduzca un número')))
}while(prompt('¿Hay más números? (si/no)').toLowerCase() === 'si')

const operacion = prompt('¿Que operación quiere hacer? (sumar/multiplicar)').toLowerCase()
switch(operacion){
    case 'sumar':
        alert(`La suma de los números es ${add(numeros)}`)
        break
    case 'multiplicar':
        alert(`El producto de los números es ${multiply(numeros)}`)
        break
    default:
        alert('No conozco esa operación')
}