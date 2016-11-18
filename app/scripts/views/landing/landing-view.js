/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var LandingView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/landing/landing-view.hbs'],

    tagName: 'div',

    className: 'landing-view',

    events: {
      'click a': '_handleLink'
    },

    _handleLink: function(ev){
      App.User = true;

    }

  });

  return LandingView;
});
