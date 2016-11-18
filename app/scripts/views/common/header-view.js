/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var HeaderView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/common/header.hbs'],

    tagName: 'section',

    className: 'header-view',

    events: {
      'click #open-menu': '_onOpenMenuButtonClick',
      'click #close-menu img': '_onCloseMenuButtonClick'
    },

    _onOpenMenuButtonClick: function () {
      $('#menu').removeClass('invisible');
    },

    _onCloseMenuButtonClick: function () {
      $('#menu').addClass('invisible');
    }

  });

  return HeaderView;
});
