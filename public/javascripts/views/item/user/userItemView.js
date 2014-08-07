define([
	'backbone',
	'hbs!tmpl/chat/item/userItem'
],
function( Backbone, UserItemTpl) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Sampleitemview ItemView");
		},
		bindings : {
			'.online-user' : {
				observe : 'name'
			}
		},
		'modelEvents': {
		    'change': 'changeOnlineStatus'
		},
		
    	template: UserItemTpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},
		changeOnlineStatus : function(){
			this.render();
		},
		/* on render callback */
		onRender: function() {
			this.stickit();
		}
	});

});
