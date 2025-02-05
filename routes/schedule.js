const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// Fetch schedule for all days
router.get('/', async (req, res) => {
    try {
        let schedule = {};

        for (const day of days) {
            const response = await axios.get(`https://mbradio.us/${day}/`);
            const $ = cheerio.load(response.data);

            let shows = [];
            $('div.show-entry').each((index, element) => {
                const title = $(element).find('.show-title').text().trim();
                const time = $(element).find('.show-time').text().trim();
                if (title && time) {
                    shows.push({ title, time });
                }
            });

            schedule[day] = shows;
        }

        res.json(schedule);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch schedule" });
    }
});

module.exports = router;
