const { tracksModel } = require('../models')

// TODO: Obtener lista de la base de datos
const getItems = async (req, res) => {
	const data = await tracksModel.find()
	
	res.send({ data })
}

// TODO: Obtener un registro
const getItem = (req, res) => {
	res.send({ data })
}

// TODO: Crear un registro
const createItem = async (req, res) => {
	const { body } = req
	
	try {
		const data = await tracksModel.create(body)
		res.json(data)
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