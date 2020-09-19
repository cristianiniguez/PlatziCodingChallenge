#¿Puedo ahorrar otros periodos de tiempo? en Python

def finalAmount(capital, time, rate):
    return capital * (1 + rate)**time # C = c(1 + r)^t

#Pedido de datos
capital = 1000
tiempo = int(input('¿Por cuantos meses vas a ahorrar?: '))
interes = 4/100 # 4%
print('En {} mes(es) vas a tener ${}'.format(tiempo, round(finalAmount(capital, tiempo, interes), 2)))