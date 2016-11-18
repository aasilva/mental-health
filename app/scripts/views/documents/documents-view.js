/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var DocumentsView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/documents/documents.hbs'],

    tagName: 'article',

    className: 'documents-view',

    events: {}

  });

  return DocumentsView;
});
