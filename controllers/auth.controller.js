const { encrypt, compare } = require('../utils/handlePassword')
const { usersModel } = require('../models')
const { tokenSign } = require('../utils/handleJsonWebToken')
const { handlehttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')


// TODO: Registrar usuario
const register = async (req, res) => {
	try {
		console.log(req.body)
		req = matchedData(req)
		const password = await encrypt(req.password)
		const body = {...req, password }
		const dataUser = await usersModel.create(body)
		dataUser.set('password', undefined, { strict: false })

		res.send({ data })
	} catch (err) {
		handlehttpError(res, 'Error al registrar el usuario')
	}
}

// TODO: Login del usuario
const login = async (req, res) => {
	try {
		req = matchedData(req)
		const { ...body } = req
		const userDB = await usersModel
			.findOne({ email: body.email })
			.select('name email password role')
		
		// verificar lque coincidan los passwords
		if (!userDB) {
			return handlehttpError(res, 'El usuario no se encuentra registrado', 404)
		}
		
		const hashPassword = userDB.get('password')
		const checkPassword = await compare(body.password, hashPassword)
		
		// verificar lque coincidan los passwords
		if (!checkPassword) {
			return handlehttpError(res, 'Los password deben ser iguales', 404)
		}
		
		// crear el token
		userDB.set('password', undefined, { strict: false }) // quitar el password de la respuesta
		const data = {
			user: userDB,
			token: await tokenSign(userDB)
		}
		// responser
		res.send({ data })
	} catch (err) {
		handlehttpError(res, 'Error al logear el usuario')
	}
}

module.exports = { register, login }