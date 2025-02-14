const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true, // Fixed typo
    })
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => { // Fixed .catch() syntax
        console.error('Database connection error:', err);
    });
}

module.exports = connectToDb;
