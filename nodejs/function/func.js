#!/usr/bin/env node
const {
  createServer,
  IncomingMessage,
  ServerResponse,
} = require('unit-http')

require('http').ServerResponse = ServerResponse
require('http').IncomingMessage = IncomingMessage

const express = require('express');
const morgan = require('morgan');
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');

const app = express();

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.json({
    uuidv1: uuidv1(),
    uuidv4: uuidv4(),
  });
});

createServer(app).listen()
