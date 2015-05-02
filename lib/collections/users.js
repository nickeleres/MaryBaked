//lib/collections/users.js

Meteor.methods({
	addAdminStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"admin" : true}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'added admin status');
	},

	removeAdminStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"admin" : false}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'removed admin status');
	},

	addVendorStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"vendor" : true}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'added vendor status');
	},

	removeVendorStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"vendor" : false}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'removed vendor status');
	},

	addDispoStatus: function(user_id){

	},

	removeDispoStatus: function(user_id){

	}
});