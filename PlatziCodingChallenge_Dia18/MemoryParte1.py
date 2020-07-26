#Memory (parte 1) en Python
from random import choice

def randomChars(chars, number):
    charsList = []
    for i in range(0, number):
        charsList.append(choice(chars))
    return charsList

caracteres = ['"', '#', '$', '%', '(', ')', '/', '&']
print(randomChars(caracteres, 4))