# PlatziCodingChallenge Dia 63 - Programa una Torre de Jenga Aleatoria

Crea un programa que emule la torre de Jenga usando arreglos bidimensionales.

El jugador debe ser capáz de elegir la posición de la ficha que quiere sacar y el programa debe decidir aleatoriamente si la torre se cae o no.
Además, la probabilidad de que la torre se caiga aleatoriamente debe aumentar cuando se está desequilibrada. Tú puedes determinar cuándo y qué tanto la torre está desequilibrada.
Por ejemplo, si dentro de un rango de 4 filas han sacado 3 fichas a la izquierda y ninguna a la derecha, la probabilidad de caerse al tratar de sacar una ficha debe aumentar.

El programa debe recordar la máxima cantidad de movimientos que logró hacer el jugador antes de que la torre se cayera. Y cada vez que supere su record, aumentar la cantidad de filas a las torres Jenga de los próximos juegos.