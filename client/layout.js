//client/layout.js

Template.layoutTemplate.helpers({
	isAdmin: function(){
		var user = Meteor.users.find({_id: Meteor.userId()}).fetch();

		if(user[0].admin != undefined)
			var userAdminStatus = user[0].admin
		console.log(userAdminStatus, 'userAdminStatus');
			if (userAdminStatus != true){
				return false;
			} else {
				return true;
			}
	}
})