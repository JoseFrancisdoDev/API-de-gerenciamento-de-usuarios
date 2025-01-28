// const Person = require('./Pensor')
// // require('./modules/path')
// require('./modules/fs')

// const person = new Person('Fernando')

// person.sayMyName()

// require('./modules/http')
const connect = require('./src/database/conect')
require('dotenv').config();
console.log('MONGODB_USER:', process.env.MONGODB_USER);
console.log('MONGODB_PASSWORD:', process.env.MONGODB_PASSWORD);
connect()
require('./modules/express')