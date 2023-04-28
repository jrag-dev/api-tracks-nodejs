const jsonwebtoken = require('jsonwebtoken')
const { getProperties } = require('../utils/handlePropertiesEngine')

const propertiesKey = getProperties()

const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) => {
	const sign = jsonwebtoken.sign(
		{
			[propertiesKey.id]: user[propertiesKey.id],
			name: user.name,
			email: user.email,
			role: user.role
		},
		JWT_SECRET,
		{
			expiresIn: '2h'
		}
	)
	return sign
}

const verifyToken = async (tokenWjt) => {
	try {
		return await jsonwebtoken.verify(tokenWjt, JWT_SECRET)
	} catch (err) {
		return null
	}
}


module.exports = { tokenSign, verifyToken }