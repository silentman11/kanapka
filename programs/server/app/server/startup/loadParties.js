(function(){
Meteor.startup(function () {
  var sched = later.parse.recur().on(1).hour(),
      t = later.setInterval(test, sched);
  var aaa = Meteor.bindEnvironment(function () {

    Deliverers.find().forEach(function (post) {
      Deliverers.update({ '_id': post._id }, { $set: {
          'when': 'Wasn\'t here today.',
          'status': '0'
        } }, { multi: true });
    });
  }, function (e) {
    throw e;
  });
  function test() {
    setTimeout(aaa, 10);
    console.log('test');
  }
});
}).call(this);

//# sourceMappingURL=loadParties.js.map
