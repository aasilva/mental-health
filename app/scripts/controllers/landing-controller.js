/*global define, App*/
define([
	'jquery',
	'backbone',
	'views/landing/landing-view',
  'collections/events',
  'collections/documents'
], function ($, Backbone, LandingView, EventsCollection, DocumentsCollection) {
	'use strict';

  /**
	*	HomeController module.
	*	@module HomeController
	*	@see module:HomeController
	*
	*	@version 1.0.0
	*	@summary: handle home view creation and behaviour handling
	*/
	var HomeController = Backbone.Router.extend({

		/**
		*	initialize - setup alert event listeners and handlers
		*
		*	@author Andre Silva
		*	@public
		*	@function
		*	@this HomeController
		*/
		initialize: function () {
			App.Vent.on('landing:index', this._index, this);
			this._toggleHover();
		},


		/**
		*	_index - create and render home page
		*
		*	@private
		*	@function
		*/
		_index: function () {
      App.Views.Active = new LandingView;
      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
      });
		},

		/**
		*	_toggleHover - toggle the ability to hover elements upon scrolling (to increase performance)
		*
		*	@private
		*	@function
		*/
		_toggleHover: function () {
			window.addEventListener('scroll', function () {
				clearTimeout(this.TIMER);

				if(!App.Body.hasClass('disable-hover')) {
					App.Body.addClass('disable-hover');
				}

				this.TIMER = setTimeout(function(){
					App.Body.removeClass('disable-hover');
				},500);

				App.Vent.trigger('global:scroll');
			}, false);
		}
	});

	return HomeController;
});
