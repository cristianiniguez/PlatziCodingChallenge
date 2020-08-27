// Blackjack en JavaScript

const VALORES = {
  'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10
}

class Carta {
  constructor(tipo, numero) {
    this.tipo = tipo
    this.numero = numero
    this.valor = VALORES[this.numero]
  }
  texto() {
    return `${this.numero} de ${this.tipo}`
  }
}

class Blackjack {
  constructor() {
    /* Creamos y mezclamos la baraja */
    this.nuevaBaraja()
    this.mezclarBaraja()
    /* Cada jugador empieza con 2 cartas */
    this.cartasJugador = [this.baraja.shift(), this.baraja.shift()]
    this.cartasComputadora = [this.baraja.shift(), this.baraja.shift()]
    do {
      /* Imprimiendo cartas del jugador */
      alert(`Jugador: ${this.imprimirCartas(this.cartasJugador)}`)
      /* Calculando puntos del jugador */
      let puntosJugador = this.obtenerPuntos(this.cartasJugador)
      if (puntosJugador === 21) {
        return alert('Usted ganó el juego')
      } else if (puntosJugador > 21) {
        return alert('Usted perdió el juego')
      } else {
        /* Calculando puntos de la computadora */
        let puntosComputadora = this.obtenerPuntos(this.cartasComputadora)
        if (puntosComputadora === 21) {
          return alert(`Computadora: ${this.imprimirCartas(this.cartasComputadora)}\nLa computadora consiguió 21. Usted perdió el juego`)
        } else if (puntosComputadora > 21) {
          return alert(`Computadora: ${this.imprimirCartas(this.cartasComputadora)}\nLa computadora pasó los 21. Usted ganó el juego`)
        } else {
          /* Preguntando si se va a tomar otra carta */
          let otraCarta = prompt('¿Quiere tomar otra carta?(S/n)') === 'S'
          if (otraCarta) {
            this.cartasJugador.push(this.baraja.shift())
            this.cartasComputadora.push(this.baraja.shift())
          } else {
            /* Calculando puntos de ambos para ver quien ganó */
            let puntosJugador = this.obtenerPuntos(this.cartasJugador)
            let puntosComputadora = this.obtenerPuntos(this.cartasComputadora)
            if (puntosJugador < puntosComputadora) {
              return alert(`Jugador: ${this.imprimirCartas(this.cartasJugador)}\nComputadora: ${this.imprimirCartas(this.cartasComputadora)}\nUsted perdió el juego`)
            } else if (puntosJugador > puntosComputadora) {
              return alert(`Jugador: ${this.imprimirCartas(this.cartasJugador)}\nComputadora: ${this.imprimirCartas(this.cartasComputadora)}\nUsted ganó el juego`)
            } else {
              // verificar jerarquia
              alert(`Mismos puntos. Se verifica la jerarquia`)
              return alert(`Jugador: ${this.imprimirCartas(this.cartasJugador)}\nComputadora: ${this.imprimirCartas(this.cartasComputadora)}\n${this.verificarJerarquia()}`)
            }
          }
        }
      }
    } while (true);
  }
  nuevaBaraja() {
    let baraja = new Array()
    let tipos = ['corazones', 'espadas', 'treboles', 'dimantes']
    tipos.forEach(tipo => {
      baraja.push(new Carta(tipo, 'A'))
      for (let i = 2; i <= 10; i++) {
        baraja.push(new Carta(tipo, `${i}`))
      }
      baraja.push(new Carta(tipo, 'J'))
      baraja.push(new Carta(tipo, 'Q'))
      baraja.push(new Carta(tipo, 'K'))
    })
    this.baraja = baraja
  }
  mezclarBaraja() {
    let currentIndex = this.baraja.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = this.baraja[currentIndex]
      this.baraja[currentIndex] = this.baraja[randomIndex]
      this.baraja[randomIndex] = temporaryValue
    }
  }
  imprimirCartas(cartas) {
    return cartas.map(carta => carta.texto())
  }
  obtenerPuntos(cartas) {
    let puntos = 0
    cartas = cartas.sort((a, b) => b.valor - a.valor)
    /* Cuantas cartas A se tiene */
    let cartasA = this.cantidadCarta(cartas, 'A')
    /* Sumando puntos */
    cartas.forEach(carta => {
      if (carta.numero === 'A' && cartasA === 1 && puntos === 10) {
        puntos += 11
      } else {
        puntos += carta.valor
      }
    })
    return puntos
  }
  cantidadCarta(cartas, numero) {
    let cantidad = 0
    cartas.forEach(carta => {
      if (carta.numero === numero) {
        cantidad++
      }
    })
    return cantidad
  }
  verificarJerarquia(numero = 'K') {
    let cartasXJugador = this.cantidadCarta(this.cartasJugador, numero)
    let cartasXComputadora = this.cantidadCarta(this.cartasComputadora, numero)
    if (cartasXJugador > cartasXComputadora) {
      return 'Usted ganó el juego'
    } else if (cartasXJugador < cartasXComputadora) {
      return 'Usted perdió el juego'
    } else {
      switch (numero) {
        case 'K': return this.verificarJerarquia('Q')
        case 'Q': return this.verificarJerarquia('J')
        default: return 'Empate'
      }
    }
  }
}

const juego = new Blackjack()