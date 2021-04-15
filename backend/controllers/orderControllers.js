const Order = require("../models/Order");

// exports.addRecord = async (req, res, next) => {
//   const addedRecord = req.body;
//   const { id } = req.params;

//   //if (foundOrder) {
//   //  foundOrder.records.map(async (foundOrderRecord) => {
//   //    if (foundOrderRecord.recordID === addedRecord.recordID) {
//   //      console.log("foundOrder Record if", foundOrderRecord);
//   //      const UpdateRecord = await Order.findByIdAndUpdate(
//   //        foundOrderRecord,
//   //        foundOrderRecord.quantity++
//   //      );
//   //      res.json(UpdateRecord);
//   //    } else {
//   //      const addNewRecord = await Order.findByIdAndUpdate(
//   //        foundOrder._id,
//   //        addedRecord
//   //      );
//   //      res.json(addNewRecord);
//   //    }
//   //  });
//   //}

//   try {
//     const foundOrder = await Order.findOne({ userID: id });

//     if (!foundOrder) {
//       const orderNew = await Order.create({
//         records: addedRecord,
//         userID: id,
//       });

//       const populate = await Order.find({ _id: orderNew._id }).populate(
//         "records.recordID"
//       );

//       res.json(populate);
//     }

//     console.log("the user has an order");

//     foundOrder.records.map(async (foundOrderRecord) => {
//       // FOR ={ recordID: 607438fc882c56191ce25e86, quantity: 1 }
//       // AR = [ { recordID: '607438fc882c56191ce25e87', quantity: 1 } ]
//       if (foundOrderRecord.recordID === addedRecord[0].recordID) {
//         console.log("same record");
//         const UpdateRecord = await Order.findByIdAndUpdate(
//           foundOrderRecord,
//           foundOrderRecord.quantity++
//         );
//         res.json(UpdateRecord);
//       } else {
//         const addNewRecord = await Order.findByIdAndUpdate(
//           foundOrder._id,
//           addedRecord
//         );
//         res.json(addNewRecord);
//       }
//     });
//   } catch (err) {
//     next(err); // forward error to central error handler
//   }
// };

// exports.deleteAllRecords = async (req, res, next) => {
//   const deletedRecords = await Order.deleteMany();
//   res.send(deletedRecords);
// };
