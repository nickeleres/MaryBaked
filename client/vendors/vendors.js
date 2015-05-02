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
		return Meteor.users.find({vendor: true});
	},

	endorsers: function(){
		var vendors = Meteor.users.find({_id: this._id}).fetch();

		if(vendors[0].endorsers != undefined){
			var endorsers = vendors[0].endorsers;

			console.log(endorsers);

			var endorser_username_array = [];
			for(var i = 0; i < endorsers.length; i++){
				console.log(endorsers.length);
				var single_endorser = Meteor.users.find({_id : endorsers[i]}).fetch();

	 			var single_endorser_object = single_endorser[0];

	 			console.log(single_endorser_object);

	 			endorser_username_array.push(single_endorser_object);
				
			}

			console.log(endorser_username_array);

			return endorser_username_array;
		}	
	}
});