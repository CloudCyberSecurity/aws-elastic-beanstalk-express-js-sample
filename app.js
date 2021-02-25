const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello and Welcome to my Web App pipeline auto deploy test1'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
