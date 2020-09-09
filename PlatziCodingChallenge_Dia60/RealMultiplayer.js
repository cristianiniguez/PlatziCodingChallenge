// Real Multiplayer en JavaScript

const PIEDRA = 1
const PAPEL = 2
const TIJERAS = 3

class PPT_Multiplayer {
  constructor(numPlayers) {
    this.initPlayers(numPlayers) // Se crean los jugadores
    this.currentGame = 0
    while (this.players.length > 1) { // Se toman turnos mientras hayan más de 1 jugador
      this.currentGame++
      alert('Juego ' + this.currentGame)
      this.getChoices() // Se obtienen las elecciones de los jugadores
      let losers = this.getLosers() // Se obtienen los jugadores que perdieron (los perdedores se eliminan)
      if (losers.length > 0) {
        alert(`Perdieron: ${losers.map(p => p.name).join(', ')}`)
      } else {
        alert(`No perdió nadie`)
      }
    }
    alert('Gana ' + this.players[0].name) // Se dice quien ganó
  }
  initPlayers(numPlayers) {
    this.players = new Array()
    for (let p = 0; p < numPlayers; p++) {
      this.players.push({
        name: 'Jugador ' + (p + 1)
      })
    }
  }
  getChoices() {
    this.players.forEach(p => {
      let choice
      do {
        choice = parseInt(prompt(`${p.name}: ¿Piedra(1) Papel(2) o Tijera(3)`))
        if (choice < 1 || choice > 3 || isNaN(choice)) {
          alert(`${p.name}: Debe escoger un número entre 1 y 3`)
        }
      } while (choice < 1 || choice > 3 || isNaN(choice));
      p.choice = choice
    })
  }
  getLosers() {
    let losers = new Array()
    // Se obtienen las opciones escogidas entre todos
    let choices = Array.from(new Set(this.players.map(player => player.choice)))
    if (choices.length === 2) { // Si se escogieron entre 2 opciones
      let winnerChoice = this.getWinnerChoice(choices) // Se busca la opción ganadora (Reto 58)
      this.players.forEach(p => { // Se buscan los jugadores que perdieron
        if(p.choice !== winnerChoice) {
          losers.push(p)
        }
      })
      losers.forEach(p => { // Se eliminan los perdedores
        this.players.splice(this.players.indexOf(p), 1)
      })
    }
    return losers
  }
  getWinnerChoice(choices) { // Reto 58 (no permite empates)
    switch (choices[0]) {
      case PIEDRA:
        switch (choices[1]) {
          case PAPEL: return choices[1]
          case TIJERAS: return choices[0]
        }
      case PAPEL:
        switch (choices[1]) {
          case PIEDRA: return choices[0]
          case TIJERAS: return choices[1]
        }
      case TIJERAS:
        switch (choices[1]) {
          case PIEDRA: return choices[1]
          case PAPEL: return choices[0]
        }
    }
  }
}

const Juego = new PPT_Multiplayer(3)