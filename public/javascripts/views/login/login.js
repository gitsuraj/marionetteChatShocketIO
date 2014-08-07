define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'hbs!tmpl/login/login'
],
function( Backbone, Marionette, Communicator, loginViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a Login ItemView');
        },

        template: loginViewTmpl,

        /* Ui events hash */
        events: {
            'click a#loginBtn': 'login'
        },

        login: function(e) {
            e.preventDefault();
            var me = this,
                data = {'user':me.$el.find('#nameText').val()};
            me.trigger('user:login',data);
        }
    });
});