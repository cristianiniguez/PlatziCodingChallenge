// Piedra, papel y tijeras en JavaScript

function piedraPapelOTijera(juegos) {
  let resultados = juegos.map(juego => {
    if (juego.length === 2) {
      switch (juego[0]) {
        case 'pi':
          switch (juego[1]) {
            case 'pi': return 0
            case 'pa': return 2
            case 'ti': return 1
            default: return 0
          }
        case 'pa':
          switch (juego[1]) {
            case 'pi': return 1
            case 'pa': return 0
            case 'ti': return 2
            default: return 0
          }
        case 'ti':
          switch (juego[1]) {
            case 'pi': return 2
            case 'pa': return 1
            case 'ti': return 0
            default: return 0
          }
        default: return 0
      }
    } else {
      return 0
    }
  })
  let puntosJ1 = resultados.filter(res => res === 1).length
  let puntosJ2 = resultados.filter(res => res === 2).length
  if (puntosJ1 > puntosJ2) {
    return 'jugador 1'
  } else if (puntosJ1 < puntosJ2) {
    return 'jugador 2'
  } else {
    return 'empate'
  }
}

console.log(piedraPapelOTijera([['pi', 'ti'], ['pa', 'ti'], ['ti', 'pi'], ['pi', 'pa']])) // jugador 2
console.log(piedraPapelOTijera([['pi', 'ti'], ['pa', 'ti']])) // empate
console.log(piedraPapelOTijera([['pi', 'ti'], ['pi', 'ti'], ['ti', 'pi']])) // jugador 1