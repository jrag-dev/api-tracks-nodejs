const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
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
			type: String,
			select: false
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

userSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = model('User', userSchema)