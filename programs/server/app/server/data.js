(function(){Meteor.methods({
  methodName: function methodName() {
    return Deliverers.find().count();
  }
});
Meteor.publish("Deliverers", function () {
  return Deliverers.find({
    $or: [{ $and: [{ owner: { $exists: true } }] }, { $and: [{ owner: this.userId }, { owner: { $exists: true } }] }] });
});
Meteor.publish("Message", function () {
  return Messages.find({
    $or: [{ $and: [{ "location": { $exists: true } }] }, { $and: [{ "owner": this.userId }, { "owner": { $exists: true } }] }] });
});
}).call(this);

//# sourceMappingURL=data.js.map
