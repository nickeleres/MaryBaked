//server/vendors.js

Meteor.publish('vendors', function(){
	return Meteor.users.find({'vendor' : true});
});