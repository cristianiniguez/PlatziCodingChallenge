#Calculadora de Volumenes en Python

from math import pi

class cylinder():
    def __init__(self):
        self.height = float(input('Introduzca la altura del cilindro: '))
        self.radio = float(input('Introduzca el radio de las bases del cilindro: '))
    def getVolume(self):
        return pi * self.radio**2 * self.height

class cube():
    def __init__(self):
        self.side = float(input('Introduzca el lado del cubo: '))
    def getVolume(self):
        return self.side**3

class sphere():
    def __init__(self):
        self.radio = float(input('Introduzca el radio de la esfera: '))
    def getVolume(self):
        return (4/3) * pi * self.radio**3

opcion = input('¿Cuál quiere? Cilindro, Cubo o Esfera: ').lower()
if opcion == 'cilindro':
    cilindro = cylinder()
    print('El volumen del cilindro es: {}'.format(round(cilindro.getVolume(), 2)))
elif opcion == 'cubo':
    cubo = cube()
    print('El volumen del cubo es: {}'.format(round(cubo.getVolume(), 2)))
elif opcion == 'esfera':
    esfera = sphere()
    print('El volumen de la esfera es: {}'.format(round(esfera.getVolume(), 2)))
else:
    print('No conozco esa figura')