const User = require("../models/User")

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.send(users)
    }
    catch (err) {
        next(err);
    } 
}

exports.getUser = async (req, res, next) => {
    const {id} = req.params;
     try{
        const user = await User.findById(id) 
        res.json(user)
    }
    catch (err) {
        next(err) 
    } 
}

exports.addUser = async (req, res, next) => {
    const info = req.body
    try {
        const user = await User.create(info)
        res.json(user)
    }
    catch (err) {
        next(err)
    }
}