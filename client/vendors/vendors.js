//client/views/vendors.js

Router.route('vendors', {
	path: '/vendors',
	template: 'vendorsTemplate',
	waitOn: function(){
		return Meteor.subscribe('vendors');
	}
});

Template.vendorsTemplate.helpers({
	vendors: function(){
		return Meteor.users.find();
	}
});