# Risk en Python

from random import choice

def tirarDados(numeroDados):
    resultados = []
    for i in range(0, numeroDados):
        resultados.append(choice(range(1, 7)))
    return resultados

def risk():
    ataque = tirarDados(3)
    print('Atacante: {}'.format(ataque))
    defensa = tirarDados(2)
    print('Defensor: {}'.format(defensa))
    soldadosPerdidosAtacante = 0
    soldadosPerdidosDefensor = 0
    for i in [0, 1]:
        if ataque[i] > defensa[i]:
            soldadosPerdidosDefensor += 1
        else:
            soldadosPerdidosAtacante += 1
    print('Atacante pierde {} soldado(s)'.format(soldadosPerdidosAtacante))
    print('Defensor pierde {} soldado(s)'.format(soldadosPerdidosDefensor))

risk()
# Atacante: [5, 5, 6]
# Defensor: [5, 6]
# Atacante pierde 2 soldado(s)
# Defensor pierde 0 soldado(s)