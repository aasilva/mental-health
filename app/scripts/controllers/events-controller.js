/*global define*/

define([
	'jquery',
	'backbone',
  'collections/events',
  'views/events/events-view'
], function ($, Backbone, EventsCollection, EventsListView) {
	'use strict';

	var EventsController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('events:index', this._index, this);
		},

		/**
		*	_index - fetch and render first list of News
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*	@param {string} params (optional) - params to be searched
		*/
		_index: function (catg) {
      App.Collections.Events = new EventsCollection;
      App.Collections.Events.catg = catg;

      App.Views.Active = new EventsListView({
        collection: App.Collections.Events,
        target: '#events-list'
      });

			this._renderIndex();
		},


		/**
		*	_renderIndex - fetch and render list of news
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (searchParams, callback) {
      App.Collections.Events.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
						App.Vent.trigger('global:scroll');

						if ( callback ) {
							callback();
						}
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
		}

	});

	return EventsController;
});
