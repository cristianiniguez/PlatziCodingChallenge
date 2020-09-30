// Ahora persistimos información en JavaScript con Node

const http = require('http')
const url = require('url')

const messages = []

const server = http.createServer()

server.on('request', (req, res) => {
  const URL = url.parse(req.url, true)
  const path = URL.pathname
  switch (path) {
    case '/api/message':
      switch (req.method) {
        case 'POST':
          const message = URL.query.message
          messages.push(message)
          res.end('Message saved')
          break;
        default:
          res.end('Maybe you want to use POST')
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