define([
	'backbone',
	'communicator',
	'socket_io'
],
function( Backbone, Communicator,io ) {
    'use strict';

	var socketClient = Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("Initialize a Socket Manager");
			var me = this;
			me.hostname = 'http://192.168.1.137:3000';
		},
		connect : function(){
			var me = this;
			me.socket = io.connect(me.hostname);
			me.setResponseListeners(me.socket);
		},
		setResponseListeners : function(socket){
			socket.on('welcome',function(data){
				socket.emit('onlineUsers');
				Communicator.mediator.trigger('user:loginDone', data);
			});

			socket.on('onlineUsers', function(data) {
				//console.log("Online Users",data);
				Communicator.mediator.trigger('users:online', data);
			});

			socket.on('userJoined', function(data) {
				//console.log("UserJoined",data);
				Communicator.mediator.trigger('user:join', data);
				socket.emit('onlineUsers');
			});

			socket.on('userLeft', function(data) {
				//console.log("UserLeft",data);
				Communicator.mediator.trigger('user:left', data);
				socket.emit('onlineUsers');
			});

			socket.on('chat', function(data) {
				//console.log("Chat received",data);
				Communicator.mediator.trigger('chat:receive', data);
			});
		},
		login : function(name){
			var me = this;
			me.socket.emit('login', name);
		},
		logout : function(name){
			//Logout from chat room
		},
		chat : function(chat) {
			var me = this;
		    me.socket.emit('chat', chat);
		}
	});

	return new socketClient();
});
