//client/router.js

Router.configure({
	layoutTemplate: 'layoutTemplate'
});


var adminLogin;

adminLogin = {
	loginRequired: function(){
		if(!Meteor.userId()){
			this.render('loginTemplate');
		} else {
			this.next();
		}
	}
};

Router.onBeforeAction(adminLogin.loginRequired, {
	only: 'admin'
});