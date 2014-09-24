var migrations,
    seances = [{"date":"02/09/2013","people":10,"type":"OUTDOOR","distance":13,"comment":"vers atlantis","startTime":"20:22:00","endTime":"22:05:00"},{"date":"09/09/2013","people":14,"type":"OUTDOOR","distance":12.5,"comment":"vers fac","startTime":"20:22:00","endTime":"21:50:00"},{"date":"12/09/2013","people":10,"type":"OUTDOOR","distance":8,"comment":"bauséjour","startTime":"20:30:00","endTime":"22:00:00"},{"date":"16/09/2013","people":16,"type":"OUTDOOR","distance":14,"comment":"vers guist'hau","startTime":"20:22:00","endTime":"21:55:00"},{"date":"19/09/2013","people":8,"type":"OUTDOOR","distance":9.8,"comment":"vers sautron","startTime":"20:31:00","endTime":"22:00:00"},{"date":"23/09/2013","people":15,"type":"OUTDOOR","distance":15,"comment":"talensac - 50 otages - guist'hau - Talensac et le centre ville n'est pas simple à sécuriser et à donner les indications à suivre pour ceux qui sont devant - centre ville à éviter avec un groupe nombreux","startTime":"20:17:00","endTime":"22:07:00"},{"date":"30/09/2013","people":12,"type":"OUTDOOR","distance":12.8,"comment":"Sautron","startTime":"20:20:00","endTime":"21:44:00"},{"date":"03/10/2013","people":12,"type":"OUTDOOR","distance":10.2,"comment":"montagne russe - travail endurance, montée/descente","startTime":"20:30:00","endTime":"22:00:00"},{"date":"07/10/2013","people":15,"type":"OUTDOOR","distance":14,"comment":"atlantis - zone industrielle saint herblain","startTime":"20:16:00","endTime":"21:51:00"},{"date":"10/10/2013","people":8,"type":"OUTDOOR","distance":10.5,"comment":"Montagne russe - travail endurance - montée/descente","startTime":"20:35:00","endTime":"22:05:00"},{"date":"14/10/2013","people":11,"type":"OUTDOOR","distance":13.5,"comment":"Procé/Zola/Pigeonnière/Chézine","startTime":"20:22:00","endTime":"21:55:00"},{"date":"17/10/2013","people":5,"type":"OUTDOOR","distance":12.6,"comment":"Le Tillay/Tour du quartier/Chézine/montée descente","startTime":"20:36:00","endTime":"22:00:00"},{"date":"21/10/2013","people":12,"type":"OUTDOOR","distance":12.7,"comment":"Le Tillay/Tour du quartier/Auchan/montée descente. Attention à faire moins de montée quand il y a des nouveaux du jeudi","startTime":"20:20:00","endTime":"21:55:00"},{"date":"04/11/2013","people":10,"type":"INDOOR","distance":null,"comment":"virage/obstacle/ hockey","startTime":"","endTime":""},{"date":"14/11/2013","people":25,"type":"INDOOR","distance":null,"comment":"remplacement gaella cours débutant virage/obstacle/hockey","startTime":"","endTime":""},{"date":"18/11/2013","people":17,"type":"OUTDOOR","distance":12.8,"comment":"vers Sautron","startTime":"20:20:00","endTime":"21:50:00"},{"date":"25/11/2013","people":15,"type":"OUTDOOR","distance":12.6,"comment":"quartier sillon + chezine","startTime":"20:20:00","endTime":"21:40:00"},{"date":"02/12/2013","people":15,"type":"OUTDOOR","distance":14.6,"comment":"calvaire/graslin","startTime":"20:17:00","endTime":"21:55:00"},{"date":"09/12/2013","people":13,"type":"INDOOR","distance":null,"comment":"travail poussée","startTime":"","endTime":""},{"date":"16/12/2013","people":13,"type":"INDOOR","distance":null,"comment":"travail pousée, accélération, relai + basket ball","startTime":"","endTime":""},{"date":"06/01/2014","people":15,"type":"INDOOR","distance":null,"comment":"travail poussée acceleragion endurance + ultimate","startTime":"","endTime":""},{"date":"13/01/2014","people":13,"type":"INDOOR","distance":null,"comment":"travail maniabilité roller équilibre marche arrière pied en avant moto","startTime":"","endTime":""},{"date":"20/01/2014","people":13,"type":"INDOOR","distance":null,"comment":"travail endurance / slalom / basket","startTime":"","endTime":""},{"date":"27/01/2014","people":14,"type":"INDOOR","distance":null,"comment":"parcours varie/ slalom hockey/ handball bon jeu collectif","startTime":"","endTime":""},{"date":"03/02/2014","people":18,"type":"INDOOR","distance":null,"comment":"exercice 3 roue citron endurance 15min ultimate","startTime":"","endTime":""},{"date":"10/02/2014","people":14,"type":"INDOOR","distance":null,"comment":"technique/basketball","startTime":"","endTime":""},{"date":"24/02/2014","people":17,"type":"OUTDOOR","distance":14,"comment":"pont du cens/garonnière/repérage Atlantissport","startTime":"20:20:00","endTime":"21:55:00"},{"date":"17/03/2014","people":13,"type":"OUTDOOR","distance":12,"comment":"Repérage AtlantisSport","startTime":"20:20:00","endTime":"21:50:00"},{"date":"24/03/2014","people":15,"type":"INDOOR","distance":null,"comment":"Découverte de la nouvelle salle, virage, freinage en T","startTime":"","endTime":""},{"date":"31/03/2014","people":12,"type":"OUTDOOR","distance":13,"comment":"parcours simple vers sautron","startTime":"20:18:00","endTime":"21:45:00"},{"date":"07/04/2014","people":12,"type":"OUTDOOR","distance":12,"comment":"parcours simple vers orvault","startTime":"20:25:00","endTime":"21:40:00"},{"date":"14/04/2014","people":17,"type":"OUTDOOR","distance":17,"comment":"saint etienne de montluc - fête de la jonquille","startTime":"20:15:00","endTime":"21:50:00"},{"date":"05/05/2014","people":14,"type":"OUTDOOR","distance":22,"comment":"rattrappage séance annulée au mois de mars où j'étais absent\nsortie depuis l'Hotel de région vers le pont de bellevue, saint seb, hangar a bananes, hotel de region","startTime":"20:15:00","endTime":"22:03:00"},{"date":"12/05/2014","people":12,"type":"INDOOR","distance":null,"comment":"Entrainement relais + salle","startTime":"","endTime":""},{"date":"19/05/2014","people":10,"type":"OUTDOOR","distance":6,"comment":"Vers beauséjour pluis salle à cause de la pluie","startTime":"20:15:00","endTime":"21:00:00"},{"date":"26/05/2014","people":10,"type":"OUTDOOR","distance":12,"comment":"Départ de la Chapelle Sur Erdre","startTime":"20:15:00","endTime":"21:45:00"},{"date":"01/06/2014","people":15,"type":"OUTDOOR","distance":15,"comment":"Saint Etienne de Montluc vers Cordemais ","startTime":"20:15:00","endTime":"21:55:00"},{"date":"16/06/2014","people":17,"type":"OUTDOOR","distance":17,"comment":"Hangar à Bananes - Bouguenais","startTime":"20:15:00","endTime":"21:50:00"},{"date":"23/06/2014","people":22,"type":"OUTDOOR","distance":22,"comment":"Hangar à Bananes - Pont de Bellevue","startTime":"20:18:00","endTime":"22:05:00"},{"date":"30/06/2014","people":11,"type":"OUTDOOR","distance":15,"comment":"Stade de la Beaujoire - Carquefou - saint Joseph de Porterie","startTime":"20:20:00","endTime":"21:45:00"}];

