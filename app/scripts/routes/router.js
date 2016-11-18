/*global define*/

define([
	'jquery',
	'backbone',
	'templates',
	'controllers/common-controller',
	'controllers/landing-controller',
  'controllers/home-controller',
  'controllers/project-controller',
  'controllers/timeline-controller',
  'controllers/events-controller',
  'controllers/documents-controller',
  'controllers/team-controller',
  'controllers/contacts-controller'
], function ($, Backbone, JST, CommonContentController, LandingController, HomeController, ProjectController, TimelineController, EventsController, DocumentsController, TeamController, ContactsController) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			// ':category/:slug(/)':  	'_detail',
			':category(/)':     	'_category',
			'(/)':              	'_index'
		},

    spinner: JST['app/scripts/templates/components/spinner.hbs'],

		/**
		*   initialize - setup application's router
		*
		*   @public
		*/
		initialize: function () {

      if ( !App.Controllers.Common ) {
        App.Controllers.Common= new CommonContentController;
      }
      if ( !App.Controllers.Landing ) {
        App.Controllers.Landing = new LandingController;
      }
      if ( !App.Controllers.Home) {
        App.Controllers.Home = new HomeController;
      }
      if ( !App.Controllers.Project) {
        App.Controllers.Project = new ProjectController;
      }
      if ( !App.Controllers.Timeline) {
        App.Controllers.Timeline= new TimelineController;
      }
      if ( !App.Controllers.Events) {
        App.Controllers.Events = new EventsController;
      }
      if ( !App.Controllers.Documents) {
        App.Controllers.Documents = new DocumentsController;
      }
      if ( !App.Controllers.Team ) {
        App.Controllers.Team = new TeamController;
      }
      if ( !App.Controllers.Contacts) {
        App.Controllers.Contacts = new ContactsController;
      }
		},

    /**
     *	_index - render homepage listing all posts
     *
     *	@private
     *	@function
     */
    _index: function () {
      this._loading();

      if ( App.Views.Active ) {
        App.Views.Active.close();
        App.Views.Active = null;
      }

      if ( App.Views.Header ) {
        App.Views.Header.close();
        App.Views.Header = null;
      }

      if ( App.Views.HeroSection ) {
        App.Views.HeroSection.close();
        App.Views.HeroSection = null;
      }

      if ( App.Views.Footer ) {
        App.Views.Footer.close();
        App.Views.Footer = null;
      }


      App.Catg = 'landing';
      $('#app').addClass('landing');

      App.Vent.trigger('landing:index');

    },

		/**
		*   _loading - add an animated spinner to the app's main container
		*
		*   @private
		*   @function
		*/
		_loading: function () {
      //TODO: enable spinner later
      var _this = this;
      requestAnimationFrame(function () {
        App.Container.html(_this.spinner());
      });

		},

		/**
		*   _category - render post listing by category
		*
		*   @private
		*   @function
		*   @param {string} catg - category name/slug
		*/
		_category: function (catg) {
      App.Catg = catg;

      if ( App.Views.Active ) {
        App.Views.Active.close();
        App.Views.Active = null;
      }

			this._loading();
      $('#app').removeClass('landing');

      App.Vent.trigger('common:index', catg);

			if ( catg === 'home' ) {
				App.Vent.trigger('home:index', catg);
			} else
			if ( catg === 'project' ) {
				App.Vent.trigger('project:index', catg);
			} else
			if ( catg === 'timeline' ) {
				App.Vent.trigger('timeline:index', catg);
			} else
			if ( catg === 'events' ) {
				App.Vent.trigger('events:index', catg);
			} else
			if ( catg === 'documents' ) {
				App.Vent.trigger('documents:index', catg);
			}else
			if ( catg === 'team' ) {
				App.Vent.trigger('team:index', catg);
			} else
			if ( catg === 'contacts' ) {
				App.Vent.trigger('contacts:index', catg);
			}
		}

	});

	return Router;
});
