// all environments
var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.get('/seances', function(req, res) {
    console.log('seances');
    res.end( JSON.stringify([{
            id: 0,
            date: 1,
            nb: 15,
            type: 0,
            distance: 12,
            remarks: "bla bla bla",
            start: '20:00',
            end: '21:45'
    }]));
});
app.get('/seances/:id', function(req, res) {
    res.end( JSON.stringify({
            id: 0,
            date: 1,
            nb: 15,
            type: 0,
            distance: 12,
            remarks: "bla bla bla",
            start: '20:00',
            end: '21:45'
    }));
});
app.delete('/seances/:id', function(req, res) {
    console.log('seances DELETE');
    //TODO
});
app.post('/seances', function(req, res) {
    console.log('seances CREATION');
    //TODO
});
app.put('/seances/:id', function(req, res) {
    console.log('seances modification');
    //TODO
});
app.listen(8080);