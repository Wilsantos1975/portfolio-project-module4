const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get(" * ", (req, res) => {
    res.status(404).send("Page not found");
});



module.exports = app;