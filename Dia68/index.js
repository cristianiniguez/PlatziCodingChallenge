// Servir más en JavaScript

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  switch (req.url) {
    case '/api':
      switch (req.method) {
        case 'GET':
          res.end('GET to API maded')
          break;
        case 'POST':
          res.end('POST to API maded')
          break;
        case 'PUT':
          res.end('PUT to API maded')
          break;
        default:
          res.end('Unknown method')
          break;
      }
      break;
    default:
      res.end('Error 404 Not Found')
      break;
  }
})

server.listen(8000, () => {
  console.log('Server listening on http://localhost:8000')
})