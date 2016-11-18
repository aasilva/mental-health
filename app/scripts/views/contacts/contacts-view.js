/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var ContactsView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/contacts/contacts.hbs'],

    tagName: 'div',

    className: 'contacts-view',

    events: {
      'click #form-send': '_onSendEmailClick'
    },

    _onSendEmailClick: function (ev) {
      ev.preventDefault();

      var message = $('#form-message').val();
      var name = $('#form-name').val();
      var email = $('#form-email').val();

      if (!name.length) {

        App.Vent.trigger('common:alert', App.i18n.get('alert').nameRequired);

      } else if (!email.length) {

        App.Vent.trigger('common:alert', App.i18n.get('alert').emailRequired);

      } else if (!this._validateEmail(email)) {

        App.Vent.trigger('common:alert', App.i18n.get('alert').insertValidEmail);

      } else if (message.length < 2) {

        App.Vent.trigger('common:alert', App.i18n.get('alert').writeMessage);

      }
      else {

        this._sendEmail(name, email, message);

      }
    },

    _validateEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    _sendEmail: function(name, email, message) {
      //TODO: Change email at url
      $.ajax({
        url: "https://formspree.io/jperelman@ensp.unl.pt",
        type: 'POST',
        data: {
          name: name,
          replyto: email,
          message: message
        },
        dataType: "json",
        success: function (res) {/*jshint unused: false*/
          App.Vent.trigger('common:alert', App.i18n.get('alert').messageSent, function(){
            $('form').find("input, textarea").val("");
          });
        },
        error: function (model, xhr) {/*jshint unused: false*/
          console.log('model', model);
          console.log('xhr', xhr)
        }
      });


      console.log('done');
    }

  });

  return ContactsView;
});
