#Eliminar vocales en Python
def removeVowels(text):
    vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]
    for vowel in vowels:
        while text.count(vowel) > 0:
            text = text.replace(vowel, "")
        while text.count(vowel.upper()):
            text = text.replace(vowel.upper(), "")
    return text

texto = input('Introduzca el texto para quitarle las vocales: ')
print(removeVowels(texto))