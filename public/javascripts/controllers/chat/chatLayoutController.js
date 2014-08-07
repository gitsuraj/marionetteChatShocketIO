define([
	'backbone',
	'jquery',
	'communicator',
	'views/composite/chatList',
	'views/composite/userList',
	'views/layout/chatLayout',
	'views/loading',
	'controllers/chat/chatController',
	'controllers/chat/userController',
	'entities/socketClient'
],
function( Backbone,$,Communicator,ChatListView,UserListView,ChatLayoutView,LoadingView,ChatController,UserController,SocketClient ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Samplecontroller Controller");
			var me = this;
			me.chatController = new ChatController();
			me.userController = new UserController();
		},
		listChatRecords : function(){
			var loadingView = new LoadingView(),
				me = this,
				fetchChatRecords = Communicator.reqres.request('chat:entities'),
				fetchUserList = Communicator.reqres.request('user:entities');
            Communicator.mediator.trigger('app:show', loadingView);
            var chatLayoutView = new ChatLayoutView();

            $.when(fetchChatRecords,fetchUserList).done(function(chats,users){
            	var userListView,
            		chatListView;
            		chatListView = new ChatListView({
            			collection : chats
            		});
            		userListView = new UserListView({
            			collection : users
            		});
            	chatListView.on('chat:send',me.sendChatMessage);
        		chatLayoutView.on('show',function(){
        			chatLayoutView.chatRegion.show(chatListView);
        			chatLayoutView.userlistRegion.show(userListView);
        		});
            	Communicator.mediator.trigger('app:show', chatLayoutView);
            });
		 },
		 sendChatMessage : function(message){
		 	//this connect command need to be changed when entry form login page is done
		 	//SocketClient.connect();
		 	SocketClient.chat(message);
		 	
		 }
	});

});
