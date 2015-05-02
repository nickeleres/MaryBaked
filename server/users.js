//server/users.js

Meteor.publish('users', function(){
	var current_user = Meteor.users.find({_id: this.userId}).fetch()[0];
	var current_user_admin_status = current_user.admin;
	console.log(current_user_admin_status);

	if(current_user_admin_status == true){
		console.log('you are an admin user');
		return Meteor.users.find({}, 
			{fields: 
				{createdAt: 1, admin: 1, emails: 1, username: 1, first_name: 1, last_name: 1,
				 vendor: 1, dispo: 1, endorsers: 1}}); 
	}
});

