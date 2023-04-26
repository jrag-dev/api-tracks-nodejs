const fs = require('fs')
const { storageModel } = require('../models')
const { handlehttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`


// TODO: Obtener lista de la base de datos
const getItems = async (req, res) => {
	try {
		const data = await storageModel.find({})
		res.send({ data })
	} catch(err) {
		handlehttpError(res, 'Error actualizando Items', 403)
	}
}

// TODO: Obtener un registro
const getItem = async (req, res) => {
	try {
		const { id } = matchedData(req)
		console.log(id)
		const data = await storageModel.findById(id)
		res.send({ data })
	} catch (err) {
		handlehttpError(res, 'Error en get Item', 403)
	}
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
		handlehttpError(res, 'Error Creando El Nuevo Item', 403)
	}
}

// TODO: Actualizar un registro
const updateItem = async (req, res) => {
	try {

	} catch (err) {
		handlehttpError(res, 'Error en update Item', 403)
	}
}

// TODO: Eliminar un registro
const deleteItem = async (req, res) => {
	try {
		const { id } = matchedData(req)
		const dataFile = await storageModel.findById(id)
		await storageModel.deleteOne({ _id: id })
		const { filename } = dataFile
		const filePath = `${MEDIA_PATH}/${filename}`
		fs.unlinkSync(filePath)

		const data = {
			filePath,
			deleted: 1
		}
		res.send({ data })
	} catch (err) {
		handlehttpError(res, 'Error en delete Item', 403)
	}
}

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
}