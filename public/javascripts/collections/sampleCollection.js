define([
	'backbone',
	'models/sampleModel'
],
function( Backbone, Samplemodel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Samplecollection collection");
		},

		model: Samplemodel
		
	});
});
