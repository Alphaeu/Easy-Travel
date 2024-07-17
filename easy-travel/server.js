const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const redis = require('redis');
const client = redis.createClient();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
client.on('error', (err) => {
  console.log('Redis error: ', err);
});

// Example of setting and getting cache
app.get('/cache', (req, res) => {
  client.set('key', 'value', redis.print);
  client.get('key', (err, reply) => {
    if (err) throw err;
    res.send(reply);
  });
});
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Easy Travel API',
        version: '1.0.0',
        description: 'API documentation for Easy Travel',
      },
      servers: [
        {
          url: 'http://localhost:5000',
        },
      ],
    },
    apis: ['./routes/api/*.js'],
  };
// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/flights', require('./routes/flights'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/status', require('./routes/status'));
app.use('/api/users', require('./routes/users'));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
