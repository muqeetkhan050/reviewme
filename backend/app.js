// const express = require('express');
// const app = express();
// const cors = require("cors");

// app.use(cors())

// app.use(express.json());
// app.use('/reviewme/auth', require('./routes/authRoutes'));
// app.use('/reviewme', require('./routes/postRoutes'));
// module.exports = app;


const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/reviewme/auth', require('./routes/authRoutes'));
app.use('/reviewme', require('./routes/postRoutes'));

module.exports = app;
