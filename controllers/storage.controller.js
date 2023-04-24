const { storageModel } = require('../models')

const PUBLIC_URL = process.env.PUBLIC_URL


// TODO: Obtener lista de la base de datos
const getItems = async (req, res) => {
	const data = await storageModel.find()
	
	res.send({ data })
}

// TODO: Obtener un registro
const getItem = (req, res) => {
	res.send({ data })
}

// TODO: Crear un registro
const createItem = async (req, res) => {
	const { body, file } = req
	
	try {
		const fileData = {
			filename: file.filename,
			url: `${PUBLIC_URL}/${file.filename}`
		}
		const data = await storageModel.create(fileData)
		res.json({ data })
	} catch (err) {
		res.status(500).json({ message: 'Error Creando El Nuevo Item'})
	}
}

// TODO: Actualizar un registro
const updateItem = (req, res) => {
	res.send('update items')
}

// TODO: Eliminar un registro
const deleteItem = (req, res) => {
	res.send('delete items')
}

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
}