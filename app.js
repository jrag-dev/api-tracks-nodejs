const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { dbConnect } = require('./config/mongo.js')


// Aplicación principal
const app = express()

// Connection to mongodb
dbConnect(process.env.MONGODB_URI_DEV)

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

const port = process.env.PORT || 3000;


app.listen(port, () => {
	console.log(`Server listening in http://localhost:${port}`)
})