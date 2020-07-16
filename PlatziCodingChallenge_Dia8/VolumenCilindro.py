#Volumen de un cilindro en Python
PI = 3.1416

class cylinder():
    def __init__(self, radio, height):
        self.radio = radio
        self.height = height
    def getArea(self):
        return PI * self.radio**2 * self.height

radio = float(input('Introduzca el radio de las bases del cilindro: '))
altura = float(input('Introduzca la altura del cilindro: '))
print('El volumen del cilindro es: {}'.format(round(cylinder(radio, altura).getArea(), 2)))