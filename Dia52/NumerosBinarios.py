# Funciones y números binarios en Python

def binario(numero):
  binario = ''
  while numero > 1:
    residuo = numero % 2
    binario = str(round(residuo)) + binario
    numero = (numero - residuo) / 2
  binario = str(round(numero)) + binario
  return binario

print(binario(14)) # 1110
print(binario(38)) # 100110
print(binario(127)) # 111111