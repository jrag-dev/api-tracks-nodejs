const express = require('express')
const router = express.Router()

const { createItem } = require('../controllers/storage.controller')
const uploadMiddleware = require('../utils/handleStorage')


router.post('/', uploadMiddleware.single('myFile'), createItem)

module.exports = router