
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

  var DocumentsPresentationsView = Backbone.CollectionView.extend({
    template: JST['app/scripts/templates/documents/documents-presentations.hbs'],

    className: 'documents-list-wrapper documents-presentations-view',

    events: {

    },

    subview: DocumentsItemView

  });

  return DocumentsPresentationsView;
});
