// Movimiento Aleatorio en JavaScript

const DIRECCIONES = ['arriba', 'abajo', 'izquierda', 'derecha']

class Robot {
  constructor() {
    this.posicion = { x: 0, y: 0 }
    this.movimientos = { arriba: 0, abajo: 0, izquierda: 0, derecha: 0 }
  }
  mover(direccion) {
    switch (direccion) {
      case 'arriba':
        this.posicion.y++
        break;
      case 'abajo':
        this.posicion.y--
        break;
      case 'izquierda':
        this.posicion.x--
        break;
      case 'derecha':
        this.posicion.x++
        break;
    }
    this.movimientos[direccion]++
  }
}

function movimientosAleatorios(robot, pasos) {
  for (let i = 0; i < pasos; i++) {
    let direccion = DIRECCIONES[Math.floor(Math.random() * 4)]
    robot.mover(direccion)
  }
  console.log(robot.movimientos)
  console.log(robot.posicion)
}

let miRobot = new Robot()
let numeroPasos = 5
movimientosAleatorios(miRobot, numeroPasos)
// {arriba: 2, abajo: 1, izquierda: 1, derecha: 1}
// {x: 0, y: 1}