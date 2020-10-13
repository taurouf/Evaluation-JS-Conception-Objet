'use strict'

/**
 * Represents a MyAverage
 * @constructor
 */
var MyAverage = function MyAverage() {
}

/**
 * Run MyAverage
 */
MyAverage.prototype.run = function() {
  this.compute();
}
/**
 * Function to calculate a grade average
 */
MyAverage.prototype.compute = function() {
    var i=0;
    
    var somme=0;
    var moyenne=0;
    var nb_notes=0;
    nb_notes=prompt("Vous souhaitez faire la moyenne de combien de notes ?","Nb de Notes");
    nb_notes=parseInt(nb_notes);
    var notes = new Array(nb_notes);
    for(i=1;i<=nb_notes;i++)
    {
         
        var note_i=prompt("Entrez la note");
        notes[i-1]=parseInt(note_i);
        somme+=notes[i-1];
    }
    moyenne=(somme/nb_notes);
    alert("La moyenne des notes est : "+moyenne);
}

var average = new MyAverage();
average.run();