/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var TeamView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/team/team.hbs'],

    tagName: 'div',

    className: 'team-view'

  });

  return TeamView;
});
