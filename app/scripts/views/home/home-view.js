/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var HomeView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/home/home.hbs'],

    tagName: 'div',

    className: 'home-view',

    events: {
      'click .show-hide-button': '_onToggleDescriptionClick'
    },

    _onToggleDescriptionClick: function (ev) {
      var target = $(ev.currentTarget);

      target.parent().toggleClass('compressed');
    }

  });

  return HomeView;
});
