const express = require('express');
const helmet = require('helmet'); 

const carsRouter = require('./cars/carsRouter');

const server = express();


server.get('/', (req, res) => {
    res.send(`<h2>test!</h2>`);
  });

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter )

module.exports = server;