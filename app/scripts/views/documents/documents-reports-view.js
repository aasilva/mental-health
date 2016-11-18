
/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/documents/documents-item-view',
  'collectionview'
], function ($, _, Backbone, JST, DocumentsItemView) {
  'use strict';

  var DocumentsReportsView = Backbone.CollectionView.extend({
    template: JST['app/scripts/templates/documents/documents-reports.hbs'],

    className: 'documents-list-wrapper documents-reports-view',

    events: {

    },

    subview: DocumentsItemView

  });

  return DocumentsReportsView;
});
