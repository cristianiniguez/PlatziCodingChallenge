# Fibonacci de 10 000 en JavaScript

import sys

def F(n, memory = {}):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    try:
        return memory[n]
    except KeyError:
        result = F(n - 1) + F(n - 2)
        memory[n] = result
        return result

if __name__ == '__main__':
    sys.setrecursionlimit(100000)
    print(F(5)) # 5
    print(F(50)) # 12586269025
    print(F(78)) # 8944394323791464
    print(F(79)) # 14472334024676221 (diferente al resultado en JS)
    print(F(100)) # 354224848179261915075
    print(F(1000)) # 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875