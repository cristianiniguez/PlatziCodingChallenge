# Teorema de Pitágoras en Python

# Función que calcula la distancia entre dos puntos
def distance(pointA, pointB):
    return ((pointB.x - pointA.x)**2 + (pointB.y - pointA.y)**2)**.5

# Clase para crear puntos
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Datos
puntoA = Point(3, 4)
puntoB = Point(5, 7)

# Ejecución
print(round(distance(puntoA, puntoB), 6)) # 3.605551