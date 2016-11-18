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
    template: JST['app/scripts/templates/common/footer.hbs'],

    tagName: 'section',

    className: 'footer-view',

    events: {

    }

  });

  return HeaderView;
});
