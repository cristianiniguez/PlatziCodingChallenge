# ¿Qué pasaría sí? en Python

def finalAmount(capital, time, rate):
    return capital * (1 + rate)**time # C = c(1 + r)^t

# Pedido de datos
capital = float(input('¿Cuánto vas a ahorrar en este mes?: '))
tiempo = int(input('¿Por cuantos meses?: '))
interes = float(input('¿Cuanto es el interes mensual (0 - 100%): '))/100
print('En {} mes(es) vas a tener ${}'.format(tiempo, round(finalAmount(capital, tiempo, interes), 2)))