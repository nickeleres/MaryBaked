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
		return admin_status != true;
	},

	notVendor: function(){
		var user_object = Meteor.users.find({_id: this._id}, {vendor: 1}).fetch();
		var vendor_status = user_object[0].vendor;
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

		if(selected_user[0].vendor === true){
			Meteor.call('removeVendorStatus', this._id);
		} else {
			Meteor.call('addVendorStatus', this._id);
		}
	},

	'click .set_dispo_status': function(ev){
		ev.preventDefault();

		var selected_user = Meteor.users.find({_id: this._id}).fetch();
		var current_user = Meteor.user();

		if(selected_user[0].dispo === true){
			Meteor.call('removeDispoStatus', this._id);
		} else {
			Meteor.call('addDispoStatus', this._id);
		}
	},

	'click .edit_user_button': function(ev, template){
		ev.preventDefault();

		var id = this._id;

		var edit_fields = template.$('.' + id);

		if(edit_fields.css('display', 'none')){
			edit_fields.css('display', 'inline-block');
		} else {
			edit_fields.css('display', 'none');
		}
	},

	'click .update_username': function(ev, template){
		ev.preventDefault();

		var id = this._id;

		// var test_field = template.$("input[class=' + id + '][name='username']").val();

		// var test_field = template.$('input[class="' + id + '"]').val();

		var test_field = $('.' + id).val();

		console.log(test_field);

		// var username_field = template.$('input[class="username_field"]').val();

		console.log(this._id);

		Meteor.call('updateUsername', this._id, test_field);

	},
});








