const express = require('express')
const router = express.Router()

const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/storage.controller')
const uploadMiddleware = require('../utils/handleStorage')
const { validatorGetItem } = require('../validators/storage.validator')
const { obtenerTokenHeaders } = require('../middleware/sesion.middleware')
const { verifyRoleAdmin } = require('../middleware/role.middleware')


router.get('/', obtenerTokenHeaders, verifyRoleAdmin(['admin']), getItems)
router.get('/:id', obtenerTokenHeaders, validatorGetItem, getItem)
router.post('/', obtenerTokenHeaders, uploadMiddleware.single('myFile'), createItem)
router.put('/:id', obtenerTokenHeaders, validatorGetItem, updateItem)
router.delete('/:id', obtenerTokenHeaders, validatorGetItem, deleteItem)

module.exports = router