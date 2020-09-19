// Validador de URLs en JavaScript

const REGEX = /^https?:\/\/(\w+\.)+(\w+)(\/\w+)*(\/|\?(\w+=(\w|-)+&)*(\w+=(\w|-)+)|#.+)?$/g

function isUrl(url) {
  return REGEX.test(url)
}

console.log(isUrl('https://www.platzi.com')) // true
console.log(isUrl('hello friends')) // false