// Limitar el peso y cantidad de personas en JavaScript

// Estados de las tareas
const SIN_ATENDER = 0
const ATENDIDA = 1

// Direcciones del elevador
const HACIA_ARRIBA = 1
const HACIA_ABAJO = -1
const QUIETO = 0

class Elevador {
  constructor() {
    this.maxPersonas = 8
    this.maxPeso = 500
    this.peso = 0
    this.personas = 0
    this.mover = this.mover.bind(this)
    this.piso = 0
    this.direccion = QUIETO
    this.tareas = new Array()
    this.imprimirEstado()
  }
  nuevaTarea(personas, peso, pisoInicial, pisoFinal) {
    if (this.peso + peso <= this.maxPeso && this.personas + personas <= this.maxPersonas) { // Nueva línea
      this.tareas.push({ pisoInicial, pisoFinal, personas, peso, estado: SIN_ATENDER })
      if (this.direccion === QUIETO) {
        this.manejarPiso()
      }
    } else {
      alert('El ascensor está muy lleno')
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
    switch (this.direccion) {
      case HACIA_ARRIBA: this.piso++; break;
      case HACIA_ABAJO: this.piso--; break;
      default: 'Algo anda mal'
    }
    this.manejarPiso()
  }
  manejarPiso() {
    let tareasFinalizadas = new Array()
    let subidas = 0, bajadas = 0
    for (let i = 0; i < this.tareas.length; i++) {
      const tarea = this.tareas[i];
      if (tarea.pisoInicial === this.piso && tarea.estado === SIN_ATENDER) {
        this.personas += tarea.personas // Nueva línea
        this.peso += tarea.peso // Nueva línea
        tarea.estado = ATENDIDA
        subidas++
      }
      if (tarea.pisoFinal === this.piso && tarea.estado === ATENDIDA) {
        tareasFinalizadas.push(i)
        bajadas++
      }
    }
    tareasFinalizadas.forEach(i => {
      this.personas -= this.tareas[i].personas // Nueva línea
      this.peso -= this.tareas[i].peso // Nueva línea
      this.tareas.splice(i, 1)
    })
    this.establecerDireccion()
    this.imprimirEstado()
    if (this.direccion !== QUIETO) {
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
  let personas = parseInt(prompt('¿Cuántas personas van a subir?')) // Nueva línea
  let peso = parseFloat(prompt('¿Cuánto es el peso total?')) // Nueva línea
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
    miElevador.nuevaTarea(personas, peso, pisoInicial, pisoFinal) // Línea modificada
  } else {
    alert('Piso final no válido')
  }
}

