//client/views/dispos.js

Router.route('dispos', {
	path: '/dispos',
	template: 'disposTemplate',
	waitOn: function(){
		return Meteor.subscribe('dispos');
	}
});

Template.disposTemplate.helpers({
	dispos: function(){
		return Meteor.users.find();
	}
});