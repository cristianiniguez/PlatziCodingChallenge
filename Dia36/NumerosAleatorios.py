# Números Aleatorios en Python

from random import choice

def randomNumbers2(dices, faces):
    results = []
    for d in range(0, dices):
        results.append(choice(range(1, faces + 1)))
    return results

def throwDices(dices):
    return randomNumbers2(dices, 6)

numeroDados = int(input('¿Cuántos dados vas a tirar?: '))
print('Sacaste: {}'.format(throwDices(numeroDados)))