/**
*	@author André Silva
*	@version 1.0.0
*/
/*global define, App*/
define([
	'jquery',
	'underscore',
	'backbone',
	'helpers',
	'templates'
], function ($, _, Backbone, Helpers, JST) {// jshint unused:false
	'use strict';
	/**
	*	Adding base functionality to Backbone's default view
	*
	*	@exports Backbone.BaseView
	*	@extends Backbone.View
	*	@see module:Backbone.View
	*	@author André Silva
	*	@version 1.0.0
	*/
	Backbone.BaseView = Backbone.View.extend({
		subviews: [],
		initialize: function (data) {
      this.listenTo(App.i18n, 'change', this.render);

			if ( !this.model ) {
				this.model = new Backbone.Model;
			}

			/*if ( data ) { //AS - adicionei para poder passar parametros extra para dentro da view (não tenho a certeza se é a forma correcta)
				this.model.set('data', data, {silent: true});
			}*/
			this.listenTo(this.model, 'change', this.render);
		},
		render: function () {
			var data = {
        fid: App.FID,
        i18n: App.i18n.toJSON(),
        catg: App.Catg
      };

			if ( this.model ) {
				data.data = this.model.toJSON();
			}

			this.$el.html(this.template(data));
      this.afterRender();
			return this;
		},

    afterRender: function () {

    }

	});
});
