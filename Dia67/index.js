// Servir o ser servido en JavaScript (con Node)

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  res.end('Hola Mundo')
})

server.listen(8000, () => {
  console.log('Servidor escuchando en http://localhost:8000')
})

// localhost:8000 -> Hola Mundo