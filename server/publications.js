Beatles = new Meteor.Collection('Beatles');

Meteor.publish('allBeatles', function() {
  return Beatles.find({});
});

Beatles.allow({
  'insert': function(userId, song) {
    return true;
  },

  'update': function(userId, song, fields, modifier) {
    return true;
  },

  'remove': function(userId, song) {
    return true;
  }
});