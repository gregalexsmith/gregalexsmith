const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mailer = require('./mailer');
const api = express();

api.use(cors());
api.use(bodyParser.json())
api.use('/contact', mailer);

module.exports = api;