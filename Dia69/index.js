// Servir seguro en JavaScript con Node

const http = require('http')
const url = require('url')

const server = http.createServer()

const USER = 'usuario'
const PASSWORD = '1234'

server.on('request', (req, res) => {
  const URL = url.parse(req.url, true)
  const path = URL.pathname
  switch (path) {
    case '/api/login':
      switch (req.method) {
        case 'POST':
          if (URL.query.user === USER && URL.query.password === PASSWORD) {
            res.end('Welcome user')
          } else {
            res.end('You are not the user')
          }
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