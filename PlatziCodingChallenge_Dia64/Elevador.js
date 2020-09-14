// Programar un elevador en JavaScript

class Elevador {
  constructor() {
    this.posicion = 0
    this.direccion = 0 // 1 -> Arriba, -1 -> Abajo, 0 -> Quieto
    this.tareas = new Array()
    this.imprimirPosicion()
  }
  nuevaTarea(pisoInicial, pisoFinal) {
    this.tareas.push({ pisoInicial, pisoFinal })
    this.mover()
  }
  mover() {
    if (direccion !== 0) { // Me estaba moviendo?
      switch (this.direccion) { // Hacia dónde?
        case 1:
          // Hay más tareas adelante?
          if (this.tareas.some(tarea => tarea.pisoInicial > this.posicion || tarea.pisoFinal > this.posicion)) {
            // Seguiré subiendo
          } else {
            // Hay tareas atrás?
            if (this.tareas.some(tarea => tarea.pisoInicial < this.posicion || tarea.pisoFinal < this.posicion)) {
              // Iré hacia abajo entonces
            } else {
              // Me quedaré quieto
            }
          }
          break;
        case -1:
          // Hay más tareas atrás?
          if (this.tareas.some(tarea => tarea.pisoInicial < this.posicion || tarea.pisoFinal < this.posicion)) {
            // Seguiré bajando
          } else {
            // Hay más tareas adelante?
            if (this.tareas.some(tarea => tarea.pisoInicial > this.posicion || tarea.pisoFinal > this.posicion)) {
              // Iré hacia arriba entonces
            } else {
              // Me quedaré quieto
            }
          }
          break;
      }
    } else {
      if (this.tareas.length > 0) { // Hay tareas?
        // Hacia dónde tengo que ir?
      } else {
        this.direccion = 0 // Seguiré quieto entonces
        console.log('No tengo tareas')
      }
    }
  }
  imprimirPosicion() {
    const $numerosPisos = document.querySelectorAll('.floor__elevator-number')
    $numerosPisos.forEach($np => {
      $np.innerText = this.posicion
      if ($np.id === `floor-${this.posicion}`) {
        $np.style.color = 'lime'
      } else {
        $np.style.color = 'red'
      }
    })
    document.getElementById('elevator-number').innerText = this.posicion
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

