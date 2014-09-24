var csv = require('csv');
var fs = require('fs');
var seance, seances = [], first = false;

csv()
.from.stream(fs.createReadStream(__dirname+'/rch.csv'))
.to.path(__dirname+'/sample.out')
.transform( function(row){
  return row;
})
.on('record', function(row,index){
	//row.shift();
	//row.pop();
	//row.pop();
	//row.pop();

//"Date","Nombre","Salle","Kilomètres","Remarques","Départ","Arrivée","Moyenne (km/h)"]
    seance = {};
    seance.date = row[0];
    seance.people = parseInt(row[1]);
    seance.type = (row[2] !== '--') ? 'INDOOR' : 'OUTDOOR';
    seance.distance = parseFloat(row[3].replace(/\,/g, '.'));
    seance.comment = row[4];
    seance.startTime = row[5];
    seance.endTime = row[6];

console.log(JSON.stringify(row));
//seance.	
seances.push(seance);
})
.on('end', function(count){
fs.writeFile('seances.json', JSON.stringify(seances));
})
.on('error', function(error){
  console.log(error.message);
});
// #0 ["2000-01-01","20322051544","1979.0","8.8017226E7","ABC","45"]
// // #1 ["2050-11-27","28392898392","1974.0","8.8392926E7","DEF","23"]
// // Number of lines: 2
//
