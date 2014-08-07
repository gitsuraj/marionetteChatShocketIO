define([
	'backbone',
	'communicator',
	'collections/users'
],
function( Backbone ,Communicator,UserCollection) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var me = this;
			console.log("initialize a User Controller");
			Communicator.reqres.setHandler('user:entities', function() {
            	return me.getUserEntities();
        	});
		},
		getUserEntities: function(){
            var users = new UserCollection();
            var defer = $.Deferred();
            users.fetch({
                success: function(data) {
                    defer.resolve(data);
                }
            });
            // var promise = defer.promise();
            // $.when(promise).done(function(users) {
            //     if (users.length === 0) {
            //     	//No user online exist
            //     }
            // });

            return defer.promise();
        }
	});

});