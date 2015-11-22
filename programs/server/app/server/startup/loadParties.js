(function(){
Meteor.startup(function () {

  var sched = later.parse.recur().on(8, 18).hour(),
      t = later.setInterval(test, sched);
  var aaa = Meteor.bindEnvironment(function () {
    Deliverers.update({}, { $set: { 'when': 'Wasn\'t here today.',
        'status': '0' } }, { multi: true });
  }, function (e) {
    throw e;
  });
  function test() {
    setTimeout(aaa, 10);
  }
});
}).call(this);

//# sourceMappingURL=loadParties.js.map
