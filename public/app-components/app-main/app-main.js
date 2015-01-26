(function () {
  'use strict';

  Polymer({

    beatles: [],

    ready: function() {
      var beatlesCollection = new Meteor.Collection('Beatles');
      Meteor.subscribe('allBeatles');

      // Assign beatles property reactively
      Meteor.autorun(function() {
        this.beatles = beatlesCollection.find().fetch();
        console.log('update');
      }.bind(this));

      // Updates work something like this:
      // beatlesCollection.update('Pco77cQuhqN6XvHCD', {$set: { name: 'something new'}} );

    }

  });

})();