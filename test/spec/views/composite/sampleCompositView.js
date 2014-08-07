(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/sampleCompositView'
		],
		function( Samplecompositview ) {

			describe('Samplecompositview Compositeview', function () {

				it('should be an instance of Samplecompositview Compositeview', function () {
					var sampleCompositView = new Samplecompositview();
					expect( sampleCompositView ).to.be.an.instanceof( Samplecompositview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );