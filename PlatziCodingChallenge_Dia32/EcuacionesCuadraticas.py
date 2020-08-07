# Ecuaciones Cuadráticas en Python

def cuadraticEquationSolutions(A, B, C):
    if A == 0:
        if B == 0:
            if C == 0:
                return 'Hay infinitas soluciones'
            else:
                return 'No hay soluciones'
        else:
            return 'x = {}'.format(-C/B)
    else:
        d = (B**2 - 4*A*C)**.5
        return 'x1 = {}, x2 = {}'.format((-B + d) / (2 * A), (-B - d) / (2 * A))

# x^2 - 9x + 20 = 0
print(cuadraticEquationSolutions(1, -9, 20))
# x1 = 5.0, x2 = 4.0

# x^2 - 4x + 5 = 0
print(cuadraticEquationSolutions(1, -4, 5))
# x1 = (2+1j), x2 = (2-1j)

# 5x - 15 = 0
print(cuadraticEquationSolutions(0, 5, -10))
# x = 2.0

# 8 = 0
print(cuadraticEquationSolutions(0, 0, 8))
# No hay soluciones

# 0 = 0
print(cuadraticEquationSolutions(0, 0, 0))
# Hay infinitas soluciones