const { tracksModel } = require('../models')
const { handlehttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')

// TODO: Obtener lista de la base de datos
const getItems = async (req, res) => {

	try {
		const data = await tracksModel.find()
		res.send({ data })
	} catch (err) {
		handlehttpError(res, 'Error en get Items')
	}
}

// TODO: Obtener un registro
const getItem = async (req, res) => {
	try {
		req = matchedData(req)
		const { id } = req
		const data = await tracksModel.findById(id)
		res.send({ data })
	} catch (err) {
		console.log(err)
		handlehttpError(res, 'Error en get Item')
	}
}

// TODO: Crear un registro
const createItem = async (req, res) => {
	try {
		const body = matchedData(req)

		const data = await tracksModel.create(body)
		res.json({ data })
	} catch (err) {
		handlehttpError(res, 'Error creando Items', 403)
	}
}

// TODO: Actualizar un registro
const updateItem = async (req, res) => {
	try {
		const { id, ...body } = matchedData(req)
		const data = await tracksModel.findOneAndUpdate(
			id, body, {
				new: true
			}
		)
		res.send({ data })
	} catch (err) {
		handlehttpError(res, 'Error actualizando Items', 403)
	}
}

// TODO: Eliminar un registro
const deleteItem = async (req, res) => {
	try {
		req = matchedData(req)
		const { id } = req
		const data = await tracksModel.delete({ _id: id })
		res.send({ data })
	} catch (err) {
		console.log(err)
		handlehttpError(res, 'Error en delete Item')
	}
}

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
}