const bcryptjs = require('bcryptjs')


// TODO: Encryptar contraseña recibida por el usuario
const encrypt = async (passwordPlain) => {
	const salt = await bcryptjs.genSalt(10)
	const hash = await bcryptjs.hash(passwordPlain, salt)
	return hash
}

// Comparar contraseña ingresada con la guardada en la DB
const compare = async (passwordPlain, hashPassword) => {
	return await bcryptjs.compare(passwordPlain, hashPassword)
}


module.exports = {
	encrypt, compare
}