const express = require('express');
const Schedule = require('../models/Schedule');
const Show = require('../models/Show');

const router = express.Router();

// Fetch all schedules
router.get('/schedules', async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.json(schedules);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add or update schedule for a day
router.post('/schedules', async (req, res) => {
    try {
        const { day, shows } = req.body;
        let schedule = await Schedule.findOne({ day });

        if (schedule) {
            schedule.shows = shows;
            await schedule.save();
        } else {
            schedule = new Schedule({ day, shows });
            await schedule.save();
        }

        res.json(schedule);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch all past shows
router.get('/shows', async (req, res) => {
    try {
        const shows = await Show.find();
        res.json(shows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new past show
router.post('/shows', async (req, res) => {
    try {
        const { title, link } = req.body;
        const show = new Show({ title, link });
        await show.save();
        res.json(show);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
