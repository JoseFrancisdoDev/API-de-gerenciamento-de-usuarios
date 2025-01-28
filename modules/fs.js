const fs = require('node:fs')
const path = require('node:path')

//criar uma pasta
// fs.mkdir(path.join(__dirname, '/arquivos'), (err) => {
//   if (err) throw err
//   return console.log('Pasta criada com sucesso')
// })

//criar um arquivo
// fs.writeFile(path.join(__dirname + '/arquivos', 'arquivo.txt'), 'Hello node!', (err) => {
//   if (err) throw 'Erro: ' + err
// })

//adicionar à um arquivo
// fs.appendFile(path.join(__dirname + '/arquivos', 'arquivo.txt'), ', Hello word', (err) => { if (err) throw err })

//ler um arquivo
fs.readFile(path.join(__dirname, '/arquivos', 'arquivo.txt'), 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
