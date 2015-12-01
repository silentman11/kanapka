(function(){Meteor.methods({
  methodName: function methodName() {
    return Deliverers.find().count();
  }
});
Meteor.publish("Deliverers", function () {
  return Deliverers.find({
    $or: [{ $and: [{ owner: { $exists: true } }] }, { $and: [{ owner: this.userId }, { owner: { $exists: true } }] }] });
});
Meteor.publish("Messages", function () {
  return Messages.find({
    $or: [{ $and: [{ "localization": { $exists: true } }] }, { $and: [{ "owner": this.userId }, { "owner": { $exists: true } }] }] });
});
}).call(this);

//# sourceMappingURL=data.js.map
