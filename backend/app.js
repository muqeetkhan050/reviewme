const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors())

app.use(express.json());

app.use('/reviewme', require('./routes/postRoutes'));
module.exports = app;