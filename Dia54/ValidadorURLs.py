# Validador de URLs en Python

import re

REGEX = r'^https?:\/\/(\w+\.)+(\w+)(\/\w+)*(\/|\?(\w+=(\w|-)+&)*(\w+=(\w|-)+)|#.+)?$'

def isUrl(url):
  return re.match(REGEX, url) != None


print(isUrl('https://www.platzi.com')) # true
print(isUrl('hello friends')) # false