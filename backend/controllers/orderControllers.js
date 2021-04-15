const Order = require("../models/Order");

exports.addRecord = async (req, res, next) => {
    const addedRecord = req.body;
    const { userID } = req.params;
console.log(addedRecord);
    try {
        const orderNew = await Order.create({
            records: addedRecord.records,
            userID,
        })

        const populate = await Order.find({ _id: orderNew._id }).populate(
            "records.recordID"
        );

        res.json(populate);
    } catch (err) {
        next(err); // forward error to central error handler
    }
};

exports.deleteAllRecords = async (req, res, next) => {
    const deletedRecords = await Order.deleteMany();
    res.send(deletedRecords);
};
