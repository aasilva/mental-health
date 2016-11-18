/*global define*/

define([
	'jquery',
	'backbone',
  'views/team/team-view'
], function ($, Backbone, TeamView) {
	'use strict';

	var TeamController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('team:index', this._index, this);
		},

		/**
		*	_index - fetch and render first list of events
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*	@param {string} params (optional) - params to be searched
		*/
		_index: function (catg, params) {
			console.log('team controller');

      App.Views.Active = new TeamView;

      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
      });
		}

	});

	return TeamController;
});
