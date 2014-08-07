(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/sampleView'
		],
		function( Sampleview ) {

			describe('Sampleview Collectionview', function () {

				it('should be an instance of Sampleview Collectionview', function () {
					var sampleView = new Sampleview();
					expect( sampleView ).to.be.an.instanceof( Sampleview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );