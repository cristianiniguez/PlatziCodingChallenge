# Números Aleatorios 2 en Python

from random import choice

def randomNumbers2(dices, faces):
    results = []
    for d in range(0, dices):
        results.append(choice(range(1, faces + 1)))
    return results

numeroDados = int(input('¿Cuántos dados vas a tirar?: '))
numeroCaras = int(input('¿Cuántos caras tienen?: '))
print('Sacaste: {}'.format(randomNumbers2(numeroDados, numeroCaras)))