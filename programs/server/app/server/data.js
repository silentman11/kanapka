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
    $or: [{ $and: [{ owner: { $exists: true } }] }, { $and: [{ owner: this.userId }, { owner: { $exists: true } }] }] });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zZXJ2ZXIvZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2IsWUFBVSxFQUFDLHNCQUFZO0FBQ3BCLFdBQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0dBQ25DO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsWUFBWTtBQUN2QyxTQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDckIsT0FBRyxFQUFDLENBQ0YsRUFBQyxJQUFJLEVBQUMsQ0FFSixFQUFDLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFBQyxDQUN6QixFQUFDLEVBQ0YsRUFBQyxJQUFJLEVBQUMsQ0FDSixFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQ3BCLEVBQUMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxFQUFDLENBQ3pCLEVBQUMsQ0FDSCxFQUFDLENBQUMsQ0FBQztDQUNQLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFlBQVk7QUFDckMsU0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ25CLE9BQUcsRUFBQyxDQUNGLEVBQUMsSUFBSSxFQUFDLENBRUosRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLEVBQUMsQ0FDekIsRUFBQyxFQUNGLEVBQUMsSUFBSSxFQUFDLENBQ0osRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxFQUNwQixFQUFDLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFBQyxDQUN6QixFQUFDLENBQ0gsRUFBQyxDQUFDLENBQUM7Q0FDUCxDQUFDLENBQUMiLCJmaWxlIjoiL3NlcnZlci9kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiTWV0ZW9yLm1ldGhvZHMoe1xyXG4gIG1ldGhvZE5hbWU6ZnVuY3Rpb24oICApe1xyXG4gICAgIHJldHVybiBEZWxpdmVyZXJzLmZpbmQoKS5jb3VudCgpO1xyXG4gIH1cclxufSk7XHJcbk1ldGVvci5wdWJsaXNoKFwiRGVsaXZlcmVyc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIERlbGl2ZXJlcnMuZmluZCh7XHJcbiAgICAkb3I6W1xyXG4gICAgICB7JGFuZDpbXHJcblxyXG4gICAgICAgIHtvd25lcjogeyRleGlzdHM6IHRydWV9fVxyXG4gICAgICBdfSxcclxuICAgICAgeyRhbmQ6W1xyXG4gICAgICAgIHtvd25lcjogdGhpcy51c2VySWR9LFxyXG4gICAgICAgIHtvd25lcjogeyRleGlzdHM6IHRydWV9fVxyXG4gICAgICBdfVxyXG4gICAgXX0pO1xyXG59KTtcclxuTWV0ZW9yLnB1Ymxpc2goXCJNZXNzYWdlc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIE1lc3NhZ2VzLmZpbmQoe1xyXG4gICAgJG9yOltcclxuICAgICAgeyRhbmQ6W1xyXG5cclxuICAgICAgICB7b3duZXI6IHskZXhpc3RzOiB0cnVlfX1cclxuICAgICAgXX0sXHJcbiAgICAgIHskYW5kOltcclxuICAgICAgICB7b3duZXI6IHRoaXMudXNlcklkfSxcclxuICAgICAgICB7b3duZXI6IHskZXhpc3RzOiB0cnVlfX1cclxuICAgICAgXX1cclxuICAgIF19KTtcclxufSk7XHJcbiJdfQ==
}).call(this);

//# sourceMappingURL=data.js.map
