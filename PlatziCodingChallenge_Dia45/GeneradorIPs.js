// Generador de IPs en JavaScript

// Genera un solo IP
function IPGenerator() {
  const numbers = new Array()
  for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * 256))
  }
  const IP = numbers.join('.')
  return IP
}

// Genera n IPs
function generateIPs(n) {
  const IPs = new Array()
  for (let i = 0; i < n; i++) {
    IPs.push(IPGenerator())
  }
  return IPs
}

// Ordena una lista de IPs
function sortIPs(IPs) {
  return IPs.sort((a, b) => parseInt(a.split('.').join()) - parseInt(b.split('.').join()))
}

// Encuentra el número de IPs repetidos
function repeatedIPs(IPs) {
  return IPs.length - new Set(IPs).size
}

const misIPs = generateIPs(1000)
console.log(misIPs)
const misIPsOrdenados = sortIPs(misIPs)
console.log(misIPsOrdenados)
const IPsRepetidos = repeatedIPs(misIPs)
console.log(IPsRepetidos)