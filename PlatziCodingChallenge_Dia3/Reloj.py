#Reloj en Python
def timeInSeconds(hours, minutes):
    return hours*3600 + minutes*60

horas = int(input('Introduzca las horas: '))
minutos = int(input('Introduzca los minutos: '))
print('Tiempo en segundos: {}'.format(timeInSeconds(horas, minutos)))