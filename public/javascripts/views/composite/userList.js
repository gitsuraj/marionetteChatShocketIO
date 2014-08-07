define([
	'backbone',
	'communicator',
	'views/item/user/userItemView',
	'hbs!tmpl/chat/onlineUserList'
],
function( Backbone,Communicator, UserItemView, UserList  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Samplecompositview CompositeView");
			var me = this;
			Communicator.mediator.on('users:online',me.updateOnlineUserList,me);
		},
		
    	itemView: UserItemView,
    	
    	template: UserList,

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: '#userList',

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {},
		updateOnlineUserList : function(users){
			var me = this;
			_.each(me.collection.models,function(model,index){
				if(_.indexOf(users,model.get('name')) !== -1){
					model.set({'isOnline':true});
				}else{
					model.set({'isOnline':false});
				}
			});
		}
	});

});