migrations = seances.map(function(seance){
    //{"date":"02/09/2013","people":10,"type":"OUTDOOR","distance":13,"comment":"vers atlantis","startTime":"20:22:00","endTime":"22:05:00"}
    function replacerDate(match, p1, p2, p3) {
        return [p3, p2, p1].join('-')+' 00:00:00 UTC';
    }

    function setTime(date){
        return function(match, p1, p2, p3){
            date.setHours(p1);
            date.setMinutes(p2);
            date.setSeconds(p3);
            return date;
        };
    }

    var dateString,
        newStartTime,
        newEndTime;

    dateString  = seance.date.replace(/(\d*)\/(\d*)\/(\d*)/, replacerDate);
    seance.date = new Date(dateString);

    newStartTime        = newEndTime = new Date(seance.date.getTime());
    seance.startTime    = new Date(seance.startTime.replace(/(\d*):(\d*):(\d*)/g, setTime(newStartTime)));
    seance.endTime      = new Date(seance.endTime.replace(/(\d*):(\d*):(\d*)/g, setTime(newEndTime)));

    return seance;
});

var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://127.0.0.1:27017/rch', function(err, db) {
    if(err) throw err;

    var collection = db.collection('seasons');
    collection.insert({name: '2013/2014', start: 2013, end: 2014, seances: migrations}, function(err, docs) {});
  });
  
  
  //http://docs.mongodb.org/manual/reference/sql-comparison/
  //http://docs.mongodb.org/manual/reference/sql-aggregation-comparison/
  
  /**
 db.seasons.aggregate([
 { $unwind: "$seances" } //fetch seances
]);


 db.seasons.aggregate([
   {$unwind: "$seances"},
   {$project: {
        seances: {
            startTime:1,
            endTime: 1,
            people:1,
            distance:1
        },
        diff: {$multiply: [1000*3600, {$divide: ["$seances.distance", {$subtract: ["$seances.endTime", "$seances.startTime"]}]}]}
    }
}])


 db.seasons.aggregate([
 { $unwind: "$seances" }, //fetch seances
  {$project: {
        seances: {
            startTime: 1
        },
        "seances.endTime": 1
    }
   
}])

 db.seasons.aggregate([
 { $unwind: "$seances" }, //fetch seances
 { $match: {"seances.people": {$gt: 15}}}, //where people > 15
    { 
  "$group": {
    "_id": null, 
    "distance": { "$avg": "$seances.distance" }, //AVG(people)
    "people": { "$avg": "$seances.people" }  //AVG(distance)
  } 
}])




===

SELECT AVG(distance), AVG(people)
FROM seances

   */