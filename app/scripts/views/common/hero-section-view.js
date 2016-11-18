/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var HeroSectionView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/common/hero-section.hbs'],

    tagName: 'div',

    className: function () {

      return 'hero-section-view ' + App.Catg;
    },

    events: {

    },

    afterRender: function () {

    }

  });

  return HeroSectionView;
});
