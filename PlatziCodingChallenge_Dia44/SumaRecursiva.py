# Suma Recursiva en Python

def sumaRecursiva(suma = 0):
    entrada = input('Introduzca un número (0 o nada para terminar): ')
    try:
        numero = float(entrada)
        if (numero == 0):
            return suma
        else:
            suma += numero
            return sumaRecursiva(suma)
    except:
        return suma

suma = sumaRecursiva()
print("La suma de todos sus números es {}".format(suma))