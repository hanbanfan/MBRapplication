const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Show', ShowSchema);
