const express = require('express');
const router = express.Router();
const Size = require('../models/Size');

router.post('/', async (req, res) => {
    const { name, length, shoulder, waist, chest } = req.body;

    try {
        const newSize = new Size({ name, length, shoulder, waist, chest });
        await newSize.save();
        res.status(201).json({ message: 'Size data saved successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
