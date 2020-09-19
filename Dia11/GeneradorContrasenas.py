#Generador de contraseñas en Python

from random import choice

#Caracteres UNICODE (32 - 126)
CODES_SYMBOLS1 = list(range(32, 47 + 1)) # [32, 47]
CODES_NUMBERS = list(range(48, 57 + 1)) # [48, 57]
CODES_SYMBOLS2 = list(range(58, 64 + 1)) # [58, 64]
CODES_UPPERLETTERS = list(range(65, 90 + 1)) # [65, 90]
CODES_SYMBOLS3 = list(range(91, 96 + 1)) # [91, 96]
CODES_LOWERLETTERS = list(range(97, 122 + 1)) # [97, 122]
CODES_SYMBOLS4 = list(range(123, 126 + 1)) # [123, 126]

def generatePassword(lenght, lower = True, upper = True, numbers = True, special = False):
    # WHICH CHARACTERS ARE ALLOWED
    charscodes = []
    if (special):
        charscodes.extend(CODES_SYMBOLS1)
        charscodes.extend(CODES_SYMBOLS2)
        charscodes.extend(CODES_SYMBOLS3)
        charscodes.extend(CODES_SYMBOLS4)
    if (numbers): charscodes.extend(CODES_NUMBERS)
    if (lower): charscodes.extend(CODES_LOWERLETTERS)
    if (upper): charscodes.extend(CODES_UPPERLETTERS)
    # ¿IS THERE ANY CHARACTER ALLOWED?
    if (len(charscodes) < 1): return 'no se puede generar contraseña con estas condiciones'
    # WRITING THE PASSWORD
    password = ''
    for i in range(0, lenght): password = password + chr(choice(charscodes))
    return password

largo = int(input('¿Cuántos caracteres quiere en su contraseña?: '))
minusculas = (input('¿Quiere que su contraseña permitas minúsculas? (si/no): ') == 'si')
mayusculas = (input('¿Quiere que su contraseña permita mayúsculas? (si/no): ') == 'si')
numeros = (input('¿Quiere que su contraseña permita números? (si/no): ') == 'si')
especiales = (input('¿Quiere que su contraseña permita caracteres especiales? (si/no): ') == 'si')
print('Su contraseña es: {}'.format(generatePassword(largo, minusculas, mayusculas, numeros, especiales)))