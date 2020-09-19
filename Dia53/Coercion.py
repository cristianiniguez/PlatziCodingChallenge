# Coercion en Python

def StringToNumber(numberSt):
  try:
    numberFloat = float(numberSt)
    if numberFloat == int(numberFloat):
      return round(numberFloat)
    else:
      return numberFloat
  except:
    return 'Este no es un número'

print(StringToNumber('12')) # 12
print(StringToNumber('45')) # 45
print(StringToNumber('3.14159')) # 3.14159
print(StringToNumber('3.141.59')) # Este no es un número
print(StringToNumber('Hola')) # Este no es un número