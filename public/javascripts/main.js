require([
	'backbone',
	'application',
	'regionManager'
],
function ( Backbone, App ) {
    'use strict';

	App.start();
	window.App = App;
});
