const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

const sizeSchema = new mongoose.Schema({
    name: String,
    length: String,
    shoulder: String,
    waist: String,
    chest: String
});

const Size = mongoose.model('Size', sizeSchema);

app.post('/api/sizes', async (req, res) => {
    const { name, length, shoulder, waist, chest } = req.body;
    console.log('Received data:', req.body);
    try {
        const newSize = new Size({ name, length, shoulder, waist, chest });
        console.log('New size to be saved:', newSize);
        await newSize.save();
        console.log('Data saved successfully:', newSize);
        res.status(201).json(newSize);
    } catch (err) {
        console.error('Failed to save data:', err);
        res.status(500).json({ message: 'Failed to save data', error: err });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
