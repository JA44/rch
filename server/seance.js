var validator = require('validator');
validator.extend('isTime', function (str) {
    return str.match(/^([01]\d|2[0-3]):([0-5]\d)$/);
});

function Seance(seance){
    this.type       = seance.type || '';
    this.date       = seance.date || '';
    this.start      = seance.start || '';
    this.end        = seance.end || ''
    this.nb         = seance.nb || 0;
    this.distance   = seance.distance || 0;
    
    return this;
}

Seance.prototype.validator = function(){
    return  validator.isDate(this.date) &&
            validator.isInt(this.nb) && 
                (this.type == 'INDOOR' || 
                this.type == 'OUTDOOR' && 
                validator.isTime(this.start) && 
                validator.isTime(this.end) && 
                validator.isFloat(this.distance)
                );
};

module.exports.Seance = Seance;