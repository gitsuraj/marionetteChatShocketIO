define([
	'backbone',
	'hbs!tmpl/chat/item/chatItem'
],
function( Backbone, ChatItemTpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Sampleitemview ItemView");
		},
		bindings :{
			'.user-info' : {
				observe : 'sender'
			},
			'.msg-info' : {
				observe : 'message'
			}
		},
    	template: ChatItemTpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			this.stickit();
		}
	});

});
