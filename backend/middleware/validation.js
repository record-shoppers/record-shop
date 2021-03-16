const User = require('../models/User')
const mongoose = require('mongoose')

exports.validateUser =(req, res, next) => {
    const {firstName, lastName, nickname, email, password} = req.body
    if(firstName && lastName && nickname && password && email) next()
    else {
        const error = new Error("Please complete all fields!")
        error.status = 400
        next(error)
    }
}

exports.validatePassword = (req, res, next) => {
    const {password} = req.body
    const upper = /[A-Z]/,
    const lower = /[a-z]/,
    const number = /[0-9]/,

    if(password.length > 6 && password.includes(upper, lower, number)) next()
    else {
        const error = new Error("Please make sure your password is correct!")
        error.status = 400
        next(error)
    }   
}

exports.checkUser = async (req, res, next) => {
    const {email, password} = req.body

    let user = await User.findOne({email})

    if(user && user.password === password) next()
    else {
        const error = new Error("Please make sure your email and password are correct!")
        error.status = 400
        next(error)
    }
}
