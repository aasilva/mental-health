/*global define*/

define([
	'underscore',
	'backbone',
	'models/documents'
], function (_, Backbone, EventsModel) {
	'use strict';

	var EventsCollection = Backbone.Collection.extend({
		url: function () {
      var count = this.count || 100;
      return App.BaseUrl + '?json=get_posts&post_type=documents&count=' + count;
		},
		model: EventsModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {

			return res.posts;
		}
	});

	return EventsCollection;
});
