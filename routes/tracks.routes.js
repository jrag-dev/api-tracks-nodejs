const express = require('express')
const router = express.Router()

const { validatorCreateItem, validatorGetItem } = require('../validators/tracks.validator')
const { customHeaders } = require('../middleware/customHeaders')

const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks.controller')

// TODO: http://localhost:port/api/tracks -> GET, POST, PUT, DELETE

// Lista los Items
router.get('/', getItems)

// Obtener detalle de Item
router.get('/:id', validatorGetItem, getItem)

// Crear un Item
router.post('/', validatorCreateItem, customHeaders, createItem)

// Actualizar un Item
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)

// Eliminar un Item
router.delete('/:id', validatorGetItem, deleteItem)


module.exports = router