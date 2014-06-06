// all environments
var express = require('express'),
    app = express();
    Datastore = require('nedb'),
    Seance = require('./seance.js').Seance,
    db = new Datastore({ filename: 'seances.db', autoload: true }),
    Spreadsheet = require('edit-google-spreadsheet')
    Q = require('q');

//app.use(express.compress()); TODO
app.use(express.json());
app.use(express.urlencoded());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    next();
});

var getValues = function(object){
    var values = Object.keys(object).map(function (key) {
        return object[key];
    });
    return values;
}

var saveDatas = function(){
    return;
    //TODO
    db.find({}, function (err, datas) {
        var datasToSaved = datas.map(function(data){
            return Object.keys(data)
                .filter(function(index){
                    return index !== '_id';
                })
                .map(function(index){ 
                    return data[index];
                });
        });
        saveToGoogleDrive(datasToSaved);
    });
}

var saveToGoogleDrive = function(datas){
     var Spreadsheet = require('edit-google-spreadsheet'),
        fs = require('fs');
     fs.readFile('conf.json', 'utf-8', function (err, confData) {
        if (err) throw err;
        confJSON = JSON.parse(confData);
        Spreadsheet.load({
            debug: true,
            spreadsheetId: 'tuf_RJ2mkUJL_Xk7qNGrWbg', //TODO conf
            worksheetId: 'od6', //TODO conf
            username: confJSON.email,
            password: confJSON.password

          }, function sheetReady(err, spreadsheet) {
            //use speadsheet!
            if(err) throw err;

            spreadsheet.add(datas);
             spreadsheet.send(function(err) {
                if(err) throw err;
                console.log("Updated");
            });
        });
    });
}
//saveToGoogleDrive();
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
    db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
        console.log('delete');
        res.end();
    });
    saveDatas();
});
app.post('/seances', function(req, res) {
    var seance = new Seance(req.body);
    if(seance.validator()){
        db.insert(seance, function (err, newDoc) {
            res.end();
        });
    }else{
        res.send(404, 'Sorry, we cannot find that!');
    }
    saveDatas();
});
app.put('/seances/:id', function(req, res) {
    var seance = new Seance(req.body);
    if(seance.validator()){
        db.update({_id: req.params.id}, seance, { upsert: true }, function (err, numReplaced, upsert) {
            res.end();
        });
    }else{
        res.send(404, 'Sorry, we cannot find that!');
    }
    saveDatas();
});
saveDatas();

app.listen(8080);
