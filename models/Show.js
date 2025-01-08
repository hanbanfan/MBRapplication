const mongoose = require('mongoose');

// Schema for shows
const showSchema = new mongoose.Schema({
    title: String,
    link: String,
});

module.exports = mongoose.model('Show', showSchema);
