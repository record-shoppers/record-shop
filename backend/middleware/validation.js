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
    const upper = /[A-Z]/
    const lower = /[a-z]/
    const number = /[0-9]/

    if(password.length > 6 && password.match(upper, lower, number)) next()
    else {
        const error = new Error("Please make sure your password is correct!")
        error.status = 400
        next(error)
    }   
}


