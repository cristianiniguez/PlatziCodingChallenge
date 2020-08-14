// Juego de Dados en JavaScript

class DicesGame {
    constructor() {
        this.player1_score = this.throwDices() // Turno jugador 1
        this.player2_score = this.throwDices() // Turno jugador 2
        this.player3_score = this.throwDices() // Turno jugador 3
    }
    throwDices() {
        let score = 0
        for (let d = 0; d < 2; d++) {
            score += Math.ceil(Math.random() * 6)
        }
        return score
    }
    getResults() {
        let gameResult = ''
        if (this.player1_score === this.player2_score) {
            if (this.player1_score === this.player3_score) {
                gameResult = 'Empate: Todos'
            } else if (this.player1_score > this.player3_score) {
                gameResult = 'Empate: Jugadores 1 y 2'
            } else if (this.player1_score < this.player3_score) {
                gameResult = 'Gana: Jugador 3'
            }
        } else if (this.player1_score > this.player2_score) {
            if (this.player1_score === this.player3_score) {
                gameResult = 'Empate: Jugadores 1 y 3'
            } else if (this.player1_score > this.player3_score) {
                gameResult = 'Gana: Jugador 1'
            } else if (this.player1_score < this.player3_score) {
                gameResult = 'Gana: Jugador 3'
            }
        } else if (this.player1_score < this.player2_score) {
            if (this.player2_score === this.player3_score) {
                gameResult = 'Empate: Jugadores 2 y 3'
            } else if (this.player2_score > this.player3_score) {
                gameResult = 'Gana: Jugador 2'
            } else if (this.player2_score < this.player3_score) {
                gameResult = 'Gana: Jugador 3'
            }
        }
        console.log(`
            Puntajes:
            Jugador 1: ${this.player1_score},
            Jugador 2: ${this.player2_score},
            Jugador 3: ${this.player3_score},
            ${gameResult}
        `)
    }
}

const juego = new DicesGame()
juego.getResults()
// Puntajes:
// Jugador 1: 11,
// Jugador 2: 4,
// Jugador 3: 4,
// Gana: Jugador 1
