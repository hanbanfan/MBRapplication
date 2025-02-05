const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('https://mbradio.us/mbr-pay/');
});

module.exports = router;
