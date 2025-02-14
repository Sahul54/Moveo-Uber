const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const connectToDb = require('./db/db')
connectToDb();


const app = express();  
app.use(cors());

app.get('/', (req, res) => {   
    res.send("Hello Jii");
});

module.exports = app; // Only export app, do NOT start the server here
