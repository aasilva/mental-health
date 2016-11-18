/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var AlertView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/common/alert.hbs'],

    tagName: 'div',

    className: 'alert-view',

    events: {
      'click': '_dismiss'
    },

    _dismiss: function () {
      this.close();
    }

  });

  return AlertView;
});

