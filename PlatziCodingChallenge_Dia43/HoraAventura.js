// Hora de Aventura en JavaScript

class Character {
    constructor(name, attack, defense) {
        this.lifePoints = 10
        this.name = name
        this.attack = attack
        this.defense = defense
    }
}

class Fight {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        console.log(`Jugador 1: ${this.player1.name} (${this.player1.lifePoints} ptos) VS Jugador 2: ${this.player2.name} (${this.player1.lifePoints} ptos)`)
        this.turn = 1
        this.nextTurn()
    }
    nextTurn() {
        if (this.turn === 1) {
            console.log(`Turno de ${this.player1.name}`)
            let attack = this.player1.attack - this.player2.defense
            if (attack > 0) {
                this.player2.lifePoints -= attack
                console.log(`${this.player2.name} pierde ${attack} punto(s)`)
                console.log(`${this.player2.name} ahora tiene ${this.player2.lifePoints} punto(s)`)
            } else {
                console.log(`${this.player2.name} no pierde puntos`)
            }
            if (this.player2.lifePoints <= 0) {
                console.log(`Gana ${this.player1.name}`)
            } else {
                this.turn = 2
                this.nextTurn()
            }
        } else {
            console.log(`Turno de ${this.player2.name}`)
            let attack = this.player2.attack - this.player1.defense
            if (attack > 0) {
                this.player1.lifePoints -= attack
                console.log(`${this.player1.name} pierde ${attack} punto(s)`)
                console.log(`${this.player1.name} ahora tiene ${this.player1.lifePoints} punto(s)`)
            } else {
                console.log(`${this.player1.name} no pierde puntos`)
            }
            if (this.player1.lifePoints <= 0) {
                console.log(`Gana ${this.player2.name}`)
            } else {
                this.turn = 1
                this.nextTurn()
            }
        }
    }
}

const Avdol = new Character('Avdol, the Magician', 5, 2)
const Kakyoin = new Character('Kakyoin, the Hierophant', 4, 3)
const Polnareff = new Character('Polnareff, the Chariot', 4, 1)
const Joseph = new Character('Joseph, the Hermit', 2, 3)
const Jotaro = new Character('Jotaro, the Star', 5, 4)

const pelea1 = new Fight(Avdol, Kakyoin) // Gana Avdol, the Magician
const pelea2 = new Fight(Polnareff, Jotaro) // Gana Jotaro, the Star
const pelea3 = new Fight(Joseph, Avdol) // Gana Avdol, the Magician