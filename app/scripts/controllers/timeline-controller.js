/*global define*/

define([
	'jquery',
	'backbone',
  'views/timeline/timeline-view'
], function ($, Backbone, TimelineView) {
	'use strict';

	var TimelineController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('timeline:index', this._index, this);

		},

		/**
		*	_index - fetch and render first list of about
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			console.log('timeline controller');
      App.Views.Active = new TimelineView;

      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
      });

		}
	});

	return TimelineController;
});
