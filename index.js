const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => res.send('This is the backend for my regular apps'));


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
