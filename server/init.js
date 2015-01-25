Meteor.startup(function() {
  if (Beatles.find().count() === 0) {
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

  // Prevent FOUC
  return Inject.rawModHtml('addUnresolved', function(html) {
    return html = html.replace('<body>', '<body unresolved fit layout vertical>');
  });
});