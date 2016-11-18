/*global define*/

define([
	'jquery',
	'backbone',
  'views/contacts/contacts-view'
], function ($, Backbone, ContactsView) {
	'use strict';

	var ContactsController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('contacts:index', this._index, this);
		},

		/**
		*	_index - fetch and render first list of projects
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			console.log('contacts controller');
			this._renderIndex();
		},


		/**
		*	_renderIndex - fetch and render list of projects
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (callback) {
      App.Views.Active = new ContactsView;

      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
      });

      setTimeout(function () {
        var myCenter = new google.maps.LatLng(38.7645702,-9.1643116);

        var mapDiv = document.getElementById('map');

        var map = new google.maps.Map(mapDiv, {
          center: myCenter,
          zoom: 14
        });

        var marker=new google.maps.Marker({
          position:myCenter,
        });

        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
          content:"National School of Public Health (ENSP - UNL)"
        });
        infowindow.open(map,marker);

      }, 200)
		}

	});

	return ContactsController;
});
