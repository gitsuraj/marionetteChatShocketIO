(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/sampleCollection'
		],
		function( Samplecollection ) {

			describe('Samplecollection Collection', function () {

				it('should be an instance of Samplecollection Collection', function () {
					var sampleCollection = new Samplecollection();
					expect( sampleCollection ).to.be.an.instanceof( Samplecollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );