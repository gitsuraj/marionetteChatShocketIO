define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a User model");
		},

		defaults: {
			'name':'default',
			'isOnline':false
		}

    });
});
