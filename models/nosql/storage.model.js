const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const { Schema, model } = mongoose

const storageSchema = new Schema(
	{
		url: {
			type: String,
		},
		filename: {
			type: String
		}
	},
	{
		timestamps: true, // TODO: createdAt, updateAt
		versionKey: false
	}
)

storageSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = model('Storage', storageSchema)