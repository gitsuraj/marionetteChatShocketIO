define([
	'backbone',
	'communicator',
	'views/item/chat/chatItemView',
	'hbs!tmpl/chat/chatArea'
],
function( Backbone,Communicator, ChatItemView, ChatAreaTpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Samplecompositview CompositeView");
			var me = this;
			Communicator.mediator.on('chat:receive',me.updateChatMessage,me);
			Communicator.mediator.on('user:join',me.informNewUserJoin,me);
			Communicator.mediator.on('user:left',me.informUserLeft,me);
		},
		
    	itemView: ChatItemView,
    	
    	template: ChatAreaTpl,

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "#chatList",

		/* Ui events hash */
		events: {
			'click .send-chat' : 'sendChatMessage'
		},

		/* on render callback */
		onRender: function() {},
		sendChatMessage : function(e){
			e.preventDefault();
			var me = this,
				message = me.$el.find('#chatInput').val();
			setInterval(function(){
				me.trigger('chat:send',message);
			},500);
			me.$el.find('#chatInput').val('');
		},
		updateChatMessage : function(chat){
			var me = this;
			me.collection.addChat(chat);
		},
		informNewUserJoin : function(username){
			var me = this;
			me.collection.addChat({sender: "", message: username + " joined room." })
		},
		informUserLeft : function(username){
			var me = this;
			me.collection.addChat({sender: "", message: username + " left room." });
		}
	});

});
