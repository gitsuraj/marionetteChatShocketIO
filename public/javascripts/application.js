define([
	'backbone',
	'underscore',
	'communicator',
	'regions/dialog',
	'routers/register',
    'routers/chat'
],

function( Backbone,_, Communicator,DialogRegion, RegisterRouter,ChatRouter ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		headerRegion: '#header-region',
        mainRegion: '#main-region',
        dialogRegion: DialogRegion.extend({
            el: '#dialog-region'
        })
	});

    App.navigate = function(route, options){
        if (!options) {
            options = {};
        }
        Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function() {
        return Backbone.history.fragment;
    };
    	
    /* Add initializers here */
	App.addInitializer( function () {
		var registerRouter = new RegisterRouter();
        var chatRouter = new ChatRouter();
		Communicator.mediator.trigger("APP:START");

		Communicator.mediator.on('app:show', function(view) {
            App.mainRegion.show(view);
        });

        Communicator.mediator.on('app:dialog', function(view) {
            App.dialogRegion.show(view);
        });

        Communicator.mediator.on('app:header', function(view) {
            App.headerRegion.show(view);
        });

	});

    App.on('initialize:after', function() {
        if (Backbone.history) {
            Backbone.history.start({
                pushState: false
            });

            if (this.getCurrentRoute() === '') {
                //default page trigger !!
            }
        }

        Communicator.mediator.trigger("APP:START");
    });

	return App;
});
