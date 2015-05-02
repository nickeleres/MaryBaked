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
		return Meteor.users.find({'dispo' : true});
	},

	endorsers: function(){
		var dispos = Meteor.users.find({_id: this._id}).fetch();

		if(dispos[0].endorsers != undefined){
			var endorsers = dispos[0].endorsers;

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