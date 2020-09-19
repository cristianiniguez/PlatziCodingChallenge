// Calculador de combinaciones en JavaScript

function factorial(x) {
  if (x <= 1) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}

function nCr(n, r) {
  if (n < r) {
    return '"n" no puede ser menor que "r"'
  } else {
    return factorial(n) / (factorial(n - r) * factorial(r))
  }
}

console.log(nCr(4, 2)) // 6
console.log(nCr(9, 6)) // 84
console.log(nCr(5, 7)) // "n" no puede ser menor que "r"