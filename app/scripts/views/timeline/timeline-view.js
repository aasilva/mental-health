/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var TimelineView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/timeline/timeline.hbs'],

    tagName: 'div',

    className: 'timeline-view'

  });

  return TimelineView;
});
