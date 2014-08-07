define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'controllers/chat/userController',
    'controllers/chat/chatLayoutController'
],
function(Backbone, Marionette, Communicator, UserController, ChatLayoutController) {
    'use strict';

    return Marionette.AppRouter.extend({
        initialize: function(option) {
            var me = this;
            me.chatLayoutController = new ChatLayoutController();
            me.userController = new UserController();
            Communicator.mediator.on('user:enter', function(user) {
                me.chatLayoutController.listChatRecords();
               // me.userController.addUser(user);
            });
        },

        routes: {
            'chats': 'ShowChatView'
        },

        ShowChatView: function() {
            this.chatLayoutController.listChatRecords();
        }
    });
});