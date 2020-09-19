# Calcula la Media en Python

def esNumero(x):
  try:
    float(x)
    return True
  except:
    return False

def media(*numeros):
  if (esNumero(numeros[0]) == False):
    numeros = numeros[0]
  else:
    numeros = list(numeros)
  suma = 0
  for n in numeros: suma += n
  n = len(numeros)
  return suma / n

print(media(1, 2, 3, 4)) # 2.5
print(media([1, 2, 3, 4])) # 2.5