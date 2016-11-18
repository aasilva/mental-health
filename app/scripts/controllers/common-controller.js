/*global define*/

define([
  'jquery',
  'backbone',
  'views/common/header-view',
  'views/common/hero-section-view',
  'views/common/footer-view',
  'views/common/alert-view'
], function ($, Backbone, HeaderView, HeroSectionView, FooterView, AlertView) {
  'use strict';

  var CommonController = Backbone.Router.extend({
    initialize: function () {
      App.Vent.on('common:index', this._index, this);
      App.Vent.on('common:header', this._header, this);
      App.Vent.on('common:heroSection', this._heroSection, this);
      App.Vent.on('common:footer', this._footer, this);
      App.Vent.on('common:alert', this._alert, this);
      App.Vent.on('global:scroll', this._onScroll, this);
    },


    _index: function (catg) {
      this._header(catg);
      this._footer(catg);
    },

    _onScroll: function () {
      var windowScroll = $(window).scrollTop();
      //var topSize = $('#hero-section').height() - $('.header-view').height();

      if (windowScroll >= 24) {
        $('#logo').addClass('compressed');
        $('#logo-small').removeClass('compressed');
      } else {
        $('#logo').removeClass('compressed');
        $('#logo-small').removeClass('compressed');
      }

    },
    /**
     *  _header
     *
     *  @private
     *  @function
     *  @param {string} catg - page context
     */
    _header: function (catg) {
      App.Views.Header = new HeaderView({
        catg: catg
      });
      requestAnimationFrame(function () {
        App.Header.html(App.Views.Header.render().el);
      });
      this._heroSection(catg);
    },

    /**
     *  _heroSection
     *
     *  @private
     *  @function
     *  @param {string} catg - page context
     */
    _heroSection: function (catg) {
      console.log('hero section render');

      requestAnimationFrame(function () {
        App.Views.HeroSection = new HeroSectionView({
          catg: catg
        });
        App.HeroSection.html(App.Views.HeroSection.render().el);
      });

    },

    /**
     *  _footer
     *
     *  @private
     *  @function
     */
    _footer: function () {
      App.Views.Footer = new FooterView();
      requestAnimationFrame(function () {
        App.Footer.html(App.Views.Footer.render().el);
      });
    },

    _alert: function (message, closeCallback) {
      var msg = message || 'Default message';

      App.Views.Alert = new AlertView({
        model: new Backbone.Model({
          message: msg
        })
      });

      App.Body.append(App.Views.Alert.render().el);

      if(closeCallback){
        App.Views.Alert.on("closed", closeCallback);
      }

    }

  });

  return CommonController;
});
