const { handlehttpError } = require('../utils/handleError')

// Debe pasarse el array con los roles permitidos
const verifyRoleAdmin = (rol) => (req, res, next) => {
	try {
		const rolesUser = req.user.role
		const checkValueRol = rol.some((rolSingle) => rolesUser.includes(rolSingle))
		
		if (!checkValueRol) {
			return handlehttpError(res, 'No posee el role necesario')
		}
		
		return next()
	} catch(err) {
		handlehttpError(res, 'Error en verify Role', 403)
	}
}

module.exports = { verifyRoleAdmin }