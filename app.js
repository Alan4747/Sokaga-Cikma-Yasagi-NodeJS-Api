const express = require('express');
const  cors = require('cors');
const app = express();

const result = require('./routes/curfew');

app.use(cors())
app.use('/', result);

app.listen(process.env.PORT || 3000);
