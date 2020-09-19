# Calculador de combinaciones en JavaScript

def factorial(x):
  if (x <= 1):
    return 1
  else:
    return x * factorial(x - 1)

def nCr(n, r):
  if (n < r):
    return '"n" no puede ser menor que "r"'
  else:
    return round(factorial(n) / (factorial(n - r) * factorial(r)))

print(nCr(4, 2)) # 6
print(nCr(9, 6)) # 84
print(nCr(5, 7)) # "n" no puede ser menor que "r"