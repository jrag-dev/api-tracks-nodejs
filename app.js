const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { dbConnectNoSql } = require('./config/mongo.js')
const { dbConnectMySql } = require('./config/mysql.js')

// Aplicación principal
const app = express()

// Motor de DB a usar
const ENGINE_DB = process.env.ENGINE_DB

// Cors
app.use(cors())

// recibir json
app.use(express.json())

// archivos publicos
app.use(express.static('storage'))

// Routes	http://localhost/api
app.use('/api', require('./routes'))


app.get('/', (req, res) => {
	res.send({ message: 'Hola Mundo, desde Express'})
})

// Connection to the database
ENGINE_DB === 'nosql' ? dbConnectNoSql(process.env.MONGODB_URI_DEV) : dbConnectMySql()

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server listening in http://localhost:${port}`)
})