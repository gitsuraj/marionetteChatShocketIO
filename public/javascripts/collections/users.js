define([
	'backbone',
	'models/user'
],
function( Backbone, UserModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a UsersList collection");
		},

		model: UserModel,
		url : '/regUsers',
		addUser : function(username){
			var me = this;
			me.add(new UserModel({name: username}));
		},
		removeUser : function(username){
			var me = this,
				user = me.find(function(item){
					return item.get('name') == username;
				});
			if(user){
				me.remove(user);
			}
		}
	});
});
