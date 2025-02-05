const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    day: { type: String, required: true },
    shows: [{
        title: { type: String, required: true },
        time: { type: String, required: true }
    }]
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
