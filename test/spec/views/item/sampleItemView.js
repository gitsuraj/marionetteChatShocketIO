(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/sampleItemView'
		],
		function( Sampleitemview ) {

			describe('Sampleitemview Itemview', function () {

				it('should be an instance of Sampleitemview Itemview', function () {
					var sampleItemView = new Sampleitemview();
					expect( sampleItemView ).to.be.an.instanceof( Sampleitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );