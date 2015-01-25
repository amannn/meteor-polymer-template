(function () {
  'use strict';

  Polymer({

    beatles: [],

    ready: function() {
      Meteor.autorun(function() {
        this.beatles = Beatles.find().fetch();
        console.log('update');
      }.bind(this));
    }

  });

})();