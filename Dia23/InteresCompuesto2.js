//¿Puedo ahorrar otros periodos de tiempo? en JavaScript

function finalAmount(capital, time, rate) {
    return capital * Math.pow(1 + rate, time) //C = c(1 + r)^t
}

//Pedido de datos
const capital = 1000
const tiempo = parseInt(prompt('¿Por cuantos meses vas a ahorrar?'))
const interes = 4/100 //4%
alert(`En ${tiempo} mes(es) vas a ahorrar $${finalAmount(capital, tiempo, interes).toFixed(2)}`)