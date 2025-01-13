// Import required modules
const express = require('express');
const Schedule = require('../models/Schedule'); // Ensure this model exists
const Show = require('../models/Show');         // Ensure this model exists

// Initialize the router
const router = express.Router();

// Fetch all schedules
router.get('/schedules', async (req, res) => {
    try {
        const schedules = await Schedule.find(); // Fetch schedules from the database
        res.status(200).json(schedules);        // Send schedules as JSON
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch schedules', details: error.message });
    }
});

// Add a new schedule
router.post('/schedules', async (req, res) => {
    try {
        const { title, time } = req.body;
        const schedule = new Schedule({ title, time }); // Create a new schedule
        await schedule.save();                          // Save to database
        res.status(201).json(schedule);                // Send the newly created schedule as JSON
    } catch (error) {
        res.status(400).json({ error: 'Failed to add schedule', details: error.message });
    }
});

// Fetch all shows
router.get('/shows', async (req, res) => {
    try {
        const shows = await Show.find(); // Fetch shows from the database
        res.status(200).json(shows);     // Send shows as JSON
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch shows', details: error.message });
    }
});

// Add a new show
router.post('/shows', async (req, res) => {
    try {
        const { title, link } = req.body;
        const show = new Show({ title, link }); // Create a new show
        await show.save();                      // Save to database
        res.status(201).json(show);            // Send the newly created show as JSON
    } catch (error) {
        res.status(400).json({ error: 'Failed to add show', details: error.message });
    }
});

// Export the router to be used in server.js
module.exports = router;
