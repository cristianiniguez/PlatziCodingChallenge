# Slides en Python

def middleChars(text):
  length = len(text)
  if length % 2 == 0:
    position = round(length / 2 - 1)
    return text[position] + text[position + 1]
  else:
    position = round((length - 1) / 2)
    return text[position]

print(middleChars('Platzi')) # at
print(middleChars('Colombia')) # om
print(middleChars('Brazo')) # a