define([
	'backbone',
	'communicator',
	'collections/chats'
],
function( Backbone ,Communicator,ChatCollection) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var me = this;
			console.log("initialize a Chat Controller");
			Communicator.reqres.setHandler('chat:entities', function() {
            	return me.getChatEntities();
        	});
		},
		getChatEntities:function(){
            var chats = new ChatCollection();
            var defer = $.Deferred();
            chats.fetch({
                success: function(data) {
                    defer.resolve(data);
                }
            });
            // var promise = defer.promise();
            // $.when(promise).done(function(chats) {
            //     if (chats.length === 0) {
            //     	//No user online exist
            //     }
            // });

            return defer.promise();
		}
	});

});
