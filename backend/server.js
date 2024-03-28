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

// Assuming saccoSchema is a valid Mongoose schema
const saccoSchema = new mongoose.Schema({
    // schema definition
    id: String,
    name: String,
    idNumber: String,
    phoneNumber: String,
    pin: String
});

// Create a model for the 'saccos' collection
const Sacco = mongoose.model('Sacco', saccoSchema);

// Create an endpoint to serve the data
app.get('/api/saccos', (req, res) => {
    Sacco.find()
        .then(docs => res.json(docs))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});