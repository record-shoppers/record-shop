const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.checkUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user)
      return res.status(404).json({ message: "The user does not exist!" });
    console.log(user);

    // if (user.password != req.body.password) return res.status(400).json({ message: "Password is not valid!" })

    const token = jwt.sign({ email: user.email, id: user._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "something went wrong!" });
  }
};
