const mongoose = require('mongoose');

// Schema for schedules
const scheduleSchema = new mongoose.Schema({
    title: String,
    time: String,
});

module.exports = mongoose.model('Schedule', scheduleSchema);
