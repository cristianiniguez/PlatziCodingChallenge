#Calculadora en Python
def calculator(number1, number2, operator):
    if(number2 == 0 and operator == "/"):
        return "Error"
    else:
        operators = {
            "+": number1 + number2,
            "-": number1 - number2,
            "*": number1 * number2,
            "/": number1 / number2,
        }
        return operators.get(operator, "Error")

numero1 = float(input('Introduzca el numero 1: '))
numero2 = float(input('Introduzca el numero 2: '))
operador = input('Introduzca el operador (+, -, *, /): ')

resultado = calculator(numero1, numero2, operador)
if (resultado == "Error"):
    print("Hubo un error")
else:
    print("{} {} {} = {}".format(numero1, operador, numero2, resultado))