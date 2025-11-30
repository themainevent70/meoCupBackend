const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion BD
connectDB();

// Routes
app.use('/api/users', require('./routes/user.routes'));

module.exports = app;