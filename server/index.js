// all environments
var express = require('express'),
    app = express();
    Datastore = require('nedb'),
    db = new Datastore({ filename: 'seances.db', autoload: true });

//app.use(express.compress()); TODO
app.use(express.json());
app.use(express.urlencoded());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.get('/seances', function(req, res) {
    db.find({}, function (err, docs) {
        //TODO gestion des erreurs
        res.end(JSON.stringify(docs));
    });
});
app.get('/seances/:id', function(req, res) {
    db.findOne({_id: req.params.id}, function (err, docs) {
        //TODO gestion des erreurs
        res.end(JSON.stringify(docs));
    });
});
app.delete('/seances/:id', function(req, res) {
    console.log('seances DELETE');
    db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
        console.log('delete');
        res.end();
    });
    //TODO
});
app.post('/seances', function(req, res) {
    console.log('seances CREATION');
    db.insert(req.body, function (err, newDoc) {   // Callback is optional
        res.end();
    });
});
app.put('/seances/:id', function(req, res) {
    console.log('seances modification');
    db.update({_id: req.params.id}, req.body, { upsert: true }, function (err, numReplaced, upsert) {
        res.end();
    });
});
app.listen(8080);