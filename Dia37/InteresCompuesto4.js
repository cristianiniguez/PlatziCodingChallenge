// ¿Qué pasaría sí? en JavaScript

function finalAmount(capital, time, rate) {
    return capital * Math.pow(1 + rate, time) //C = c(1 + r)^t
}

// Pedido de datos
const capital = parseFloat(prompt('¿Cuánto vas a ahorrar en este mes?'))
const tiempo = parseInt(prompt('¿Por cuantos meses?'))
const interes = parseFloat(prompt('¿Cuanto es el interes mensual (0 - 100%)'))/100
alert(`En ${tiempo} mes(es) vas a ahorrar $${finalAmount(capital, tiempo, interes).toFixed(2)}`)