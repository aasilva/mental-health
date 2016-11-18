/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var EventsItemView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/events/events-item.hbs'],

    tagName: 'article',

    className: 'events-item-view',

    events: {}

  });

  return EventsItemView;
});
