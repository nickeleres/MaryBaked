//client/views/admin/admin.js

Router.route('admin', {
	path: '/admin',
	template: 'adminTemplate',
	waitOn: function(){
		if(Meteor.user()){
			return Meteor.subscribe('users');
		}
	}
});

Template.adminTemplate.helpers({
	users: function(){
		return Meteor.users.find();
	},

	notAdmin: function(){
		var user_object = Meteor.users.find({_id: this._id}, {admin: 1}).fetch();
		var admin_status = user_object[0].admin;
		console.log(admin_status, 'admin_status');
		return admin_status != true;
	},

	notVendor: function(){
		var user_object = Meteor.users.find({_id: this._id}, {vendor: 1}).fetch();
		var vendor_status = user_object[0].vendor;
		console.log(vendor_status, 'vendor status');
		return vendor_status != true;
	},

	notDispo: function(){
		var user_object = Meteor.users.find({_id: this._id}, {dispo: 1}).fetch();
		var dispo_status = user_object[0].dispo;
		return dispo_status != true;
	}
});

Template.adminTemplate.events({
	'click .set_admin_status': function(ev){
		ev.preventDefault();

		var selected_user = Meteor.users.find({_id: this._id}).fetch();
		var current_user = Meteor.user();

		if(selected_user[0]._id != current_user._id){
			if(selected_user[0].admin === true){
				Meteor.call('removeAdminStatus', this._id);
			} else {
				Meteor.call('addAdminStatus', this._id);
			}
		} else {
			alert('You cannot change your own admin status');
		}
			
	},

	'click .set_vendor_status': function(ev){
		ev.preventDefault();

		var selected_user = Meteor.users.find({_id: this._id}).fetch();
		var current_user = Meteor.user();

		if(selected_user[0]._id != current_user._id){
			if(selected_user[0].admin === true){
				Meteor.call('removeVendorStatus', this._id);
			} else {
				Meteor.call('addVendorStatus', this._id);
			}
		} else {
			alert('You cannot change your own admin status');
		}



		// Meteor.call('addVendorStatus', this._id);
	}
});

