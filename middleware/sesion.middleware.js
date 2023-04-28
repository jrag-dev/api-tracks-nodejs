const { handlehttpError } = require('../utils/handleError')
const { verifyToken } = require('../utils/handleJsonWebToken')
const { usersModel } = require('../models')
const { getProperties } = require('../utils/handlePropertiesEngine')

const propertiesKey = getProperties()

const obtenerTokenHeaders = async (req, res, next) => {
	try {
		//const token = req.headers.authorization.slice(7, )
		const token = req.headers.authorization.split(' ')[1]
		if (!token) {
			return handlehttpError(res, 'Token no enviado')
		}
		const dataToken = await verifyToken(token)

		if (!dataToken) {
			return handlehttpError(res, 'El token no es válido', 401)
		}
		
		//TODO: Para poder realizar consultas coon mongo o con mysql
		const query = {
			[propertiesKey.id]: dataToken[propertiesKey.id]
		}

		const userDB = await usersModel.findOne(query)
		
		req.user = userDB
		
		return next()
	} catch (err) {
		console.log(err)
		handlehttpError(res, 'Error al obtener el token', 404)
	}
}

module.exports = { obtenerTokenHeaders }