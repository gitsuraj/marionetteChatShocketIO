define([
	'backbone',
	'hbs!tmpl/layout/chatlayout'
],
function( Backbone, ChatLayout  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Samplelayout Layout");
		},
		
    	template: ChatLayout,
    	

    	/* Layout sub regions */
    	regions: {
    		chatRegion : '#chat-region',
    		userlistRegion : '#user-list'
    	},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
