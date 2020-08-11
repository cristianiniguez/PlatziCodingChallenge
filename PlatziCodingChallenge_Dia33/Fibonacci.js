// Fibonacci de 10 000 en JavaScript

function F(n, memory = {}) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        if (memory[n] !== undefined) {
            return memory[n]
        } else {
            let result = F(n - 1, memory) + F(n - 2, memory)
            memory[n] = result
            return result
        }
    }
}

console.log(F(5)) // 5
console.log(F(50)) // 12586269025
console.log(F(78)) // 8944394323791464
console.log(F(79)) // 14472334024676220 (diferente al resultado en Python)
console.log(F(100)) // 354224848179262000000
console.log(F(1000)) // 4.346655768693743e+208
console.log(F(1476)) // 1.3069892237633987e+308
console.log(F(1477)) // Infinity