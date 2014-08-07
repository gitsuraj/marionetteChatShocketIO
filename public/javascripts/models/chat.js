define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Chat model");
		},

		defaults: {
			'sender':'',
			'message' : 'MI Chat Server v.0.01'
		}

    });
});
