const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema(
	{
		name: {
			type: String,
		},
		age: {
			type: Number
		},
		email: {
			type: String,
			unique: true
		},
		password: {
			type: String
		},
		role: {
			type: ['user', 'admin'],
			default: 'user'
		}
	},
	{
		timestamps: true, // TODO: createdAt, updateAt
		versionKey: false
	}
)

module.exports = model('User', userSchema)