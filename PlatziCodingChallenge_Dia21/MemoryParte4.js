//Memory en JavaScript

class Memory {
    constructor() {
        this.chars = ['"', '#', '$', '%', '(', ')', '/', '&'] //8 caracteres
        this.numberChars = 4
        this.part1() //Muestra 4 caracteres entre los siguientes de forma aleatoria: "#$%()/&
        this.part2() //Lleva un registro del Orden en el que aparecieron los caracteres
        this.part3() //Dale al usuario un menú para que elija en el orden correcto los caracteres
        this.part4() //Evaluar si el orden del usuario fue el mismo mostrado por el programa y decirle si ganó o en caso contrario si perdió
    }
    part1() {
        this.charsList = []
        for (let i = 0; i < this.numberChars; i++) {
            let randomChar
            do {
                randomChar = this.chars[Math.floor(Math.random() * this.chars.length)]
            } while (this.charsList.includes(randomChar))
            this.charsList.push(randomChar)
        }
    }
    part2() {
        let message = (
            `Caracteres aleatorios:
            1. ${this.charsList[0]} 
            2. ${this.charsList[1]} 
            3. ${this.charsList[2]} 
            4. ${this.charsList[3]} 
            Acuérdate del orden`
        )
        alert(message)
    }
    part3() {
        let answer
        do {
            let message = (
                `Lista de caracteres:
                0. ${this.chars[0]}     1. ${this.chars[1]}
                2. ${this.chars[2]}     3. ${this.chars[3]}
                4. ${this.chars[4]}     5. ${this.chars[5]}
                6. ${this.chars[6]}     7. ${this.chars[7]}
                Introduce los números correspondientes al orden de los caracteres anteriores
                Ejemplo: #$%( = 1234`
            )
            answer = prompt(message).split('')
            if (answer.length != this.numberChars) alert('Debes ingresar 4 números. Intenta otra vez')
        } while (answer.length != this.numberChars)
        this.answerChars = answer.map(number => this.chars[number])
    }
    part4() {
        if (this.answerChars.toString() === this.charsList.toString()) {
            alert('Felicidades, escribiste el orden correcto')
        } else {
            alert('Lo siento, ese no es el orden correcto')
        }
    }
}

//Inicia el juego
window.memory = new Memory()