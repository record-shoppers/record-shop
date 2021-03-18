const User = require("../models/User")

exports.checkUser = async (req, res, next) => {
    try{
        let user = await User.findOne({ email: req.body.email})

        if(!user) return res.status(400).send("The user is not exist!")

        if(user.password != req.body.password) return res.status(400).send("Password is not valid!")

        res.send(user)
   }
   catch (err) {
       next(err) 
   }   
}