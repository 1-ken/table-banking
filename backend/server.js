const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Saitabau:%23Saitabau28@atlascluster.vczjtel.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define the MongoDB schema and model for the SACCO collection
const saccoSchema = new mongoose.Schema({
    id: String,
    name: String,
    idNumber: String,
    phoneNumber: String,
    pin: String
});

const SACCO = mongoose.model('SACCO', saccoSchema);

// Define a route to fetch data from the SACCO collection and display it on the console
app.get('/api/data', async (req, res) => {
    try {
        // Fetch all documents from the SACCO collection
        const data = await SACCO.find({}, { _id: 0 }); // Exclude _id field from the result
        console.log('Fetched data from SACCO collection:', data);
        res.sendStatus(200); // Send HTTP status 200 OK as response
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
