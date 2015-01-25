Meteor.publish('allBeatles', function() {
  return Beatles.find({});
});