(function() {
	'use strict';

	var root = this;

	root.define([
		'models/sampleModel'
		],
		function( Samplemodel ) {

			describe('Samplemodel Model', function () {

				it('should be an instance of Samplemodel Model', function () {
					var sampleModel = new Samplemodel();
					expect( sampleModel ).to.be.an.instanceof( Samplemodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );