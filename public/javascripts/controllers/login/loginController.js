define([
	'backbone',
	'communicator',
	'views/login/login',
	'entities/socketClient'
],
function( Backbone,Communicator, loginShowView,SocketClient) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Samplecontroller Controller");
		},
		checkValidUser : function(userObject){
			SocketClient.connect();
			SocketClient.login(userObject['user']);
		},
		showLogin: function() {
            var view = new loginShowView(),
            	me = this;
            view.on('user:login',me.checkValidUser)
            Communicator.mediator.trigger('app:show', view);
        },
        loginDone : function(user){
        	App.navigate('#chats',{'name':user});
        	Communicator.mediator.trigger('user:enter');
        }
	});

});
