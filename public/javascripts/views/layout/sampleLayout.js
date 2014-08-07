define([
	'backbone',
	'hbs!tmpl/layout/sampleLayout_tmpl'
],
function( Backbone, SamplelayoutTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Samplelayout Layout");
		},
		
    	template: SamplelayoutTmpl,
    	

    	/* Layout sub regions */
    	regions: {},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
