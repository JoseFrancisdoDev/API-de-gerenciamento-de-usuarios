#API de Gerenciamento de Usuários

Esta é uma API simples para gerenciamento de usuários, permitindo listar, buscar, adicionar e remover usuários.

Tecnologias Utilizadas

Node.js - Ambiente de execução JavaScript

Express.js - Framework para criação de rotas e gestão de requisições HTTP

MongoDB - Banco de dados NoSQL para armazenamento dos usuários

Mongoose - Biblioteca para modelagem de dados no MongoDB

Instalação

Clone este repositório:

git clone https://github.com/seu-usuario/API-de-gerenciamento-de-usuarios.git

Acesse o diretório do projeto:

cd API-de-gerenciamento-de-usuarios

Instale as dependências:

npm install

Configure as variáveis de ambiente:

Crie um arquivo .env

Defina as variáveis necessárias, como a URL do MongoDB:

MONGO_URI=mongodb+srv://seu_usuario:senha@cluster.mongodb.net/seu_banco
PORT=3000

Uso

Para iniciar a API, execute:

npm start

A API será iniciada na porta definida no .env ou na 3000 por padrão.

Endpoints

1. Listar Usuários

GET /users

Retorna a lista de usuários cadastrados.

2. Buscar Usuário por ID

GET /users/:id

Retorna os detalhes de um usuário específico.

3. Adicionar Usuário

POST /users

Adiciona um novo usuário.

Corpo da requisição (JSON):

{
  "nome": "João Silva",
  "email": "joao@email.com"
}

4. Remover Usuário

DELETE /users/:id

Remove um usuário com base no ID.
