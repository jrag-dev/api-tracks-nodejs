const { Sequelize } = require('sequelize')

const database = process.env.MYSQL_DATABASE
const username = process.env.MYSQL_USER
const password = process.env.MYSQL_PASSWORD
const host = process.env.MYSQL_HOST

const sequilize = new Sequelize(
	database,
	username,
	password,
	{
		host,
		dialect: 'mysql'
	}
)

const dbConnectMySql = async () => {
	try {
		await sequilize.authenticate();
		console.log('MySql Conexión correcta')
	} catch (err) {
		console.log(err)
		console.log('MySql Error de Conexión')
	}
}

module.exports = { sequilize, dbConnectMySql }