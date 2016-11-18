/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var ProjectView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/project/project.hbs'],

    tagName: 'div',

    className: 'project-view'

  });

  return ProjectView;
});
