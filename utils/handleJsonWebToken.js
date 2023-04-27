const jsonwebtoken = require('jsonwebtoken')


const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) => {
	const sign = jsonwebtoken.sign(
		{
			_id: user._id,
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