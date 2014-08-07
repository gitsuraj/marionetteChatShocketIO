(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/register'
		],
		function( Register ) {

			describe('Register Router', function () {

				it('should be an instance of Register Router', function () {
					var register = new Register();
					expect( register ).to.be.an.instanceof( Register );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );