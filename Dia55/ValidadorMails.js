// Validador de Emails en JavaScript

const REGEX = /^\w+@\w+\.\w+$/

function isValidEmail(email) {
  return REGEX.test(email)
}

console.log(isValidEmail('name@example.com')) // true
console.log(isValidEmail('name.example@com')) // false