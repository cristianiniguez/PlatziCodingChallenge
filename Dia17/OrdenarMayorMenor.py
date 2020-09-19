#Ordenar una lista de números de mayor a menor en javaScript

#Funcion para ordenar una lista de números de mayor a menor
def sortHL(numbers):
    numbers.sort(reverse=True)
    return numbers

#Pedido de datos
cantidad = int(input('¿Cuántos números quiere ordenar de mayor a menor?: '))
numeros = []
for i in range(0, cantidad):
    numeros.append(float(input('Introduzca el número ({}/{}): '.format(i+1, cantidad))))

#Impresion de resultado
print('Números ordenados: {}'.format(sortHL(numeros)))