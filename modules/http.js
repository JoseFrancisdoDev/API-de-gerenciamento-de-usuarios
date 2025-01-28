const { error } = require('node:console')
const http = require('node:http')

const PORT = 3000
const users = [{
  id: 1,
  name: 'Fernando',
  email: 'fernando@gmail.com'
},
{
  id: 2,
  name: 'João',
  email: 'joao@gmail.com'
}]

const server = http.createServer((req, res, err) => {
  if (req.url === '/users') {
    res
      .writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(users))
  }
})


server.listen(PORT)