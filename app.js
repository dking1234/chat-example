const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();

// Enable CORS for all routes
app.use(cors());


// Other app configuration and route setup...

module.exports = app;
