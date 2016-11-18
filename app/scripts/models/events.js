/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var EventsModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_post&post_type=events&slug=' + this.get('slug');
		},

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			var res = response.post || response;

      //deal with special characters
      var txt = document.createElement("textarea");
      txt.innerHTML = response.content;
      response.content = txt.value;

      txt.innerHTML = response.title;
      response.title= txt.value;

      //parse date with different formats needes
      response.when = response.custom_fields.when[0];
      response.day = response.custom_fields.when[0].split(',')[0].split(' ')[1];
      response.month = response.custom_fields.when[0].split(',')[0].split(' ')[0];

      //parse "where" to top level of the object
      response.where = response.custom_fields.where[0];


			return res;
		}
	});

	return EventsModel;
});
