// Programar un elevador en JavaScript

// Estados de las tareas
const SIN_ATENDER = 0
const ATENDIDA = 1

// Direcciones del elevador
const HACIA_ARRIBA = 1
const HACIA_ABAJO = -1
const QUIETO = 0

class Elevador {
  constructor() {
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
    console.log(this)
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
    console.log(tareasFinalizadas)
    tareasFinalizadas.forEach(i => {
      this.tareas.splice(i, 1)
    })
    this.establecerDireccion()
    this.imprimirEstado()
    console.log(this)
    if (this.direccion !== QUIETO) {
      // Calculando tiempo de espera
      let delay = 2000 + (subidas > 0 ? 5000 : 0) + (bajadas > 0 ? 5000 : 0);
      setTimeout(this.mover, delay)
    }
  }
  imprimirEstado() {
    const $numerosPisos = document.querySelectorAll('.floor__elevator-number')
    $numerosPisos.forEach($np => {
      $np.innerText = this.piso
      $np.style.color = $np.id === `floor-${this.piso}` ? 'lime' : 'red'
    })
    document.getElementById('elevator-number').innerText = this.piso
    let $estado = document.getElementById('elevator-state')
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

const miElevador = new Elevador()

const $btnsUp = document.querySelectorAll('.fa-arrow-up')
const $btnsDown = document.querySelectorAll('.fa-arrow-down')

$btnsUp.forEach($btn => {
  $btn.addEventListener('click', obtenerTarea)
})
$btnsDown.forEach($btn => {
  $btn.addEventListener('click', obtenerTarea)
})
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
    miElevador.nuevaTarea(pisoInicial, pisoFinal)
  } else {
    alert('Piso final no válido')
  }
}

