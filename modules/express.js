const express = require('express')
const UserModel = require('../src/models/user.model')
const server = express()
server.use(express.json())
server.set('view engine', 'ejs')
server.set('views', 'src/views')

// const users = [{
//   id: 1,
//   name: 'Fernando',
//   email: 'fernando@gmail.com'
// },
// {
//   id: 2,
//   name: 'João',
//   email: 'joao@gmail.com'
// }]

// server.get('/', (req, res) => {
//   res.status(200)
//   res.json(users)
// })


//middlewares
server.use((req, res, next) => {
  console.log('Isso é um middleware\n', `Metodo da requisição: ${req.method}\n Content-Type: ${req.headers["content-type"]}`)
  next()
})

//renderizar views
server.get('/views/users', async (req, res) => {
  const users = await UserModel.find({})
  res.render('index', { users })
})

//Listar usuarios
server.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.status(200).json(users)
  }
  catch (error) {
    res.status(400).send(error)
  }
})
//achar usuario por id
server.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error)
  }
})

//Criar novo usuario
server.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(200).json(user)
  }
  catch (error) {
    res.status(400).json({ error })
  }
})

//atualizar usuario
server.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    return res.status(200).json(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

//Deletar usuario 
server.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndDelete(id)
    return res.status(200).json(await UserModel.find({}))
  } catch (error) {
    return res.status(400).send(error)
  }
})


server.listen(3000, 'Localhost', () => {
  console.log('O server está rodando na porta 3000')
})