define([
	'backbone',
	'hbs!tmpl/item/sampleItemView_tmpl'
],
function( Backbone, SampleitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Sampleitemview ItemView");
		},
		
    	template: SampleitemviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
