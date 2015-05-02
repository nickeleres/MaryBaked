//server/dispos.js

Meteor.publish('dispos', function(){
	return Meteor.users.find({'dispo' : true});
});