#Número secreto en Python
from random import randint

SECRET_NUMBER = randint(1, 100)
attempts = 0

number = int(input('Estoy pensando en un número del 1 al 100 ¿Cuál es?: '))
attempts+=1

while (number != SECRET_NUMBER):
    if(number > SECRET_NUMBER):
        number = int(input('Es un número más pequeño: '))
        attempts+=1
    elif(number < SECRET_NUMBER):
        number = int(input('Es un número más grande: '))
        attempts+=1

print('Felicidades, adivinaste mi número ({}) en {} intento(s)'.format(SECRET_NUMBER, attempts))