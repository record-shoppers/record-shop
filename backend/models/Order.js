const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const OrderSchema = new Schema({
    records: [{type: Object, required: true}],
}, {
    versionKey: false,
    timestamps: true
});

OrderSchema.virtual('TotalPrice').get(function() {
    return this.records.reducer((acc, item) => {
        if (item.price) {
            acc += item.price;
        }
        return acc;
    }, 0)

})

const Order = model('Order', OrderSchema);

module.exports = Order;