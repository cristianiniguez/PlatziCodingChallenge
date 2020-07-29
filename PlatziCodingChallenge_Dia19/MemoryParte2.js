//Memory (parte 2) en JavaScript

class Memory {

    constructor() {
        this.chars = ['"', '#', '$', '%', '(', ')', '/', '&'] //8 caracteres
        this.numberChars = 4
        this.part1() //Muestra 4 caracteres entre los siguientes de forma aleatoria: "#$%()/&
        this.part2() //Lleva un registro del Orden en el que aparecieron los caracteres
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

}

//Inicia el juego
window.memory = new Memory()

