const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./src/routes.js'),
    port = process.env.port || 3000;

app.use(bodyParser.text('text/plain'));
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

routes(app);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);



console.log(`API server started on port: ${port}`);
