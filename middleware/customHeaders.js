const customHeaders = (req, res, next) => {
	try {
		const { api_key } = req.headers
		if (api_key === 'jose') {
			next()
		} else {
			res.status(403).send({ error: 'api key incorrecta'})
		}
	} catch (err) {
		res.status(403).send({ error: 'Algo ocurrio en el custom headers'})
	}
}

module.exports = { customHeaders }