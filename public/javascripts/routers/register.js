define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'controllers/login/loginController'
],
function(Backbone, Marionette, Communicator, LoginController) {
    'use strict';

    return Marionette.AppRouter.extend({
        initialize: function(option) {
            var me = this;

            me.loginController = new LoginController();
            Communicator.mediator.on('user:loginDone', function(user) {
                me.loginController.loginDone(user);
            });

        },

        routes: {
            'login': 'ShowLoginView'
        },

        ShowLoginView: function() {
            this.loginController.showLogin();
        }
    });
});