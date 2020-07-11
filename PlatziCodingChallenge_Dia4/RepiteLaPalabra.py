#Repite la palabra en Python
def repeat(word, times):
    if times <= 1:
        return word
    else:
        return word + repeat(word, times - 1)

palabra = input('¿Qué palabra quieres repetir? ')
veces = int(input('¿Cuántas veces quieres repetirla? '))
print(repeat(palabra, veces))