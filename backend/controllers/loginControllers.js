const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.checkUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      let error = new Error(`Entered incorrect email or password!`);
      error.status = 200;
      throw error

    console.log(user);
    return
  }

    // if (user.password != req.body.password) return res.status(400).json({ message: "Password is not valid!" })

    const token = jwt.sign({ email: user.email, id: user._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ user });
  } catch (err) {
    next(err)
  }
};
