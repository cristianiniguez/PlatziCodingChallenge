// Escalando nuestro piedra papel o tijera en JavaScript

class PPT {
  constructor(games) {
    this.player1 = { score: 0 }
    this.player2 = { score: 0 }
    for (let g = 0; g < games; g++) {
      this.newGame(g)
    }
    this.printResults()
  }
  newGame(g) {
    alert('Juego ' + (g + 1))
    this.player1.choice = prompt('Jugador 1: ¿Piedra, papel o tijeras?').toLowerCase()
    this.player2.choice = prompt('Jugador 2: ¿Piedra, papel o tijeras?').toLowerCase()
    const winner = this.getWinner(this.player1.choice, this.player2.choice)
    if (winner !== 0) {
      alert(`${this.player1.choice} vs ${this.player2.choice}: Gana Jugador ${winner}`)
      this[`player${winner}`].score++
    } else {
      alert(`${this.player1.choice} vs ${this.player2.choice}: No hay ganador`)
    }
  }
  getWinner(choice1, choice2) {
    switch (choice1) {
      case 'piedra':
        switch (choice2) {
          case 'piedra': return 0
          case 'papel': return 2
          case 'tijeras': return 1
          default: return 0
        }
      case 'papel':
        switch (choice2) {
          case 'piedra': return 1
          case 'papel': return 0
          case 'tijeras': return 2
          default: return 0
        }
      case 'tijeras':
        switch (choice2) {
          case 'piedra': return 2
          case 'papel': return 1
          case 'tijeras': return 0
          default: return 0
        }
      default: return 0
    }
  }
  printResults() {
    let message = `Jugador 1: ${this.player1.score} puntos\nJugador 2: ${this.player2.score} puntos\n`
    if (this.player1.score > this.player2.score) {
      message += 'Gana Jugador 1'
    } else if (this.player1.score < this.player2.score) {
      message += 'Gana Jugador 2'
    } else {
      message += 'Empate'
    }
    alert(message)
  }
}

try {
  const numJuegos = parseInt(prompt('¿Cuántas veces van a jugar?'))
  if (numJuegos > 0) {
    const Juego = new PPT(numJuegos)
  } else {
    alert('Debes introducir un número mayor que 0')
  }
} catch (error) {
  alert('Debes introducir un número mayor que 0')
}