// Suma Recursiva en JavaScript

function sumaRecursiva(suma = 0) {
    const numero = parseFloat(prompt('Introduzca un número (0 o nada para terminar)'))
    if (numero === 0 || isNaN(numero)) {
        return suma
    } else {
        suma += numero
        return sumaRecursiva(suma)
    }
}

const suma = sumaRecursiva()
alert(`La suma de todos sus números es ${suma}`)