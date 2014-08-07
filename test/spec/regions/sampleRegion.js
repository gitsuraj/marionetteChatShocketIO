(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/sampleRegion'
		],
		function( Sampleregion ) {

			describe('Sampleregion Region', function () {

				it('should be an instance of Sampleregion Region', function () {
					var sampleRegion = new Sampleregion();
					expect( sampleRegion ).to.be.an.instanceof( Sampleregion );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );