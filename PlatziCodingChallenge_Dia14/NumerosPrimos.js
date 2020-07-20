//Números primos en JS

function isPrime(number){
    for (let divider = 2; divider < Math.floor(Math.sqrt(number)) + 1; divider++) {
        if (number % divider == 0) {
            return false
        }
    }
    return true
}

function primeNumbers(limit){
    let primes = []
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            primes.push(number)
        }
    }
    return primes
}

do {
    var limite = parseInt(prompt('¿Hasta qué número quiere saber los primos?'))
    if (limite < 2) alert('Debe introducir un número igual o mayor que 2')
} while (limite < 2)

alert(`Números primos menores que ${limite}: ${primeNumbers(limite)}`)