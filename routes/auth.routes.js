const express = require('express')
const router = express.Router()

const { validatorRegister, validatorLogin } = require('../validators/auth.validator')
const { register, login } = require('../controllers/auth.controller')


// TODO: http://localhost:port/api/auth -> POST

router.post('/register', validatorRegister, register )
router.post('/login', validatorLogin, login )

module.exports = router