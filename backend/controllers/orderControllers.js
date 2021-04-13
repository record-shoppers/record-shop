const Order = require("../models/Order")

exports.addOrder = async (req, res, next) => {
    const { records } = req.body;
    const { id } = req.params;

    try {
      const orderNew = await Order.create({
        records,
        userID: id,
      })

      const populate = await Order.find({_id:orderNew._id}).populate("records.recordID")

      res.json(populate);
    } catch (err) {
      next(err); // forward error to central error handler
    }
  };