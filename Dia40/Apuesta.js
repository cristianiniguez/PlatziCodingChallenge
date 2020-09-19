// ¿Te conviene esta apuesta? en JavaScript

class Apuesta {
    constructor(numero, limiteInferior, limiteSuperior) {
        this.numero = numero
        this.limInf = limiteInferior
        this.limSup = limiteSuperior
        this.opciones = new Array()
        for (let i = this.limInf; i <= this.limSup; i++) {
            this.opciones.push(i)
        }
        this.dinero = 4
        this.adivinar() // Esto hace la búsqueda binaria
        this.resultadoJuego()
    }
    adivinar() {
        console.log(`Escogiste el número ${this.numero}`)
        let adivino = false
        let intento = 1
        while (!adivino) {
            let resultados = this.XIntento(intento) // resultados de la búsqueda 'x'
            if (resultados.numerosBuenos.indexOf(this.numero) !== -1) {
                console.log(`Intento #${intento} - Ganaste: los números buenos eran ${resultados.numerosBuenos}`)
                adivino = true
            } else {
                console.log(`Intento #${intento} - Fallaste: los números buenos eran ${resultados.numerosBuenos}`)
                this.dinero--
                intento++
            }
        }
    }
    resultadoJuego() {
        if (this.dinero > 0) {
            console.log(`Ganaste $${this.dinero}`)
        } else if (this.dinero == 0) {
            console.log(`No ganaste ni perdiste nada`)
        } else {
            console.log(`Perdiste $${this.dinero * -1}`)
        }
    }
    XIntento(x) {
        if (x === 1) {
            return {
                numerosBuenos: [this.elementoMedio(this.opciones)],
                antiguosGrupos: [this.opciones],
                nuevosGrupos: [
                    this.opciones.slice(0, this.indiceElementoMedio(this.opciones)),
                    this.opciones.slice(this.indiceElementoMedio(this.opciones) + 1),
                ]
            }
        } else {
            const intentoAnterior = this.XIntento(x - 1)
            return {
                numerosBuenos: intentoAnterior.nuevosGrupos.map(grupo => this.elementoMedio(grupo)),
                antiguosGrupos: intentoAnterior.nuevosGrupos,
                nuevosGrupos: intentoAnterior.nuevosGrupos.map(grupo => [
                    grupo.slice(0, this.indiceElementoMedio(grupo)),
                    grupo.slice(this.indiceElementoMedio(grupo) + 1)
                ]).flat()
            }
        }
    }
    elementoMedio(arreglo) {
        const indiceElementoMedio = this.indiceElementoMedio(arreglo)
        return arreglo[indiceElementoMedio]
    }
    indiceElementoMedio(arreglo) {
        return Math.floor((arreglo.length / 2))
    }
}

// Voy a adivinar el 12 entre el 0 y el 100
const apuesta1 = new Apuesta(12, 0, 100)
// Escogiste el número 12
// Intento #1 - Fallaste: los números buenos eran 50
// Intento #2 - Fallaste: los números buenos eran 25,76
// Intento #3 - Ganaste: los números buenos eran 12,38,63,89
// Ganaste $2

// Voy a adivinar el 46 entre el 0 y el 100
const apuesta2 = new Apuesta(46, 0, 100)
// Escogiste el número 46
// Intento #1 - Fallaste: los números buenos eran 50
// Intento #2 - Fallaste: los números buenos eran 25,76
// Intento #3 - Fallaste: los números buenos eran 12,38,63,89
// Intento #4 - Fallaste: los números buenos eran 6,19,32,44,57,70,83,95
// Intento #5 - Fallaste: los números buenos eran 3,9,16,22,29,35,41,47,54,60,67,73,80,86,92,98
// Intento #6 - Ganaste: los números buenos eran 1,5,8,11,14,18,21,24,27,31,34,37,40,43,46,49,52,56,59,62,65,69,72,75,78,82,85,88,91,94,97,100
// Perdiste $1