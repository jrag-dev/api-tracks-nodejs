const mongoose = require('mongoose')
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

module.exports = model('Storage', storageSchema)