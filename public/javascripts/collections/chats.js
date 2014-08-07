define([
	'backbone',
	'models/chat'
],
function( Backbone, ChatModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Chatlist collection");
		},

		model: ChatModel,
		url : 'json/chats.json',
		addChat : function(chat){
			var me = this;
			me.add(new ChatModel({sender: chat.sender, message: chat.message}));
		},
		removeChat : function(chat){
			
		}		
	});
});
