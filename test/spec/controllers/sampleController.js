(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/sampleController'
		],
		function( Samplecontroller ) {

			describe('Samplecontroller Controller', function () {

				it('should be an instance of Samplecontroller Controller', function () {
					var sampleController = new Samplecontroller();
					expect( sampleController ).to.be.an.instanceof( Samplecontroller );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );