// Torre de Jenga Aleatoria en JavaScript

const $jengaContainer = document.querySelector('.jenga-container')

const $messageBox = document.querySelector('.message-box')

let juegoJenga

$messageBox.addEventListener('click', iniciar)

function iniciar() {
  let numPisos = parseInt(prompt('¿Cuántos pisos quieres?'))
  if (isNaN(numPisos) || numPisos <= 0) {
    alert('Debes ingresar un número mayor que 0')
  } else {
    juegoJenga = new TorreJenga(numPisos)
    $messageBox.removeEventListener('click', iniciar)
    $messageBox.innerHTML = 'Piezas sacadas: <span id="num-intentos">0</span>'
  }
}

function arraysIguales(array1, array2) {
  if (array1.length === array2.length) {
    return array1.every((el, i) => el === array2[i])
  } else {
    return false
  }
}

function eventoClickPiezas() {
  const $piezas = document.querySelectorAll('.pieza')
  $piezas.forEach(pieza => {
    pieza.addEventListener('click', e => {
      const { piso, lugar, lleno } = e.target.dataset
      if (lleno) {
        if (!juegoJenga.moverPieza(piso, lugar)) {
          juegoJenga = null
          $jengaContainer.innerHTML = ''
          $messageBox.addEventListener('click', iniciar)
          $messageBox.innerHTML = 'Inicar Juego'
        }
      } else {
        alert('No hay pieza ahí')
      }
    })
  })
}

class TorreJenga {
  constructor(pisos) {
    this.crearTorre(pisos)
    this.jugadas = 0
    this.dibujarTorre()
  }
  crearTorre(pisos) {
    this.pisos = new Array()
    for (let i = 0; i < pisos; i++) {
      this.pisos.push([1, 1, 1])
    }
  }
  dibujarTorre() {
    $jengaContainer.innerHTML = ''
    this.pisos.forEach((piso, i) => {
      let caraPiezasHTML = `
        <div class="cara-piezas">
          <div class="pieza" data-piso=${i} data-lugar=${0} data-lleno=${piso[0] === 1}>I</div>
          <div class="pieza" data-piso=${i} data-lugar=${1} data-lleno=${piso[1] === 1}>C</div>
          <div class="pieza" data-piso=${i} data-lugar=${2} data-lleno=${piso[2] === 1}>D</div>
        </div>
      `
      let caraLadoHTML = `
        <div class="cara-lado">
          <div class="lado">${i}</div>
        </div>
      `
      let pisoHTML = i % 2 == 0
        ? `<div class="piso">${caraPiezasHTML}${caraLadoHTML}</div>`
        : `<div class="piso">${caraLadoHTML}${caraPiezasHTML}</div>`
      $jengaContainer.innerHTML = pisoHTML + $jengaContainer.innerHTML
      eventoClickPiezas()
    })
  }
  moverPieza(piso, lugar) {
    if (piso < this.pisos.length - 1) { // Las piezas del último piso no se pueden mover
      this.pisos[piso][lugar] = 0 // Dejando vacío el lugar donde estaba esa pieza
      const ultimoPiso = this.pisos[this.pisos.length - 1]
      if (arraysIguales(ultimoPiso, [1, 1, 1])) { // Modificando o agregando el último piso
        this.pisos.push([1, 0, 0])
      } else if (arraysIguales(ultimoPiso, [1, 1, 0])) {
        this.pisos[this.pisos.length - 1] = [1, 1, 1]
      } else if (arraysIguales(ultimoPiso, [1, 0, 0])) {
        this.pisos[this.pisos.length - 1] = [1, 1, 0]
      }
      if (!this.seCae()) { // Calculando si se cae
        this.jugadas++
        this.imprimirJugadas()
        this.dibujarTorre()
        return true
      } else {
        alert('La torre se cayó. Fin del juego')
        return false
      }
    } else {
      alert('No se puede mover una pieza del último piso')
      return true
    }
  }
  seCae() {
    const prob = this.probabilidadDeNoCaerse()
    return Math.random() > prob
  }
  probabilidadDeNoCaerse() {
    let vacios = [
      [0, 0, 0], // Lado 0 (Izq) -> [Izq, Cen, Der]
      [0, 0, 0] // Lado 1 (Der) -> [Izq, Cen, Der]
    ]
    for (let i = 0; i < this.pisos.length - 1; i++) { // Por cada piso (menos el último)
      const piso = this.pisos[i];
      if (piso.filter(pieza => pieza === 1).length === 1 && !arraysIguales(piso, [0, 1, 0])) {
        return 0
      }
      piso.forEach((pieza, j) => { // Por cada pieza
        if (pieza === 0) { // Si no hay pieza
          vacios[i % 2][j]++
        }
      })
    }
    // Calculando la probabilidad de no caerse
    return vacios.map(lado => 1 - (Math.abs(lado[0] - lado[2]) / this.pisos.length)).reduce((a, b) => a * b)
  }
  imprimirJugadas() {
    const $spanIntentos = document.querySelector('#num-intentos')
    $spanIntentos.innerHTML = this.jugadas
  }
}
