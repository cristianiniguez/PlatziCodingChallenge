// Vacas y Toros en JavaScript

class VacasYToros {
  constructor() {
    this.generarNumeroSecreto()
    this.toros = 0
    this.vacas = 0
    while (this.vacas < 10) {
      this.pedirNumero()
      this.compararNumeros()
    }
    alert(`Resultado: ${this.vacas} vaca(s) y ${this.toros} toro(s)`)
  }
  generarNumeroSecreto() {
    let digitos = new Array()
    for (let i = 0; i < 4; i++) {
      const digito = Math.floor(Math.random() * 10)
      digitos.push(digito)
    }
    this.numeroSecreto = digitos
  }
  pedirNumero() {
    let numero, noEsValido
    do {
      numero = prompt("Introduzca un número de cuatro digitos")
      noEsValido = !numero || numero.length !== 4 || numero.split("").find((d) => isNaN(d))
      if (noEsValido) {
        alert("Debe introducir un número de 4 digitos")
      }
    } while (noEsValido)
    this.numeroUsuario = numero.split("").map(d => parseInt(d))
  }
  compararNumeros() {
    for (let i = 0; i < 4; i++) {
      if (this.numeroSecreto[i] === this.numeroUsuario[i]) {
        this.vacas++
      } else {
        this.toros++
      }
    }
    alert(`Usted tiene ${this.vacas} vaca(s) y ${this.toros} toro(s)`)
  }
}

const juego = new VacasYToros()