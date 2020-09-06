# PlatziCodingChallenge Dia 58 - Piedra, Papel y tijeras

En un juego de piedra, papel o tijera cada juego se representa por un array de dos strings (`[‘pi’, ‘pa’], [‘ti’, ‘pa’], [‘pa’, ‘ti’]`, etc.). Calcula quien es el ganador de la partida o si empataron. Por ejemplo:

```js
piedraPapelOTijera([['pi', 'ti'], ['pa', 'ti'], ['ti', 'pi'], ['pi', 'pa']]) -> 'jugador 2'
piedraPapelOTijera([['pi', 'ti'], ['pa', 'ti']]) -> 'empate'
piedraPapelOTijera([['pi', 'ti'], ['pi', 'ti'], ['ti', 'pi']]) -> 'jugador 1'
```