(function(){Deliverers = new Mongo.Collection("Deliverers");
Messages = new Mongo.Collection("Messages");

Deliverers.allow({
  insert: function insert(userId, deliverer) {
    return userId && deliverer.owner === userId;
  },
  update: function update(userId, deliverer, fields, modifier) {
    return userId && deliverer.owner === userId;
  },
  remove: function remove(userId, deliverer) {
    return userId && deliverer.owner === userId;
  }
});
Messages.allow({
  insert: function insert(userId, message) {
    return userId && message.owner === userId;
  },
  update: function update(userId, message, fields, modifier) {
    return userId && message.owner === userId;
  },
  remove: function remove(userId, message) {
    return userId && message.owner === userId;
  }
});
}).call(this);

//# sourceMappingURL=deliverers.js.map
