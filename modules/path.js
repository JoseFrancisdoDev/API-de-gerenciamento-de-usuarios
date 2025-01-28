const path = require('node:path');

// nome do arquivo atual
console.log(path.basename(__filename))
//diretorio atual
console.log(path.dirname(__filename))
//extensao do arquivo atual
console.log(path.extname(__filename))
//criar um objeto do arquivo atual
console.log(path.parse(__filename))
//adicionar caminhos ao diretorio atual
console.log(path.join(__dirname, 'arquivo', 'arquivo.txt'))