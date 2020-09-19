//Piedra, papel o tijera en JavaScript (con bonus)
function ppt(option1, option2) {
    switch (option1) {
        case 'piedra':
            switch (option2) {
                case 'piedra': return 0
                case 'papel': return 2
                case 'tijera': return 1
                default: return -2
            }
        case 'papel':
            switch (option2) {
                case 'piedra': return 1
                case 'papel': return 0
                case 'tijera': return 2
                default: return -2
            }
        case 'tijera':
            switch (option2) {
                case 'piedra': return 2
                case 'papel': return 1
                case 'tijera': return 0
                default: return -2
            }
        default:
            return -1
    }
}

function juego(partidas) {
    let puntosJ1 = 0
    let puntosJ2 = 0
    for (let i = 0; i < partidas; i++) {
        let marcador = `Jugador 1: ${puntosJ1} punto(s)\nJugador 2: ${puntosJ2} punto(s)`
        let opcion1 = prompt(`${marcador}\nJugador 1: ¿piedra, papel o tijera?`)
        let opcion2 = prompt(`${marcador}\nJugador 2: ¿piedra, papel o tijera?`)
        let resultado = ppt(opcion1, opcion2)
        switch (resultado) {
            case 1:
                alert('Gana Jugador 1 (+1)')
                puntosJ1++
                break
            case 2:
                alert('Gana Jugador 2 (+1)')
                puntosJ2++
                break
            case 0:
                alert('Empate')
                break
            case -1:
                alert('Jugador 1: opcion inválida (-1)')
                puntosJ1--
                break
            case -2:
                alert('Jugador 2: opcion inválida (-1)')
                puntosJ2--
                break
        }
    }
    if(puntosJ1 > puntosJ2) {
        return `Juego terminado: Gana jugador 1 (${puntosJ1}:${puntosJ2})`
    } else if(puntosJ1 < puntosJ2) {
        return `Juego terminado: Gana jugador 2 (${puntosJ1}:${puntosJ2})`
    } else {
        return `Juego terminado: Empate (${puntosJ1}:${puntosJ2})`
    }
}

const partidas = parseInt(prompt('Cuántas partidas se van a jugar?'))
alert(juego(partidas))