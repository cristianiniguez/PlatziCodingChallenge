class Triangulo ():
    def getArea(self):
        return (self.b * self.h) / 2
    def esEquilatero(self): #Es equilatero si tiene sus tres lados iguales
        if self.a == self.b and self.a == self.c:
            return True
        else:
            return False
    def esIsoceles(self): #Es isoceles si tiene dos lados iguales
        if self.a == self.b or self.a == self.c or self.b == self.c:
            return True
        else:
            return False
    def esEscaleno(self): #Es isoceles si todos sus lados son diferentes (si no es escaleno)
        return not self.esIsoceles()

class TrianguloBH(Triangulo):
    def __init__(self, base, altura):
        self.b = base
        self.h = altura
        #Calculando los otros dos lados
        self.a = ((base / 2)**2 + (altura)**2)**.5
        self.c = self.a

class TrianguloABC(Triangulo):
    def __init__(self, lado1, lado2, lado3):
        self.a = lado1
        self.b = lado2
        self.c = lado3
        #Calculando la altura
        p = (lado1 + lado2 + lado3)/2
        self.h = (2.0 / lado2) * (((p-lado1)*(p-lado2)*(p-lado3))**.5)

print('------------')
print('Triangulo 1:')
print('------------')
base = float(input('Introduzca la base: '))
altura = float(input('Introduzca la altura: '))
triangulo1 = TrianguloBH(base, altura)
print('El area del triangulo 1 es: {}'.format(triangulo1.getArea()))
print('El triangulo 1 es equilatero: {}'.format(triangulo1.esEquilatero()))
print('El triangulo 1 es isoceles: {}'.format(triangulo1.esIsoceles()))
print('El triangulo 1 es escaleno: {}'.format(triangulo1.esEscaleno()))

print('------------')
print('Triangulo 2:')
print('------------')
lado1 = float(input('Introduzca el lado 1: '))
lado2 = float(input('Introduzca el lado 2: '))
lado3 = float(input('Introduzca el lado 3: '))
triangulo2 = TrianguloABC(lado1, lado2, lado3)
print('El area del triangulo 2 es: {}'.format(triangulo2.getArea()))
print('El triangulo 2 es equilatero: {}'.format(triangulo2.esEquilatero()))
print('El triangulo 2 es isoceles: {}'.format(triangulo2.esIsoceles()))
print('El triangulo 2 es escaleno: {}'.format(triangulo2.esEscaleno()))
