/*global define*/

define([
	'jquery', 'backbone',
  'collections/documents',
  'views/documents/documents-view',
  'views/documents/documents-presentations-view',
  'views/documents/documents-reports-view',
  'views/documents/documents-theory-view'
], function ($, Backbone,
             DocumentsCollection,
             DocumentsListView,
             PresentationsListView,
             ReportsListView,
             TheoryListView) {
	'use strict';

	var DocumentsController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('documents:index', this._index, this);
		},

		/**
		*	_index - fetch and render first list of pages
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
      console.log('documents contoller');

      App.Collections.Documents = new DocumentsCollection;
      App.Collections.Documents.catg = catg;

      App.Views.Active = new DocumentsListView;
      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
        App.Vent.trigger('global:scroll');
      });
      this._renderLists();

		},

    /**
     *	_renderIndex - fetch and render list of news
     *
     *	@private
     *	@function
     */
    _renderLists: function (searchParams, callback) {
      var _this = this;
      App.Collections.Documents.fetch({
        remove: false,
        success: function (res) {
          requestAnimationFrame(function () {
            var presentationsDocuments = new Backbone.Collection(App.Collections.Documents.filter(function(model) {
              return !!(_.findWhere(model.get('categories'), {title: 'presentations'}));
            }));
            _this._renderPresentationsDocuments(presentationsDocuments);

            var reportsDocuments = new Backbone.Collection(App.Collections.Documents.filter(function(model) {
              return !!(_.findWhere(model.get('categories'), {title: 'reports'}));
            }));
            _this._renderReportsDocuments(reportsDocuments);

            var theoryDocuments = new Backbone.Collection(App.Collections.Documents.filter(function(model) {
              return !!(_.findWhere(model.get('categories'), {title: 'theory'}));
            }));
            _this._renderTheoryDocuments(theoryDocuments);

          });
        },
        error: function (res, err) {
          requestAnimationFrame(function () {
            App.Container.html(App.Views.Active.render().el);
            if ( callback ) {
              callback();
            }
          });
        }
      });
    },

    _renderPresentationsDocuments: function (members) {
      App.Views.PresentationsDocuments = new PresentationsListView({
        collection: members
      });
      requestAnimationFrame(function () {
        $('#documents-presentations').html(App.Views.PresentationsDocuments.render().el);
      });
    },

    _renderReportsDocuments: function (members) {
      App.Views.ReportsDocuments = new ReportsListView({
        collection: members
      });
      requestAnimationFrame(function () {
        $('#documents-reports').html(App.Views.ReportsDocuments.render().el);
      });
    },

    _renderTheoryDocuments: function (members) {
      App.Views.TheoryDocuments = new TheoryListView({
        collection: members
      });
      requestAnimationFrame(function () {
        $('#documents-theory').html(App.Views.TheoryDocuments.render().el);
      });
    }


	});

	return DocumentsController;
});
