
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

  var DocumentsTheoryView = Backbone.CollectionView.extend({
    template: JST['app/scripts/templates/documents/documents-theory.hbs'],

    className: 'documents-list-wrapper documents-theory-view',

    events: {

    },

    subview: DocumentsItemView

  });

  return DocumentsTheoryView;
});
