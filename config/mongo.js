const mongoose = require('mongoose')

async function dbConnectNoSql(uri) {
	mongoose.set('strictQuery', true)
	try {
		await mongoose.connect(uri)
		console.log('Connection to mongodb created successfully')
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = {
	dbConnectNoSql
}
