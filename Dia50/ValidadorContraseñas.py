# Validador de contraseñas en Python

def validatePassword(password):
  parameters = 0
  charCodes = []
  for char in password: charCodes.append(ord(char))
  # ¿Incluye una letra minúscula?
  if (hasCharCodeBetween(charCodes, 97, 122)): parameters += 1
  # ¿Incluye una letra mayúscula?
  if (hasCharCodeBetween(charCodes, 65, 90)): parameters += 1
  # ¿Incluye un número?
  if (hasCharCodeBetween(charCodes, 48, 57)): parameters += 1
  # ¿Incluye un caracter especial?
  if (hasCharCodeBetween(charCodes, 32, 47) or hasCharCodeBetween(charCodes, 58, 64) or hasCharCodeBetween(charCodes, 91, 96) or hasCharCodeBetween(charCodes, 123, 126)): parameters += 1
  # ¿Tiene una longitud mínima de 8 caracteres?
  if (len(charCodes) >= 8): parameters += 1
  # ¿Cuántos parámetros cumple?
  if (parameters <= 2): return 'Contraseña insegura'
  elif (parameters >= 3 and parameters <= 4): return 'Contraseña medianamente segura'
  elif (parameters == 5): return 'Contraseña segura'

def hasCharCodeBetween(charCodes, min, max):
  for charCode in charCodes:
    if charCode >= min and charCode <= max:
      return True
  return False

print(validatePassword('hola')) # Contraseña insegura
print(validatePassword('abcde1234')) # Contraseña medianamente segura
print(validatePassword('P6gFqqsUIZ3@')) # Contraseña segura