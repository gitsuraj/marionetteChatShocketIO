define([
	'backbone',
	'views/item/sampleItemView'
],
function( Backbone, Sampleitemview  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a Sampleview CollectionView");
		},
		
    	itemView: Sampleitemview,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
