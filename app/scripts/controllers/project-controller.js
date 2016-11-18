/*global define*/

define([
	'jquery',
	'backbone',
  'views/project/project-view'
], function ($, Backbone, ProjectView) {
	'use strict';
	var ProjectController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('project:index', this._index, this);
		},

		/**
		*	_index - fetch and render first list of Members
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			console.log('ProjectController');

      App.Views.Active = new ProjectView;

      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
      });
		}

	});

	return ProjectController;
});
