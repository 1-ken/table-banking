const mongoose = require('mongoose');

// Import required modules

mongoose.connect('mongodb+srv://Saitabau:%23Saitabau28@atlascluster.vczjtel.mongodb.net/',
 {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Create a schema for the 'users' table
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    identificationNumber: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    }
});

// Create a schema for the 'savings' table
const savingsSchema = new mongoose.Schema({
    amountSaved: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: { // Add a date field to your schema
        type: Date,
        required: true
    }
});

// Create a schema for the 'loan' table
const loanSchema = new mongoose.Schema({
    amountBorrowed: {
        type: Number,
        required: true
    },
    records: {
        type: [String],
        required: true
    }
});

// Create models for each schema
const User = mongoose.model('User', userSchema);
const Savings = mongoose.model('Savings', savingsSchema);
const Loan = mongoose.model('Loan', loanSchema);

// Export the models
module.exports = {
    User,
    Savings,
    Loan
};

// Add the getAccountStatement function
// const getAccountStatement = async (userName, days) => {
//     // Get the date 20 days ago
//     const date = new Date();
//     date.setDate(date.getDate() - days);

//     // Find the user
//     const user = await User.findOne({ name: userName });

//     if (!user) {
//         console.log('User not found');
//         return;
//     }

//     // Find the transactions for the user in the past 20 days
//     const transactions = await Savings.find({
//         name: userName,
//         date: { $gte: date }
//     });

//     // Print the user's name
//     console.log(`Account statement for ${user.name}:`);

//     // Print each transaction
//     transactions.forEach(transaction => {
//         console.log(`Date: ${transaction.date}, Amount Saved: ${transaction.amountSaved}`);
//     });
// };

// // Call the function
// getAccountStatement('John Doe', 20);
