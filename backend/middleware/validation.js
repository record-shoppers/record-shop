exports.checkUser =(req, res, next) => {
    const {email, password} = req.body
    if(email && password ) next()
    else {
        const error = new Error("Please make sure your email and password are correct!")
        error.status = 400
        next(error)
    }
}

exports.validateUser =(req, res, next) => {
    const {firstName, lastName, nickname, email, password} = req.body
    if(firstName && lastName && nickname && password && email) next()
    else {
        const error = new Error("Please complete all fields!")
        error.status = 400
        next(error)
    }
}