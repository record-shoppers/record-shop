const Basket = require("../models/Basket");

exports.getBaskets = async (req, res, next) => {
  const wholeBasket = await Basket.find()
  res.json(wholeBasket)
}

exports.addRecord = async (req, res, next) => {
  console.log("I am working");
  const addedRecord = req.body;
  const { basketID, userID } = req.params;

  try {
    const foundBasket = await Basket.findById( basketID );
console.log(foundBasket);
    if (!foundBasket) {
      console.log("no Basket found");
      const basketNew = await Basket.create({
        records: addedRecord,
        userID: userID,
      });

      const populate = await Basket.find({ _id: basketNew._id }).populate(
        "records.recordID"
      );

      res.json(populate);
    }

    console.log("the user has an order");

    foundBasket.records.map(async (foundBasketRecord) => {
      // FOR ={ recordID: 607438fc882c56191ce25e86, quantity: 1 }
      // AR = [ { recordID: '607438fc882c56191ce25e87', quantity: 1 } ]
      console.log(addedRecord);
      if (foundBasketRecord.recordID === addedRecord[0].recordID) {
        console.log("same record");
        const UpdateRecord = await Basket.findByIdAndUpdate(
          foundBasketRecord.recordID,
          foundBasketRecord.quantity++
        );
        res.json(UpdateRecord);
      } else {
        const addNewRecord = await Order.findByIdAndUpdate(
          foundOrder._id,
          addedRecord
        );
        res.json(addNewRecord);
      }
    });
  } catch (err) {
    next(err); // forward error to central error handler
  }
};

exports.deleteAllRecords = async (req, res, next) => {
  const deletedRecords = await Order.deleteMany();
  res.send(deletedRecords);
};
