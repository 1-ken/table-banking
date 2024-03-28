
const mongoose = require('mongoose');

// Replace 'your_database_url' with the actual URL of your MongoDB database
const databaseUrl = 'mongodb+srv://Saitabau:#Saitabau28@atlascluster.vczjtel.mongodb.net/';

// Connect to MongoDB
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        // Add your code here to perform database operations
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });