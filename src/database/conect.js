const mongoose = require('mongoose')

const connect = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.s8bim.mongodb.net/?retryWrites=true&w=majority&appName=database`, (error) => {
    if (error) throw console.log(error)
    console.log('Conectado com sucesso')
  })
}

module.exports = connect