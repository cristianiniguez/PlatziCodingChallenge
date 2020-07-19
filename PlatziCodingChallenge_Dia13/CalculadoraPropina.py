# Calculadora de Propina en Python

# "values" es una lista
def tipCalculator(values, percentage):
    sumValues = 0
    for i in range(0, len(values)):
        sumValues += values[i]
    return sumValues * percentage

valores = []
i = 0
otroPlatillo = True

while(otroPlatillo):
    i += 1
    valor = float(input('Platillo {}: ¿Cuánto valió? '.format(i)))
    valores.append(valor)
    otroPlatillo = (input('¿Hay más platillos? (si/no): ') == 'si')

porcentaje = float(input('¿Cuál será el procentaje de la propina? (1 - 100%)? ')) / 100
print('La propina es de {}'.format(tipCalculator(valores, porcentaje)))