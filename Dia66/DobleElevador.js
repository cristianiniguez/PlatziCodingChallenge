// Doble elevador en JavaScript

// Estados de las tareas
const SIN_ATENDER = 0
const ATENDIDA = 1

// Direcciones del elevador
const HACIA_ARRIBA = 1
const HACIA_ABAJO = -1
const QUIETO = 0

class Elevador {
  constructor($info, $numbers) {
    this.$info = $info
    this.$numbers = $numbers

    this.mover = this.mover.bind(this)
    this.piso = 0
    this.direccion = QUIETO
    this.tareas = new Array()
    this.imprimirEstado()
  }
  nuevaTarea(pisoInicial, pisoFinal) {
    this.tareas.push({ pisoInicial, pisoFinal, estado: SIN_ATENDER })
    if (this.direccion === QUIETO) { // El elevador está quieto?
      this.manejarPiso()
    }
  }
  establecerDireccion() {
    if (this.hayTareasArriba()) {
      this.direccion = HACIA_ARRIBA
    } else if (this.hayTareasAbajo()) {
      this.direccion = HACIA_ABAJO
    } else {
      this.direccion = QUIETO
    }
  }
  mover() {
    switch (this.direccion) { // Moviendome un piso hacia arriba o hacia abajo
      case HACIA_ARRIBA: this.piso++; break;
      case HACIA_ABAJO: this.piso--; break;
      default: 'Algo anda mal'
    }
    this.manejarPiso()
  }
  manejarPiso() {
    let tareasFinalizadas = new Array()
    let subidas = 0, bajadas = 0
    for (let i = 0; i < this.tareas.length; i++) { // Para cada tarea
      const tarea = this.tareas[i];
      if (tarea.pisoInicial === this.piso && tarea.estado === SIN_ATENDER) { // Si hay gente subiendo
        tarea.estado = ATENDIDA
        subidas++
      }
      if (tarea.pisoFinal === this.piso && tarea.estado === ATENDIDA) { // Si hay gente bajando
        tareasFinalizadas.push(i)
        bajadas++
      }
    }
    // Eliminando bajadas
    tareasFinalizadas.forEach(i => {
      this.tareas.splice(i, 1)
    })
    this.establecerDireccion()
    this.imprimirEstado()
    if (this.direccion !== QUIETO) {
      // Calculando tiempo de espera
      let delay = 2000 + (subidas > 0 ? 5000 : 0) + (bajadas > 0 ? 5000 : 0);
      setTimeout(this.mover, delay)
    }
  }
  imprimirEstado() {
    this.$numbers.forEach($np => {
      $np.innerText = this.piso
      $np.style.color = $np.id === `floor-${this.piso}` ? 'lime' : 'red'
    })
    this.$info.querySelector('#elevator-number').innerText = this.piso
    let $estado = this.$info.querySelector('#elevator-state')
    switch (this.direccion) {
      case QUIETO: $estado.innerText = 'Quieto'; break;
      case HACIA_ARRIBA: $estado.innerText = 'Hacia arriba'; break;
      case HACIA_ABAJO: $estado.innerText = 'Hacia abajo'; break;
    }
  }
  hayTareasArriba() {
    return this.tareas.some(tarea => (
      (tarea.pisoInicial >= this.piso && tarea.estado === SIN_ATENDER)
      || (tarea.pisoFinal > this.piso && tarea.estado === ATENDIDA)
    ))
  }
  hayTareasAbajo() {
    return this.tareas.some(tarea => (
      (tarea.pisoInicial <= this.piso && tarea.estado === SIN_ATENDER)
      || (tarea.pisoFinal < this.piso && tarea.estado === ATENDIDA)
    ))
  }
}

// Cuadros de información y numeros de los elevadores
const $infoElevador1 = document.getElementById('info-elevator-1')
const $infoElevador2 = document.getElementById('info-elevator-2')
const $numbersElevador1 = document.querySelectorAll('.floor__elevator1-number')
const $numbersElevador2 = document.querySelectorAll('.floor__elevator2-number')

// Creación de los 2 elevadores
const elevador1 = new Elevador($infoElevador1, $numbersElevador1)
const elevador2 = new Elevador($infoElevador2, $numbersElevador2)

// Botones de los ascensores
const $btnsUp = document.querySelectorAll('.fa-arrow-up')
const $btnsDown = document.querySelectorAll('.fa-arrow-down')

$btnsUp.forEach($btn => { $btn.addEventListener('click', obtenerTarea) })
$btnsDown.forEach($btn => { $btn.addEventListener('click', obtenerTarea) })

function obtenerTarea(e) {
  let pisoInicial = parseInt(e.target.dataset.piso)
  let direccion = parseInt(e.target.dataset.direccion)
  let destinos = new Array()
  switch (direccion) {
    case 1:
      for (let i = pisoInicial + 1; i <= 9; i++) {
        destinos.push(i)
      }
      break;
    case -1:
      for (let i = 0; i <= pisoInicial - 1; i++) {
        destinos.push(i)
      }
      break;
  }
  let pisoFinal = parseInt(prompt(`¿A qué piso quiere ir?\n${destinos}`))
  if (destinos.some(d => d === pisoFinal)) {
    const elevador = escogerElevador(pisoInicial)
    elevador.nuevaTarea(pisoInicial, pisoFinal)
  } else {
    alert('Piso final no válido')
  }
}

function escogerElevador(pisoInicial) {
  const elevadores = [elevador1, elevador2]
  let elevEscogido
  // Qué elevador está quieto
  elevEscogido = elevadores.find(elev => elev.direccion === QUIETO)
  if (elevEscogido) { return elevEscogido }
  // Qué elevador está mas cerca de pasar por el piso
  elevEscogido = elevadores.find(elev => (
    (elev.piso > pisoInicial && elev.direccion === HACIA_ABAJO)
    || (elev.piso < pisoInicial && elev.direccion === HACIA_ARRIBA)
    || (elev.piso === pisoInicial)
  ))
  if (elevEscogido) { return elevEscogido }
  // Al final
  return elevadores[0]
}
