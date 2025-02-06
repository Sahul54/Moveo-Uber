const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();  
app.use(cors());

app.get('/', (req, res) => {   
    res.send("Hello Jii");
});

module.exports = app; // Only export app, do NOT start the server here
