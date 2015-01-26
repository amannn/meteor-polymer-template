var beatles = new Meteor.Collection('Beatles');

Meteor.publish('allBeatles', function() {
  return beatles.find();
});

beatles.allow({
  'insert': function(userId, beatle) {
    return true;
  },

  'update': function(userId, beatle, fields, modifier) {
    return true;
  },

  'remove': function(userId, beatle) {
    return true;
  }
});

if (beatles.find().count() === 0) {
  var data = [{
    name: 'John Lennon'
  }, {
    name: 'Paul McCartney'
  }, {
    name: 'George Harrison'
  }, {
    name: 'Ringo Starr'
  }];

  data.forEach(function(beatle) {
    Beatles.insert(beatle);
  });
}