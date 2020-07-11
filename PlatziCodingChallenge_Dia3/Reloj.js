//Reloj en JavaScript
function timeInSeconds(Hours, Minutes) {
    return (Hours * 3600) + (Minutes * 60)
}

var horas = prompt('Introduzca las horas')
var minutos = prompt('Introduzca los minutos')
alert(`Tiempo en segundos: ${timeInSeconds(horas, minutos)}`)