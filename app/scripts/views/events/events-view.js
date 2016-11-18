/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/events/events-item-view',
  'collectionview'
], function ($, _, Backbone, JST, EventsItemView) {
  'use strict';

  var EventsIndexView = Backbone.CollectionView.extend({
    template: JST['app/scripts/templates/events/events.hbs'],

    className: 'events-view',

    events: {

    },

    subview: EventsItemView

  });

  return EventsIndexView;
});
