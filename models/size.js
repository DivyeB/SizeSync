const mongoose = require('mongoose');

const SizeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    length: { type: String, required: true },
    shoulder: { type: String, required: true },
    waist: { type: String, required: true },
    chest: { type: String, required: true }
});

module.exports = mongoose.model('Size', SizeSchema);