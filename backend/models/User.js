const mongoose = require('mongoose');
const {model, Schema} = mongoose

const UserSchema = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    nickname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    avatar: {type: String, default: 'http://localhost:5001/statics/avatar.jpg'}
}, {versionKey: false, timestamps: true})

const User = model('User', UserSchema)

module.exports = User