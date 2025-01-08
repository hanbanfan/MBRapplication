const express = require('express');
const Schedule = require('../models/Schedule');
const Show = require('../models/Show');

const router = express.Router();

// Fetch all schedules
router.get('/schedules', async (req, res) => {
    const schedules = await Schedule.find();
    res.json(schedules);
});

// Add a new schedule
router.post('/schedules', async (req, res) => {
    const { title, time } = req.body;
    const schedule = new Schedule({ title, time });
    await schedule.save();
    res.json(schedule);
});

// Fetch all shows
router.get('/shows', async (req, res) => {
    const shows = await Show.find();
    res.json(shows);
});

// Add a new show
router.post('/shows', async (req, res) => {
    const { title, link } = req.body;
    const show = new Show({ title, link });
    await show.save();
    res.json(show);
});

module.exports = router;
