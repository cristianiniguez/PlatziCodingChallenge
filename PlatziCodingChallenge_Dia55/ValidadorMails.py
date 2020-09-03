# Validador de Emails en Python

import re

REGEX = r'^\w+@\w+\.\w+$'

def isValidEmail(email):
  return re.match(REGEX, email) != None


print(isValidEmail('name@example.com')) # True
print(isValidEmail('name.example@com')) # False