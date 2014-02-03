// all environments
var express = require('express');
var app = express();
var Datastore = require('nedb'),
    db = new Datastore({ filename: 'seances.db' });
    
db.loadDatabase(function (err) {    // Callback is optional
  console.dir(err);
  
  var seance = {
    date: new Date(),
    nb: 15,
    type: 0,
    distance: 12,
    remarks: "bla bla bla other commentaires",
    start: '20:00',
    end: '21:45'
    };

db.insert(seance, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
  
  
});
app.use(express.bodyParser());

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
        res.end();
    });
    //TODO
});
app.post('/seances', function(req, res) {
    console.log('seances CREATION');
    
});
app.put('/seances/:id', function(req, res) {
    console.log('seances modification');
    db.update({_id: req.params.id}, req.body, { upsert: true }, function (err, numReplaced, upsert) {
        console.dir(err);
        res.end();
    });
    //TODO
});
app.listen(8080);