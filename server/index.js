// all environments
var express = require('express'),
    app = express();
    Datastore = require('nedb'),
    Seance = require('./seance.js').Seance,
    db = new Datastore({ filename: 'seances.db', autoload: true }),
    Spreadsheet = require('edit-google-spreadsheet');

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

var getValues = function(object){
    var values = Object.keys(object).map(function (key) {
        return object[key];
    });
    return values;
}

var saveDatas = function(){
    return;
    //TODO
    db.find({}, function (err, docs) {
        //TODO gestion des erreurs
        var datas = docs.map(function(row){
            return getValues(row);
        });
        saveToGoogleDrive(datas);
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
            
            

            spreadsheet.add([{id:5, data: '2212121'}]);
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
    if(new Seance(req.body).validator()){
        db.insert(req.body, function (err, newDoc) {
            res.end();
        });
    }else{
        res.send(404, 'Sorry, we cannot find that!');
    }
    saveDatas();
});
app.put('/seances/:id', function(req, res) {
    if(new Seance(req.body).validator()){
        db.update({_id: req.params.id}, req.body, { upsert: true }, function (err, numReplaced, upsert) {
            res.end();
        });
    }else{
        res.send(404, 'Sorry, we cannot find that!');
    }
    saveDatas();
});

console.log(new Seance({}).validator());
app.listen(8080);
