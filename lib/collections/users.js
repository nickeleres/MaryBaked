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
		Meteor.users.update({_id: user_id}, {$set : {"dispo" : true}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'added dispo status');
	},

	removeDispoStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"dispo" : false}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'removed dispo status');
	},

	updateUsername: function(user_id, username_field){
		Meteor.users.update({_id: user_id}, {$set : { 'username' : username_field}});
		console.log(username_field, 'username updated');
	},

	addEndorsement: function(user_id, current_user_id){

		if(user_id == current_user_id){
			alert('you cannot endorse yourself');
		} else {
			Meteor.users.update({_id: user_id}, {$addToSet: {'endorsers' : current_user_id}});
		}

	}
});



