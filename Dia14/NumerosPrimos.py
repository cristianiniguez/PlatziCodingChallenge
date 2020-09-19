# Números primos en Python
def isPrime(number):
    for divider in range(2, int(number**.5) + 1):
        if(number % divider == 0):
            return False
    return True

def primeNumbers(limit):
    primes = []
    for number in range(2, limit + 1):
        if isPrime(number): primes.append(number)
    return primes

#Asking for the limit
n = int(input("¿Hasta qué número quiere saber los primos? "))
while(n < 2):
    print('Debe poner un número mayor o igual que 2')
    n = int(input("¿Hasta qué número quiere saber los primos? "))

#Printing the result
print(primeNumbers(n))