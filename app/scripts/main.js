/**
*	@author André Silva
*	@version 1.0.0
*	@summary: set-up webapps default namespace and objects
*/
/*global App*/
'use strict';

define([
	'backbone',
	'helpers',
	'handlebarsHelpers',
	'models/i18n',
	'routes/router',
	'loadcss'
], function(Backbone, BackboneHelpers, HandlebarsHelpers, I18n, Router, LoadCSS) {
	var baseFolder =  window.location.pathname;//.replace('/','').split('/')[0];

	// App Namespacing
	window.App = {
		Vent: _.extend({}, Backbone.Events),
		Views: {},
		Collections: {},
		Controllers: {},
		Models: {},
		Header: $('#header'),
		HeroSection: $('#hero-section'),
		Container: $('#app'),
		Footer: $('#footer'),
		//BaseUrl: 'http://eeagrantsbackend.ensp.unl.pt/'//EDITAR ISTO PARA APONTAR PARA A INSTALAÇÃO DE WP
		BaseUrl: 'http://www.aasilva.com/mental-health/backend/'//EDITAR ISTO PARA APONTAR PARA A INSTALAÇÃO DE WP
		//BaseUrl: 'http://cisp.ensp.unl.pt/'
	};

	// Setup DOM manipulation "entry-points"
	App.Window = window;
	App.Document = App.Window.document;
	App.ContainerHeight = App.Window.innerHeight;
	App.Body = $(App.Document.body);

  App.User = undefined;
  App.Catg = undefined;

	// Setup Backbone Events
	App.Vent = _.extend({}, Backbone.Events);

	// Setup App Default Entry Route
	App.defaultFirstRoute = '';

	// Setup App Default Page title
	App.defaultTitle = 'Mental Health';

	// Setup App SEO
	App.enableSEO = false;

	// Setup App Internationalization Model
  App.defaultLanguage = 'pt_PT';


  //if is hash based
  App.FID = '#';

  App.i18n = new I18n;
  App.i18n.fetch().then(function () {
    // Setup App Router
    App.Router = new Router;
    Backbone.history.start({// ONLY ACTIVATE PUSHSTATE WHEN IN PRD ENV
      // pushState: true,
      // hashChange: false,
      // root: baseFolder
    });

  });

	// Setup App User Model
	// App.User.fetch().then(function () {
		// Load main stylesheet asyncronously
		new LoadCSS('styles/main.css');
		new LoadCSS('https://fonts.googleapis.com/css?family=Ubuntu:300,700');
		new LoadCSS('https://fast.fonts.net/cssapi/e531f87f-9101-4e94-963c-77221af84e32.css?ver=1');


	// });
});
