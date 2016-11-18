/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var DocumentsItemView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/documents/documents-item.hbs'],

    tagName: 'article',

    className: 'documents-item-view',

    events: {}

  });

  return DocumentsItemView;
});
