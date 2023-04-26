const express = require('express')
const router = express.Router()

const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/storage.controller')
const uploadMiddleware = require('../utils/handleStorage')
const { validatorGetItem } = require('../validators/storage.validator')


router.get('/', getItems)
router.get('/:id', validatorGetItem, getItem)
router.post('/', uploadMiddleware.single('myFile'), createItem)
router.put('/:id', validatorGetItem, updateItem)
router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router