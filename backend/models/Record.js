const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const recordSchema = new Schema({
    cover: {type: URL, required: true},
    title: {type: String, required: true},
    artist: {type: String, required: true},
    year: {type: Number}
}, {
    versionKey: false,
    timestamps: true
});

const Records = model('Records', recordSchema);

module.exports = Records;