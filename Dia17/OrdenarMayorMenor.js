//Ordenar una lista de números de mayor a menor en javaScript

//Funcion para ordenar una lista de números de mayor a menor
function sortHL(numbers) {
    numbers.sort((a, b) => b - a)
    return numbers
}

//Pedido de datos
const cantidad = parseInt(prompt('¿Cuántos números quiere ordenar de mayor a menor?'))
const numeros = []
for (let i = 0; i < cantidad; i++) {
    numeros.push(parseFloat(prompt(`Introduzca el número (${i+1}/${cantidad})`)));
}

//Impresion de resultado
alert(`Números ordenados: ${numeros}`)