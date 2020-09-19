#Piedra, papel o tijera en Python
def ppt(option1, option2):
    return {
        "piedra": {
            "piedra": "piedra vs piedra -> Empate",
            "papel": "piedra vs papel -> Gana el jugador 2",
            "tijera": "piedra vs tijera -> Gana el jugador 1",
        }.get(option2, "Jugador 2, opción inválida"),
        "papel": {
            "piedra": "papel vs piedra -> Gana el jugador 1",
            "papel": "papel vs papel -> Empate",
            "tijera": "papel vs tijera -> Gana el jugador 2",
        }.get(option2, "Jugador 2, opción inválida"),
        "tijera": {
            "piedra": "tijera vs piedra -> Gana el jugador 2",
            "papel": "tijera vs papel -> Gana el jugador 1",
            "tijera": "tijera vs tijera -> Empate",
        }.get(option2, "Jugador 2, opción inválida"),
    }.get(option1, "Jugador 1, opción inválida.")

opcion1 = input('Jugador 1 ¿piedra, papel o tijera?: ')
opcion2 = input('Jugador 2 ¿piedra, papel o tijera?: ')
print(ppt(opcion1, opcion2))