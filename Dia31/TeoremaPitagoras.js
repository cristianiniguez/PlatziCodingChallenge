// Teorema de Pitágoras en JavaScript

// Función que calcula la distancia entre dos puntos
function distance(pointA, pointB) {
    return Math.sqrt(Math.pow((pointB.x - pointA.x), 2) + Math.pow((pointB.y - pointA.y), 2))
}

// Datos
const puntoA = {
    x: 3,
    y: 4
}
const puntoB = {
    x: 5,
    y: 7
}

// Ejecutando la función
console.log(distance(puntoA, puntoB).toFixed(6)) // 3.605551