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


      //parse date with different formats needes
      if (response.custom_fields) {
        if (response.custom_fields.file_url) {
          response.documentUrl = response.custom_fields.file_url[0];
        }
        if (response.custom_fields.file_url_pt) {
          response.documentUrlPt = response.custom_fields.file_url_pt[0];
        }

        if (response.custom_fields.when) {
          response.when = response.custom_fields.when[0];
        }
      }


			return res;
		}
	});

	return EventsModel;
});
