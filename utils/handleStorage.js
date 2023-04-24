const multer = require('multer')

// config de multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const pathStorage = `${__dirname}/../storage`
		cb(null, pathStorage)
	},
	filename: function (req, file, cb) {
		console.log(file)
		const ext = file.originalname.split('.').pop()
		const name = file.originalname.split('.').shift()
		const filename = `${name}-${Date.now()}.${ext}`
		cb(null, filename)
	}
})

const uploadMiddleware = multer({ storage: storage })

module.exports = uploadMiddleware