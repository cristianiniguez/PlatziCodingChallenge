//Calculadora de Propina en JavaScript

//"values" es un Array
function tipCalculator(values, percentage) {
    let sumValues = values.reduce((a, c) => a + c)
    return sumValues * percentage
}

let valores = []
let i = 0
do {
    i++
    let valorPlatillo = parseFloat(prompt(`Platillo ${i}: ¿Cuánto valió?`))
    valores.push(valorPlatillo)
}while(prompt('¿Hay más platillos? (si/no)').toLowerCase() == 'si')

let porcentajePropina = parseFloat(prompt('¿Cuál será el procentaje de la propina? (1 - 100%)')) / 100
alert(`La propina es de ${tipCalculator(valores, porcentajePropina)}`)