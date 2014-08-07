(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/sampleLayout'
		],
		function( Samplelayout ) {

			describe('Samplelayout Layout', function () {

				it('should be an instance of Samplelayout Layout', function () {
					var sampleLayout = new Samplelayout();
					expect( sampleLayout ).to.be.an.instanceof( Samplelayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );