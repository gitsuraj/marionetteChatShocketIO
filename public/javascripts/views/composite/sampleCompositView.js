define([
	'backbone',
	'views/item/sampleItemView',
	'hbs!tmpl/composite/sampleCompositView_tmpl'
],
function( Backbone, Sampleitemview, SamplecompositviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Samplecompositview CompositeView");
		},
		
    	itemView: Sampleitemview,
    	
    	template: SamplecompositviewTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "",

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
