define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/common/alert.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert-view-wrapper\">\n\n    <div class=\"alert-view-wrapper-message\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    <div id=\"alert-button\" class=\"alert-view-wrapper-button\">OK</div>\n\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/common/footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"banner\">\n    <a href=\"http://eeagrants.org/\" target=\"_blank\">\n        <img src=\"images/organizations/logo_eea.png\" alt=\"logo eea\">\n    </a>\n    <a href=\"http://www.fcm.unl.pt/\" target=\"_blank\">\n        <img src=\"images/organizations/logo_unl.png\" alt=\"logo eea\">\n    </a>\n    <a href=\"http://www.ensp.unl.pt/\" target=\"_blank\">\n        <img src=\"images/organizations/logo_ensp.png\" alt=\"logo eea\">\n    </a>\n</div>\n<div class=\"footer-view-container\">\n    <div class=\"footer-wrapper\">\n        <div class=\"phone\">\n          "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </div>\n        <div class=\"email\">\n          "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </div>\n        <div class=\"address\">\n          "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </div>\n    </div>\n    <div class=\"footer-wrapper contacts\">\n        <div class=\"phone-widget\">\n            <a href=\"tel:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.phoneReadyToCall)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                <img src=\"images/icons/phone-outline.png\" alt=\"phone icon\">\n            </a>\n        </div>\n        <div class=\"email-widget\">\n            <a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.contacts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                <img src=\"images/icons/email-outline.png\" alt=\"email icon\">\n            </a>\n        </div>\n        <div class=\"facebook-widget\">\n            <a href=\"https://facebook.com/mentalhealthportugal\" target=\"_blank\">\n                <img src=\"images/icons/facebook-outline.png\" alt=\"facebook icon\">\n            </a>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/common/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div class=\"header-container\">\n\n    <div class=\"logo-container\">\n        <div id=\"logo\" class=\"logo\">\n            <a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.home)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"logo-img\">Mental Health</a>\n            <!--<img src=\"images/logo-header-en.png\" alt=\"logo header english version\">-->\n        </div>\n    </div>\n\n    <div class=\"menu-button\" id=\"open-menu\">\n        <img src=\"images/icons/ic_menu_black.svg\" alt=\"hamburguer menu icon\">\n    </div>\n\n    <div class=\"menu invisible\" id=\"menu\">\n        <div class=\"close\" id=\"close-menu\">\n            <img src=\"images/icons/ic_close_black.svg\" alt=\"close menu icon\">\n        </div>\n        <ul  class=\"menu-navigation\">\n            <li class=\"menu-navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "home", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "home", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.home)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.home)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li class=\"menu-navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "project", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "project", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.project)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.project)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li class=\"menu-navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "timeline", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "timeline", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.timeline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.timeline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li class=\"menu-navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "events", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "events", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.events)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.events)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li class=\"menu-navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "documents", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "documents", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.documents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.documents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li class=\"menu-navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "team", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "team", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.team)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.team)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li class=\"menu-navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "contacts", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "contacts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.contacts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.contacts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        </ul>\n    </div>\n\n    <ul id=\"navigation\" class=\"navigation\">\n        <li class=\"navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "home", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "home", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.home)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.home)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        <li class=\"navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "project", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "project", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.project)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.project)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        <li class=\"navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "timeline", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "timeline", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.timeline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.timeline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        <li class=\"navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "events", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "events", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.events)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.events)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        <li class=\"navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "documents", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "documents", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.documents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.documents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        <li class=\"navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "team", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "team", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.team)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.team)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        <li class=\"navigation-item ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.catg), "===", "contacts", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.catg), "===", "contacts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.contacts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.contacts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n    </ul>\n\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/common/hero-section.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"map\" class=\"map\"></div>\n";
  });

this["JST"]["app/scripts/templates/components/spinner.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"spinner\"><div class=\"signal\"></div></div>";
  });

this["JST"]["app/scripts/templates/contacts/contacts.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"top-bar\"></div>\n\n<div class=\"container\">\n  <div class=\"wrapper\">\n      <h1 class=\"page-title\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.contactsTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n      <div class=\"phone\">\n          <img src=\"images/icons/phone.svg\" alt=\"phone icon\">\n          <a href=\"tel:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.phoneReadyToCall)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n      </div>\n      <div class=\"email\">\n          <img src=\"images/icons/email.svg\" alt=\"email icon\">\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <div class=\"address\">\n          <img src=\"images/icons/locale.svg\" alt=\"address icon\">\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <div class=\"facebook-url\">\n          <img src=\"images/icons/facebook.svg\" alt=\"facebook icon\">\n          <a href=\"https://"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.facebookUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.facebookUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n      </div>\n\n  </div>\n\n  <div class=\"wrapper form\">\n      <form>\n          <label for=\"name\" class=\"form-name-label\">\n              <p>Name</p>\n              <input type=\"text\" name=\"name\" id=\"form-name\" class=\"form-name-input\" placeholder=\"Your name\">\n          </label>\n\n          <label for=\"email\" class=\"form-email-label\">\n              <p>Email</p>\n              <input type=\"email\" name=\"_replyto\" id=\"form-email\" class=\"form-email\" placeholder=\"Your email\">\n          </label>\n\n          <label for=\"message\" class=\"form-message-label\">\n              <p>Message</p>\n              <textarea name=\"message\" id=\"form-message\" class=\"form-message\" placeholder=\"Your message here...\"> </textarea>\n          </label>\n\n          <input type=\"submit\" id=\"form-send\" class=\"form-send\" value=\"Send\">\n      </form>\n  </div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/documents/documents-item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.documentUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" title=\"download document\">\n              <img src=\"images/icons/download.svg\" alt=\"download document icon\">\n              <p>("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.englishVersion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</p>\n          </a>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.documentUrlPt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" title=\"download document portuguese version\">\n              <img src=\"images/icons/download.svg\" alt=\"download document icon\">\n              <p>("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.portugueseVersion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</p>\n          </a>\n      ";
  return buffer;
  }

  buffer += "<div class=\"document-icon\">\n    <img src=\"images/icons/documents.png\" alt=\"download document icon\">\n</div>\n\n<div class=\"document-title\">\n    <p>"
    + escapeExpression((helper = helpers.noHTML || (depth0 && depth0.noHTML),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.content), options) : helperMissing.call(depth0, "noHTML", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.content), options)))
    + " <br> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"document-download\">\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.documentUrl), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.documentUrlPt), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/documents/documents-presentations.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"document-list-title\">\n    <h2>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "presentations", options) : helperMissing.call(depth0, "t", "presentations", options)))
    + "</h2>\n    <div class=\"line\"></div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/documents/documents-reports.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"document-list-title\">\n    <h2>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "reports", options) : helperMissing.call(depth0, "t", "reports", options)))
    + "</h2>\n    <div class=\"line\"></div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/documents/documents-theory.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"document-list-title\">\n    <h2>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "theory", options) : helperMissing.call(depth0, "t", "theory", options)))
    + "</h2>\n    <div class=\"line\"></div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/documents/documents.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"title-wrapper\">\n  <h1 class=\"page-title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "documentsTitle", options) : helperMissing.call(depth0, "t", "documentsTitle", options)))
    + "</h1>\n</div>\n\n<section id=\"documents-list\" class=\"documents-list\">\n    <div id=\"documents-presentations\" class=\"documents-list-section large\">\n      \n    </div>\n\n    <div id=\"documents-reports\" class=\"documents-list-section\">\n      \n    </div>\n\n    <div id=\"documents-theory\" class=\"documents-list-section\">\n      \n    </div>\n</section>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/events/events-item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "\n\n<div class=\"description\">"
    + escapeExpression((helper = helpers.noHTML || (depth0 && depth0.noHTML),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.content), options) : helperMissing.call(depth0, "noHTML", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.content), options)))
    + "</div>\n\n<div class=\"info\">\n    <div class=\"when\">\n        <div class=\"icon\"></div>\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </div>\n    <div class=\"where\">\n        <div class=\"icon\"></div>\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.where)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/events/events.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"title-wrapper\">\n  <h1 class=\"page-title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "eventsTitle", options) : helperMissing.call(depth0, "t", "eventsTitle", options)))
    + "</h1>\n</div>\n\n<section id=\"events-list\" class=\"events-list\">\n</section>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"divider\"></div>\n      <div class=\"date\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n      <p class=\"description events compressed\">\n        "
    + escapeExpression((helper = helpers.noHTML || (depth0 && depth0.noHTML),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.content), options) : helperMissing.call(depth0, "noHTML", (depth0 && depth0.content), options)))
    + "\n        <span class=\"show-hide-button\"></span>\n      </p>\n  ";
  return buffer;
  }

  buffer += "<article class=\"home-block\">\n    <h1>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "welcomeTitle", options) : helperMissing.call(depth0, "t", "welcomeTitle", options)))
    + "</h1>\n    <div class=\"divider\"></div>\n    <div class=\"subtitle\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.titleFull)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    <p class=\"description\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.tagline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n</article>\n\n<article class=\"home-block lighter\">\n    <h1><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.events)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "eventsTitle", options) : helperMissing.call(depth0, "t", "eventsTitle", options)))
    + "</a></h1>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n\n<articlie class=\"home-block\">\n    <h1><a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.timeline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timelineTitle", options) : helperMissing.call(depth0, "t", "timelineTitle", options)))
    + "</a></h1>\n    <div class=\"divider\"></div>\n    <div class=\"date\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timeline09date", options) : helperMissing.call(depth0, "t", "timeline09date", options)))
    + "</div>\n    <p class=\"description\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timeline09", options) : helperMissing.call(depth0, "t", "timeline09", options)))
    + "</p>\n\n    <div class=\"divider\"></div>\n    <div class=\"date\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timeline10date", options) : helperMissing.call(depth0, "t", "timeline10date", options)))
    + "</div>\n    <p class=\"description\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timeline10", options) : helperMissing.call(depth0, "t", "timeline10", options)))
    + "</p>\n\n    <div class=\"divider\"></div>\n    <div class=\"date\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timeline11date", options) : helperMissing.call(depth0, "t", "timeline11date", options)))
    + "</div>\n    <p class=\"description\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timeline11", options) : helperMissing.call(depth0, "t", "timeline11", options)))
    + "</p>\n</articlie>\n\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/icons/ic_arrow-right.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_clock.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n	<g>\n		<path fill=\"#FFFFFF\" d=\"M0,24c0-8,0-16,0-24c8,0,16,0,24,0c0,8,0,16,0,24C16,24,8,24,0,24z M12.1,2.4c-5.3,0-9.6,4.3-9.7,9.6\n			c0,5.4,4.3,9.6,9.5,9.7c5.4,0.1,9.8-4.2,9.8-9.5C21.8,6.8,17.4,2.4,12.1,2.4z\"/>\n		<path d=\"M12.1,2.4c5.3,0,9.7,4.4,9.7,9.8c-0.1,5.3-4.4,9.6-9.8,9.5c-5.2-0.1-9.5-4.3-9.5-9.7C2.4,6.7,6.7,2.4,12.1,2.4z\n			 M19.6,12.1c0-4.1-3.3-7.5-7.4-7.6C8,4.4,4.5,7.9,4.5,12.1c0,4.2,3.4,7.6,7.5,7.5C16.2,19.6,19.6,16.2,19.6,12.1z\"/>\n		<path fill=\"#FFFFFF\" d=\"M19.6,12.1c0,4.2-3.4,7.5-7.5,7.5c-4.2,0-7.5-3.4-7.5-7.5c0-4.2,3.5-7.6,7.7-7.5\n			C16.3,4.6,19.6,8,19.6,12.1z M10.5,12.4c0,1,0.6,1.5,1.4,1.4c2-0.3,4-0.6,6-1c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2\n			c-1.5-0.3-3-0.5-4.6-0.8c-0.6-0.1-0.6-0.1-0.7-0.7c-0.3-1.6-0.5-3.3-0.8-4.9c0-0.1-0.1-0.2-0.2-0.2c-0.1,0.1-0.1,0.2-0.2,0.2\n			c-0.2,1.4-0.5,2.8-0.7,4.3C10.7,11.1,10.6,11.9,10.5,12.4z\"/>\n		<path d=\"M10.5,12.4c0.1-0.6,0.2-1.3,0.3-2.1c0.2-1.4,0.5-2.8,0.7-4.3c0-0.1,0.1-0.2,0.2-0.2c0.1,0.1,0.2,0.2,0.2,0.2\n			c0.3,1.6,0.5,3.3,0.8,4.9c0.1,0.6,0.1,0.6,0.7,0.7c1.5,0.3,3,0.5,4.6,0.8c0.1,0,0.3,0,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2\n			c-2,0.3-4,0.7-6,1C11.1,14,10.5,13.4,10.5,12.4z\"/>\n	</g>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_close.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_email.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_logo-only.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg x=\"0px\" y=\"0px\" viewBox=\"0 0 6.1 7.5\">\n<g>\n	<g>\n		<path fill=\"#00A9B3\" d=\"M1,1.5c0,0-0.7,0.1-0.6,0.9c0,0-0.3,0.2-0.3,0.6c0,0,0,0.3,0.2,0.5c0,0,0,0.7,0.7,1l0.1,0l0.2-0.1\n			c0,0-0.7,0-0.9-0.8c0,0,0.1,0.1,0.5,0.1h0.6V3.6H0.9c0,0-0.7,0-0.8-0.6c0,0,0-0.6,0.6-0.6H1V2.3H0.8c0,0-0.2,0-0.3,0.1\n			c0,0-0.1-0.6,0.7-0.7l0.1,0L1,1.5z\"/>\n		<circle fill=\"#FFFFFF\" cx=\"2.2\" cy=\"3.8\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"1.7\" cy=\"5.1\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"2.7\" cy=\"5.4\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"2.9\" cy=\"6.2\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"1.6\" cy=\"2.3\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"2\" cy=\"2.3\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"5\" cy=\"2.4\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"4.5\" cy=\"3.7\" r=\"0.1\"/>\n		<circle fill=\"#FFFFFF\" cx=\"2.2\" cy=\"0.9\" r=\"0.1\"/>\n		<circle fill=\"#00A9B3\" cx=\"1.6\" cy=\"3.7\" r=\"0.1\"/>\n		<circle fill=\"#00A9B3\" cx=\"1.1\" cy=\"2.3\" r=\"0.1\"/>\n		<circle fill=\"#00A9B3\" cx=\"3.9\" cy=\"1\" r=\"0.1\"/>\n		<circle fill=\"#00A8B3\" cx=\"4.1\" cy=\"2.4\" r=\"0.1\"/>\n		<circle fill=\"#00A9B3\" cx=\"3.9\" cy=\"3.8\" r=\"0.1\"/>\n		<circle fill=\"#00A9B3\" cx=\"4.4\" cy=\"5.2\" r=\"0.1\"/>\n		<circle fill=\"#00A9B3\" cx=\"3.9\" cy=\"5.8\" r=\"0.1\"/>\n		<circle fill=\"#00A9B3\" cx=\"4.5\" cy=\"2.3\" r=\"0.1\"/>\n		<circle fill=\"#00A8B3\" cx=\"3.2\" cy=\"7.3\" r=\"0.1\"/>\n		<path fill=\"#FFFFFF\" d=\"M2.1,0.9V1h-1c0,0-0.3,0-0.3,0.3c0,0,0,0.3,0.3,0.3h1c0,0,0.5,0,0.5,0.4c0,0,0.1,0.5-0.6,0.5V2.3\n			c0,0,0.5,0,0.5-0.3c0,0,0-0.3-0.4-0.3l-1,0c0,0-0.4,0-0.4-0.4c0,0,0-0.3,0.4-0.4L2.1,0.9z\"/>\n		<path fill=\"#FFFFFF\" d=\"M3,6.1H2.8V0.8c0,0,0-0.6-0.7-0.6c0,0-0.6,0-0.7,0.6v0.1l-0.1,0l0-0.1c0,0,0.1-0.7,0.8-0.7\n			c0,0,0.8,0,0.8,0.7L3,6.1z\"/>\n		<path fill=\"#FFFFFF\" d=\"M1.5,2.2v0.1c0,0-0.3,0-0.3,0.3c0,0,0,0.2,0.3,0.3h0.9c0,0,0.3,0,0.4,0.2l0,0.2c0,0-0.1-0.3-0.3-0.3l-1,0\n			c0,0-0.4,0-0.4-0.4C1.1,2.6,1.1,2.3,1.5,2.2z\"/>\n		<path fill=\"#FFFFFF\" d=\"M2.2,3.7v0.1c0,0,0.3,0,0.3,0.3c0,0,0,0.3-0.3,0.3h-1c0,0-0.4,0-0.4,0.4c0,0,0,0.3,0.4,0.4h0.2\n			c0,0-0.3,0.2,0,0.5c0,0,0.1,0.1,0.3,0.1h0.7c0,0,0.3,0,0.4-0.4H2.7c0,0,0,0.2-0.3,0.3H1.7c0,0-0.3,0-0.3-0.3c0,0,0-0.3,0.3-0.3\n			V5.1H1.2c0,0-0.3,0-0.3-0.3c0,0,0-0.3,0.3-0.3h1c0,0,0.4,0,0.4-0.4C2.6,4.1,2.7,3.8,2.2,3.7z\"/>\n		<path fill=\"#FFFFFF\" d=\"M5.1,1.6c0,0,0.7,0.1,0.6,0.9c0,0,0.3,0.2,0.3,0.6c0,0,0,0.3-0.2,0.5c0,0,0,0.7-0.7,1L5,4.5L4.8,4.4\n			c0,0,0.7,0,0.9-0.8c0,0-0.1,0.1-0.5,0.1H4.6V3.6h0.6c0,0,0.7,0,0.8-0.6c0,0,0-0.6-0.6-0.6H5.1V2.3h0.2c0,0,0.2,0,0.3,0.1\n			c0,0,0.1-0.6-0.7-0.7l-0.1,0L5.1,1.6z\"/>\n		<path fill=\"#00A9B3\" d=\"M4,0.9V1h1c0,0,0.3,0,0.3,0.3c0,0,0,0.3-0.3,0.3h-1c0,0-0.5,0-0.5,0.4c0,0-0.1,0.5,0.6,0.5V2.3\n			c0,0-0.5,0-0.5-0.3c0,0,0-0.3,0.4-0.3l1,0c0,0,0.4,0,0.4-0.4c0,0,0-0.3-0.4-0.4L4,0.9z\"/>\n		<path fill=\"#00A9B3\" d=\"M3.1,6.7h0.1V0.9c0,0,0-0.6,0.7-0.6c0,0,0.6,0,0.7,0.6V1l0.1,0l0-0.1c0,0-0.1-0.7-0.8-0.7\n			c0,0-0.8,0-0.8,0.7L3.1,6.7z\"/>\n		<path fill=\"#00A9B3\" d=\"M4.6,2.3v0.1c0,0,0.3,0,0.3,0.3c0,0,0,0.2-0.3,0.3H3.6c0,0-0.3,0-0.4,0.2l0,0.2c0,0,0.1-0.3,0.3-0.3l1,0\n			c0,0,0.4,0,0.4-0.4C5,2.7,5,2.3,4.6,2.3z\"/>\n		<path fill=\"#00A9B3\" d=\"M4.8,4.4h-1c-0.3,0-0.3-0.3-0.3-0.3c0-0.3,0.3-0.3,0.3-0.3V3.8c-0.5,0-0.4,0.4-0.4,0.4\n			c0,0.4,0.4,0.4,0.4,0.4h1c0.3,0,0.3,0.3,0.3,0.3c0,0.3-0.3,0.3-0.3,0.3H4.4v0.1c0.3,0,0.3,0.3,0.3,0.3c0,0.3-0.3,0.3-0.3,0.3H3.9\n			v0.1h0.5c0.2,0,0.3-0.1,0.3-0.1c0.2-0.3,0-0.5,0-0.5h0.2c0.4,0,0.4-0.4,0.4-0.4C5.3,4.4,4.8,4.4,4.8,4.4z\"/>\n	</g>\n</g>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_logo-pt.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg x=\"0px\" y=\"0px\" viewBox=\"0 0 438.9 395.7\">\n<g>\n	<path d=\"M37.1,335.3c1.4-0.2,3.3-0.4,5.6-0.4c2.9,0,5,0.6,6.4,1.7c1.3,1,2,2.5,2,4.3c0,1.9-0.6,3.3-1.8,4.4c-1.6,1.5-4.1,2.2-7,2.2\n		c-0.9,0-1.7,0-2.4-0.2v8.2h-2.9V335.3z M40.1,345.2c0.6,0.2,1.5,0.2,2.4,0.2c3.5,0,5.7-1.5,5.7-4.4c0-2.7-2.1-4-5.4-4\n		c-1.3,0-2.3,0.1-2.8,0.2V345.2z\"/>\n	<path d=\"M55.9,349.1l-2.4,6.4h-3l7.7-20.5h3.5l7.8,20.5h-3.1l-2.4-6.4H55.9z M63.4,347l-2.2-5.9c-0.5-1.3-0.8-2.5-1.2-3.7h-0.1\n		c-0.3,1.2-0.7,2.5-1.2,3.7l-2.2,5.9H63.4z\"/>\n	<path d=\"M89.8,354.6c-1.3,0.4-3.9,1.1-7,1.1c-3.4,0-6.3-0.8-8.5-2.7c-2-1.7-3.2-4.4-3.2-7.6c0-6.1,4.7-10.6,12.3-10.6\n		c2.6,0,4.7,0.5,5.7,0.9l-0.7,2.2c-1.2-0.5-2.7-0.9-5-0.9c-5.5,0-9.2,3.1-9.2,8.2c0,5.2,3.5,8.3,8.8,8.3c1.9,0,3.2-0.2,3.9-0.5v-6.1\n		h-4.6v-2.1h7.5V354.6z\"/>\n	<path d=\"M98,349.1l-2.4,6.4h-3l7.7-20.5h3.5l7.8,20.5h-3.1l-2.4-6.4H98z M105.4,347l-2.2-5.9c-0.5-1.3-0.8-2.5-1.2-3.7H102\n		c-0.3,1.2-0.7,2.5-1.1,3.7l-2.2,5.9H105.4z\"/>\n	<path d=\"M134,346.5c-0.2-2.9-0.4-6.3-0.3-8.8h-0.1c-0.8,2.4-1.7,4.9-2.9,7.8l-4,9.9h-2.2l-3.7-9.7c-1.1-2.9-2-5.5-2.6-8h-0.1\n		c-0.1,2.6-0.2,6-0.4,9l-0.6,8.8h-2.8l1.6-20.5h3.8l3.9,9.9c0.9,2.5,1.7,4.8,2.3,6.9h0.1c0.6-2.1,1.4-4.3,2.4-6.9l4.1-9.9h3.8\n		l1.4,20.5h-2.9L134,346.5z\"/>\n	<path d=\"M153.8,345.9H145v7.4h9.9v2.2H142v-20.5h12.3v2.2H145v6.5h8.9V345.9z\"/>\n	<path d=\"M158.7,355.5v-20.5h3.2l7.3,10.4c1.7,2.4,3,4.6,4.1,6.6l0.1,0c-0.3-2.7-0.3-5.2-0.3-8.4v-8.6h2.8v20.5h-3l-7.2-10.4\n		c-1.6-2.3-3.1-4.6-4.3-6.8l-0.1,0c0.2,2.6,0.2,5,0.2,8.4v8.7H158.7z\"/>\n	<path d=\"M185.2,337.3h-6.9v-2.2h16.9v2.2h-7v18.2h-3V337.3z\"/>\n	<path d=\"M216.3,345.1c0,7-4.8,10.8-10.6,10.8c-6,0-10.2-4.2-10.2-10.4c0-6.5,4.5-10.7,10.6-10.7C212.3,334.7,216.3,339,216.3,345.1\n		z M198.6,345.4c0,4.4,2.6,8.3,7.3,8.3c4.7,0,7.3-3.9,7.3-8.5c0-4.1-2.4-8.3-7.3-8.3C201,336.9,198.6,340.9,198.6,345.4z\"/>\n	<path d=\"M230.2,335.1v20.5h-2.9v-20.5H230.2z\"/>\n	<path d=\"M235.4,355.5v-20.5h3.2l7.3,10.4c1.7,2.4,3,4.6,4.1,6.6l0.1,0c-0.3-2.7-0.3-5.2-0.3-8.4v-8.6h2.8v20.5h-3l-7.2-10.4\n		c-1.6-2.3-3.1-4.6-4.3-6.8l-0.1,0c0.2,2.6,0.2,5,0.2,8.4v8.7H235.4z\"/>\n	<path d=\"M277.1,345.1c0,7-4.8,10.8-10.6,10.8c-6,0-10.2-4.2-10.2-10.4c0-6.5,4.5-10.7,10.6-10.7C273.1,334.7,277.1,339,277.1,345.1\n		z M259.4,345.4c0,4.4,2.6,8.3,7.3,8.3c4.7,0,7.3-3.9,7.3-8.5c0-4.1-2.4-8.3-7.3-8.3C261.8,336.9,259.4,340.9,259.4,345.4z\"/>\n	<path d=\"M285.9,355.5l-7.4-20.5h3.2l3.5,10.1c1,2.8,1.8,5.3,2.4,7.6h0.1c0.6-2.4,1.6-4.9,2.6-7.6l3.9-10.1h3.1l-8.1,20.5H285.9z\"/>\n	<path d=\"M301.5,349.1l-2.4,6.4h-3l7.7-20.5h3.5l7.8,20.5h-3.1l-2.4-6.4H301.5z M309,347l-2.2-5.9c-0.5-1.3-0.8-2.5-1.2-3.7h-0.1\n		c-0.3,1.2-0.7,2.5-1.2,3.7l-2.2,5.9H309z\"/>\n	<path d=\"M318.5,335.3c1.8-0.2,3.9-0.4,6.3-0.4c4.2,0,7.2,0.9,9.2,2.6c2,1.7,3.2,4,3.2,7.3c0,3.3-1.1,6.1-3.3,8\n		c-2.1,1.9-5.6,2.9-10.1,2.9c-2.1,0-3.9-0.1-5.3-0.2V335.3z M321.5,353.4c0.7,0.1,1.8,0.2,3,0.2c6.3,0,9.7-3.2,9.7-8.7\n		c0-4.8-3-7.9-9.2-7.9c-1.5,0-2.7,0.1-3.5,0.3V353.4z\"/>\n	<path d=\"M360.5,345.1c0,7-4.8,10.8-10.6,10.8c-6,0-10.2-4.2-10.2-10.4c0-6.5,4.5-10.7,10.6-10.7C356.5,334.7,360.5,339,360.5,345.1\n		z M342.9,345.4c0,4.4,2.6,8.3,7.3,8.3c4.7,0,7.3-3.9,7.3-8.5c0-4.1-2.4-8.3-7.3-8.3C345.3,336.9,342.9,340.9,342.9,345.4z\"/>\n	<path d=\"M364.4,335.3c1.5-0.3,3.6-0.4,5.6-0.4c3.1,0,5.2,0.5,6.6,1.7c1.2,0.9,1.8,2.3,1.8,3.9c0,2.7-1.9,4.5-4.3,5.2v0.1\n		c1.8,0.5,2.8,2,3.3,4.1c0.7,2.9,1.3,4.8,1.8,5.6h-3c-0.4-0.6-0.9-2.3-1.5-4.9c-0.7-2.8-1.9-3.9-4.6-4h-2.8v8.9h-2.9V335.3z\n		 M367.3,344.6h3c3.1,0,5.1-1.5,5.1-3.9c0-2.6-2.1-3.8-5.2-3.8c-1.4,0-2.4,0.1-2.9,0.2V344.6z\"/>\n	<path d=\"M37.8,364.6c0.7-0.1,1.6-0.2,2.8-0.2c1.4,0,2.5,0.3,3.2,0.9c0.6,0.5,1,1.4,1,2.4c0,1-0.3,1.8-0.9,2.4\n		c-0.8,0.8-2,1.2-3.4,1.2c-0.4,0-0.8,0-1.2-0.1v4.5h-1.5V364.6z M39.3,370.1c0.3,0.1,0.7,0.1,1.2,0.1c1.8,0,2.8-0.9,2.8-2.4\n		c0-1.5-1.1-2.2-2.7-2.2c-0.6,0-1.1,0-1.4,0.1V370.1z\"/>\n	<path d=\"M47.1,372.2l-1.2,3.5h-1.5l3.8-11.3H50l3.8,11.3h-1.6l-1.2-3.5H47.1z M50.8,371.1l-1.1-3.2c-0.2-0.7-0.4-1.4-0.6-2.1h0\n		c-0.2,0.7-0.4,1.4-0.6,2l-1.1,3.3H50.8z\"/>\n	<path d=\"M55.5,364.7c0.7-0.2,1.8-0.2,2.8-0.2c1.6,0,2.6,0.3,3.3,0.9c0.6,0.5,0.9,1.3,0.9,2.1c0,1.5-0.9,2.5-2.1,2.9v0.1\n		c0.9,0.3,1.4,1.1,1.7,2.3c0.4,1.6,0.6,2.7,0.9,3.1h-1.5c-0.2-0.3-0.4-1.3-0.8-2.7c-0.3-1.6-0.9-2.1-2.3-2.2H57v4.9h-1.5V364.7z\n		 M57,369.8h1.5c1.6,0,2.5-0.9,2.5-2.1c0-1.5-1.1-2.1-2.6-2.1c-0.7,0-1.2,0.1-1.4,0.1V369.8z\"/>\n	<path d=\"M66.4,372.2l-1.2,3.5h-1.5l3.8-11.3h1.8l3.8,11.3h-1.6l-1.2-3.5H66.4z M70.1,371.1l-1.1-3.2c-0.3-0.7-0.4-1.4-0.6-2.1h0\n		c-0.2,0.7-0.4,1.4-0.6,2l-1.1,3.3H70.1z\"/>\n	<path d=\"M88,370c0,3.9-2.4,5.9-5.2,5.9c-3,0-5.1-2.3-5.1-5.7c0-3.6,2.2-5.9,5.2-5.9C86,364.3,88,366.7,88,370z M79.2,370.2\n		c0,2.4,1.3,4.6,3.6,4.6c2.3,0,3.6-2.1,3.6-4.7c0-2.2-1.2-4.6-3.6-4.6C80.4,365.5,79.2,367.7,79.2,370.2z\"/>\n	<path d=\"M93.2,374c0.7,0.4,1.6,0.7,2.6,0.7c1.5,0,2.4-0.8,2.4-1.9c0-1.1-0.6-1.7-2.1-2.2c-1.8-0.7-3-1.6-3-3.2\n		c0-1.8,1.5-3.1,3.6-3.1c1.2,0,2,0.3,2.5,0.6l-0.4,1.2c-0.4-0.2-1.1-0.5-2.1-0.5c-1.5,0-2.1,0.9-2.1,1.7c0,1.1,0.7,1.6,2.2,2.2\n		c1.9,0.7,2.9,1.7,2.9,3.3c0,1.7-1.3,3.2-3.9,3.2c-1.1,0-2.3-0.3-2.9-0.7L93.2,374z\"/>\n	<path d=\"M103.1,364.5v11.3h-1.5v-11.3H103.1z\"/>\n	<path d=\"M105.4,374c0.7,0.4,1.6,0.7,2.6,0.7c1.5,0,2.4-0.8,2.4-1.9c0-1.1-0.6-1.7-2.1-2.2c-1.8-0.7-3-1.6-3-3.2\n		c0-1.8,1.5-3.1,3.6-3.1c1.2,0,2,0.3,2.5,0.6l-0.4,1.2c-0.4-0.2-1.1-0.5-2.1-0.5c-1.5,0-2.1,0.9-2.1,1.7c0,1.1,0.7,1.6,2.2,2.2\n		c1.9,0.7,2.9,1.7,2.9,3.3c0,1.7-1.3,3.2-3.9,3.2c-1.1,0-2.3-0.3-2.9-0.7L105.4,374z\"/>\n	<path d=\"M116,365.7h-3.4v-1.2h8.3v1.2h-3.4v10H116V365.7z\"/>\n	<path d=\"M128,370.5h-4.4v4.1h4.9v1.2h-6.3v-11.3h6.1v1.2h-4.6v3.6h4.4V370.5z\"/>\n	<path d=\"M139.9,370.8c-0.1-1.6-0.2-3.5-0.2-4.9h0c-0.4,1.3-0.9,2.7-1.4,4.3l-2,5.5h-1.1l-1.8-5.4c-0.5-1.6-1-3-1.3-4.4h0\n		c0,1.4-0.1,3.3-0.2,5l-0.3,4.8h-1.4l0.8-11.3h1.9l1.9,5.4c0.5,1.4,0.9,2.6,1.1,3.8h0.1c0.3-1.1,0.7-2.4,1.2-3.8l2-5.4h1.9l0.7,11.3\n		h-1.4L139.9,370.8z\"/>\n	<path d=\"M145.5,372.2l-1.2,3.5h-1.5l3.8-11.3h1.8l3.8,11.3h-1.6l-1.2-3.5H145.5z M149.2,371.1l-1.1-3.2c-0.3-0.7-0.4-1.4-0.6-2.1h0\n		c-0.2,0.7-0.4,1.4-0.6,2l-1.1,3.3H149.2z\"/>\n	<path d=\"M157.4,364.6c0.7-0.1,1.6-0.2,2.8-0.2c1.4,0,2.5,0.3,3.2,0.9c0.6,0.5,1,1.4,1,2.4c0,1-0.3,1.8-0.9,2.4\n		c-0.8,0.8-2,1.2-3.4,1.2c-0.4,0-0.8,0-1.2-0.1v4.5h-1.5V364.6z M158.9,370.1c0.3,0.1,0.7,0.1,1.2,0.1c1.8,0,2.8-0.9,2.8-2.4\n		c0-1.5-1.1-2.2-2.7-2.2c-0.6,0-1.1,0-1.4,0.1V370.1z\"/>\n	<path d=\"M175.9,370c0,3.9-2.4,5.9-5.2,5.9c-3,0-5.1-2.3-5.1-5.7c0-3.6,2.2-5.9,5.2-5.9C173.9,364.3,175.9,366.7,175.9,370z\n		 M167.2,370.2c0,2.4,1.3,4.6,3.6,4.6c2.3,0,3.6-2.1,3.6-4.7c0-2.2-1.2-4.6-3.6-4.6C168.4,365.5,167.2,367.7,167.2,370.2z\"/>\n	<path d=\"M177.8,364.7c0.7-0.2,1.8-0.2,2.8-0.2c1.6,0,2.6,0.3,3.3,0.9c0.6,0.5,0.9,1.3,0.9,2.1c0,1.5-0.9,2.5-2.1,2.9v0.1\n		c0.9,0.3,1.4,1.1,1.7,2.3c0.4,1.6,0.6,2.7,0.9,3.1h-1.5c-0.2-0.3-0.4-1.3-0.7-2.7c-0.3-1.6-0.9-2.1-2.3-2.2h-1.4v4.9h-1.5V364.7z\n		 M179.3,369.8h1.5c1.6,0,2.5-0.9,2.5-2.1c0-1.5-1.1-2.1-2.6-2.1c-0.7,0-1.2,0.1-1.4,0.1V369.8z\"/>\n	<path d=\"M189.1,365.7h-3.4v-1.2h8.3v1.2h-3.4v10h-1.5V365.7z\"/>\n	<path d=\"M196.7,364.5v6.7c0,2.5,1.1,3.6,2.6,3.6c1.7,0,2.7-1.1,2.7-3.6v-6.7h1.5v6.6c0,3.5-1.8,4.9-4.3,4.9c-2.3,0-4-1.3-4-4.8\n		v-6.6H196.7z\"/>\n	<path d=\"M214.6,375.3c-0.7,0.2-1.9,0.6-3.5,0.6c-1.7,0-3.1-0.4-4.2-1.5c-1-0.9-1.6-2.4-1.6-4.2c0-3.4,2.3-5.8,6.1-5.8\n		c1.3,0,2.3,0.3,2.8,0.5l-0.4,1.2c-0.6-0.3-1.4-0.5-2.5-0.5c-2.7,0-4.5,1.7-4.5,4.5c0,2.9,1.7,4.5,4.3,4.5c1,0,1.6-0.1,1.9-0.3V371\n		h-2.3v-1.2h3.7V375.3z\"/>\n	<path d=\"M218.3,364.5v6.7c0,2.5,1.1,3.6,2.6,3.6c1.7,0,2.7-1.1,2.7-3.6v-6.7h1.5v6.6c0,3.5-1.8,4.9-4.3,4.9c-2.3,0-4-1.3-4-4.8\n		v-6.6H218.3z\"/>\n	<path d=\"M233.5,370.5h-4.4v4.1h4.9v1.2h-6.3v-11.3h6.1v1.2h-4.6v3.6h4.4V370.5z M231.2,362l1.8,1.9h-1.2l-1.1-1.2h0l-1.1,1.2h-1.2\n		l1.7-1.9H231.2z\"/>\n	<path d=\"M235.7,374c0.7,0.4,1.6,0.7,2.6,0.7c1.5,0,2.4-0.8,2.4-1.9c0-1.1-0.6-1.7-2.1-2.2c-1.8-0.7-3-1.6-3-3.2\n		c0-1.8,1.5-3.1,3.6-3.1c1.2,0,2,0.3,2.5,0.6l-0.4,1.2c-0.4-0.2-1.1-0.5-2.1-0.5c-1.5,0-2.1,0.9-2.1,1.7c0,1.1,0.7,1.6,2.2,2.2\n		c1.9,0.7,2.9,1.7,2.9,3.3c0,1.7-1.3,3.2-3.9,3.2c-1.1,0-2.3-0.3-2.9-0.7L235.7,374z\"/>\n	<path d=\"M247.7,364.7c0.9-0.1,1.9-0.2,3.1-0.2c2.1,0,3.6,0.5,4.6,1.4c1,0.9,1.6,2.2,1.6,4c0,1.8-0.6,3.3-1.6,4.4\n		c-1.1,1.1-2.8,1.6-5,1.6c-1,0-1.9,0-2.6-0.1V364.7z M249.1,374.6c0.4,0.1,0.9,0.1,1.5,0.1c3.1,0,4.8-1.7,4.8-4.8\n		c0-2.7-1.5-4.3-4.6-4.3c-0.8,0-1.3,0.1-1.7,0.1V374.6z\"/>\n	<path d=\"M264.6,370.5h-4.4v4.1h4.9v1.2h-6.3v-11.3h6.1v1.2h-4.6v3.6h4.4V370.5z\"/>\n	<path d=\"M270.4,374c0.7,0.4,1.6,0.7,2.6,0.7c1.5,0,2.4-0.8,2.4-1.9c0-1.1-0.6-1.7-2.1-2.2c-1.8-0.7-3-1.6-3-3.2\n		c0-1.8,1.5-3.1,3.6-3.1c1.2,0,2,0.3,2.5,0.6l-0.4,1.2c-0.4-0.2-1.1-0.5-2.1-0.5c-1.5,0-2.1,0.9-2.1,1.7c0,1.1,0.7,1.6,2.2,2.2\n		c1.9,0.7,2.9,1.7,2.9,3.3c0,1.7-1.3,3.2-3.9,3.2c-1.1,0-2.3-0.3-2.9-0.7L270.4,374z\"/>\n	<path d=\"M280.6,372.2l-1.2,3.5h-1.5l3.8-11.3h1.8l3.8,11.3h-1.6l-1.2-3.5H280.6z M284.3,371.1l-1.1-3.2c-0.2-0.7-0.4-1.4-0.6-2.1h0\n		c-0.2,0.7-0.4,1.4-0.6,2l-1.1,3.3H284.3z\"/>\n	<path d=\"M290,364.5v6.7c0,2.5,1.1,3.6,2.6,3.6c1.7,0,2.7-1.1,2.7-3.6v-6.7h1.5v6.6c0,3.5-1.8,4.9-4.3,4.9c-2.3,0-4-1.3-4-4.8v-6.6\n		H290z M295.2,362l-2.1,2h-1.2l1.5-2H295.2z\"/>\n	<path d=\"M299.4,364.7c0.9-0.1,1.9-0.2,3.1-0.2c2.1,0,3.6,0.5,4.6,1.4c1,0.9,1.6,2.2,1.6,4c0,1.8-0.6,3.3-1.6,4.4\n		c-1.1,1.1-2.8,1.6-5,1.6c-1,0-1.9,0-2.6-0.1V364.7z M300.8,374.6c0.4,0.1,0.9,0.1,1.5,0.1c3.1,0,4.8-1.7,4.8-4.8\n		c0-2.7-1.5-4.3-4.6-4.3c-0.8,0-1.3,0.1-1.7,0.1V374.6z\"/>\n	<path d=\"M316.3,370.5h-4.4v4.1h4.9v1.2h-6.3v-11.3h6.1v1.2h-4.6v3.6h4.4V370.5z\"/>\n	<path d=\"M331.7,370.8c-0.1-1.6-0.2-3.5-0.2-4.9h0c-0.4,1.3-0.9,2.7-1.4,4.3l-2,5.5H327l-1.8-5.4c-0.5-1.6-1-3-1.3-4.4h0\n		c0,1.4-0.1,3.3-0.2,5l-0.3,4.8h-1.4l0.8-11.3h1.9l1.9,5.4c0.5,1.4,0.9,2.6,1.1,3.8h0.1c0.3-1.1,0.7-2.4,1.2-3.8l2-5.4h1.9l0.7,11.3\n		H332L331.7,370.8z\"/>\n	<path d=\"M341.5,370.5h-4.4v4.1h4.9v1.2h-6.3v-11.3h6.1v1.2h-4.6v3.6h4.4V370.5z\"/>\n	<path d=\"M343.9,375.8v-11.3h1.6l3.6,5.7c0.8,1.3,1.5,2.5,2,3.7l0,0c-0.1-1.5-0.2-2.9-0.2-4.6v-4.7h1.4v11.3h-1.5l-3.6-5.7\n		c-0.8-1.3-1.5-2.5-2.1-3.8l-0.1,0c0.1,1.4,0.1,2.8,0.1,4.6v4.8H343.9z\"/>\n	<path d=\"M357,365.7h-3.4v-1.2h8.3v1.2h-3.4v10H357V365.7z\"/>\n	<path d=\"M363.8,372.2l-1.2,3.5h-1.5l3.8-11.3h1.8l3.8,11.3H369l-1.2-3.5H363.8z M367.5,371.1l-1.1-3.2c-0.3-0.7-0.4-1.4-0.6-2.1h0\n		c-0.2,0.7-0.4,1.4-0.6,2l-1.1,3.3H367.5z\"/>\n	<path d=\"M372.2,364.5h1.5v10h4.8v1.2h-6.3V364.5z\"/>\n	<g>\n		<path d=\"M28.3,277.8c-0.8,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.3-0.9-2.2s0.3-1.6,0.9-2.1c0.6-0.6,1.3-0.9,2.2-0.9\n			c0.8,0,1.6,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.1s-0.3,1.6-0.9,2.2C29.9,277.5,29.2,277.8,28.3,277.8z M26,283.3h4.7v26.6H26V283.3\n			z\"/>\n		<path d=\"M61.1,286.6c1.4,1.4,2.4,2.9,3.1,4.6c0.7,1.7,1.1,3.5,1.1,5.4s-0.4,3.7-1.1,5.4c-0.7,1.7-1.7,3.3-3.1,4.6\n			c-1.3,1.4-2.9,2.4-4.6,3.1c-1.7,0.7-3.5,1.1-5.4,1.1c-3.6,0-6.8-1.2-9.5-3.6V324h-4.7v-40.8h4.7v2.9c1.3-1.2,2.8-2.1,4.4-2.7\n			c1.6-0.6,3.3-1,5.1-1c1.9,0,3.7,0.4,5.4,1.1C58.2,284.2,59.8,285.3,61.1,286.6z M51.1,306.1c1.3,0,2.6-0.2,3.7-0.7s2.2-1.2,3-2\n			c0.9-0.9,1.5-1.9,2-3c0.5-1.2,0.7-2.4,0.7-3.7c0-1.3-0.3-2.5-0.7-3.7c-0.5-1.2-1.2-2.2-2-3c-0.9-0.9-1.9-1.5-3-2\n			c-1.2-0.5-2.4-0.7-3.7-0.7s-2.6,0.3-3.7,0.7c-1.2,0.5-2.2,1.2-3,2c-0.9,0.9-1.5,1.9-2,3c-0.5,1.2-0.7,2.4-0.7,3.7\n			c0,1.3,0.3,2.6,0.7,3.7c0.5,1.2,1.2,2.2,2,3c0.9,0.9,1.9,1.5,3,2C48.5,305.9,49.7,306.1,51.1,306.1z\"/>\n		<path d=\"M75.8,285.4c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.6-1.3,0.9-2.2,0.9s-1.6-0.3-2.1-0.9c-0.6-0.6-0.9-1.3-0.9-2.2\n			c0-0.8,0.3-1.6,0.9-2.1c0.6-0.6,1.3-0.9,2.1-0.9s1.6,0.3,2.2,0.9C75.5,283.9,75.8,284.6,75.8,285.4z M75.8,307.8\n			c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.6-1.3,0.9-2.2,0.9s-1.6-0.3-2.1-0.9c-0.6-0.6-0.9-1.3-0.9-2.2c0-0.8,0.3-1.6,0.9-2.1\n			c0.6-0.6,1.3-0.9,2.1-0.9s1.6,0.3,2.2,0.9C75.5,306.2,75.8,307,75.8,307.8z\"/>\n		<path fill=\"#00AAB4\" d=\"M122.6,286c1.2,1.2,2.1,2.5,2.7,4c0.6,1.5,1,3.1,1,4.8v15.1h-4.7v-15.1c0-2.2-0.8-4-2.3-5.4\n			c-0.7-0.7-1.6-1.3-2.5-1.7c-0.9-0.4-1.9-0.6-3-0.6c-1,0-2,0.2-2.9,0.6c-0.9,0.4-1.8,0.9-2.5,1.7c-1.5,1.5-2.2,3.3-2.2,5.4v15.1\n			h-4.7v-15.1c0-1.1-0.2-2.1-0.6-3c-0.4-0.9-1-1.7-1.6-2.4c-0.7-0.7-1.5-1.2-2.5-1.6c-1-0.4-2-0.6-3-0.6c-1,0-2,0.2-2.9,0.6\n			s-1.8,0.9-2.5,1.7c-1.5,1.5-2.3,3.3-2.3,5.4v15.1h-4.7v-26.6H86v1.7c2.3-1.8,4.8-2.6,7.7-2.6c3.4,0,6.4,1.2,8.8,3.6\n			c0.3,0.2,0.5,0.5,0.7,0.7c0.2,0.3,0.4,0.5,0.6,0.8c0.2-0.3,0.4-0.5,0.6-0.7c0.2-0.2,0.4-0.5,0.7-0.7c2.4-2.4,5.3-3.6,8.8-3.6\n			S120.1,283.5,122.6,286z\"/>\n		<path fill=\"#00AAB4\" d=\"M144.8,306.1c1.3,0,2.5-0.3,3.7-0.7c1.2-0.5,2.2-1.2,3.1-2.2l3.4,3.3c-0.7,0.7-1.4,1.3-2.1,1.8\n			c-0.8,0.5-1.6,1-2.4,1.3c-1.8,0.8-3.6,1.2-5.7,1.2c-1.9,0-3.7-0.4-5.4-1.1c-1.7-0.7-3.3-1.7-4.6-3.1c-1.4-1.4-2.4-2.9-3.1-4.6\n			c-0.7-1.7-1.1-3.5-1.1-5.4s0.4-3.7,1.1-5.4c0.7-1.7,1.7-3.3,3.1-4.6c1.3-1.4,2.9-2.4,4.6-3.1c1.7-0.7,3.5-1.1,5.4-1.1\n			c1.9,0,3.7,0.4,5.4,1.1c1.7,0.7,3.3,1.7,4.6,3.1c0.9,0.9,1.6,1.9,2.2,2.8c0.6,1,1,2,1.2,3c0.3,1,0.4,2.1,0.5,3.3\n			c0.1,1.1,0,2.4,0,3.7h-23c0.3,1,0.7,1.9,1.3,2.7c0.6,0.8,1.3,1.5,2.1,2.1c0.8,0.6,1.7,1.1,2.7,1.4\n			C142.8,305.9,143.8,306.1,144.8,306.1z M144.8,287.1c-1.1,0-2.2,0.2-3.2,0.6s-1.9,0.9-2.8,1.6c-0.8,0.7-1.5,1.5-2.1,2.4\n			c-0.6,0.9-1,1.9-1.2,3h18.5c-0.2-1.1-0.6-2-1.2-3c-0.6-0.9-1.3-1.7-2.1-2.4c-0.8-0.7-1.8-1.2-2.8-1.6S146,287.1,144.8,287.1z\"/>\n		<path fill=\"#00AAB4\" d=\"M183.9,286c1.2,1.2,2.1,2.5,2.7,4c0.6,1.5,1,3.1,1,4.8v15.1h-4.7v-15.1c0-1-0.2-2-0.6-2.9\n			c-0.4-0.9-0.9-1.8-1.7-2.5c-1.5-1.5-3.3-2.3-5.5-2.3c-2.1,0-3.9,0.8-5.4,2.3c-1.5,1.5-2.3,3.3-2.3,5.5v15h-4.7v-26.6h4.7v1.8\n			c2.2-1.8,4.8-2.7,7.7-2.7C178.6,282.3,181.5,283.5,183.9,286z\"/>\n		<path fill=\"#00AAB4\" d=\"M199.4,283.3v17.9c0,1.4,0.5,2.6,1.4,3.5s2.1,1.4,3.5,1.4v4.7c-1.3,0-2.6-0.3-3.7-0.8\n			c-1.2-0.5-2.2-1.2-3.1-2.1c-0.9-0.9-1.6-1.9-2.1-3.1c-0.5-1.2-0.8-2.4-0.8-3.7v-17.9h-4.9v-4.7h4.9v-9.7h4.7v9.7h4.9v4.7H199.4z\"\n			/>\n		<path fill=\"#00AAB4\" d=\"M235,283.3v26.6h-4.7v-2.6c-1.3,1.2-2.8,2.1-4.4,2.7c-1.6,0.6-3.3,0.9-5.1,0.9c-1.9,0-3.7-0.4-5.4-1.1\n			c-1.7-0.7-3.3-1.7-4.6-3.1c-1.4-1.3-2.4-2.8-3.1-4.6c-0.7-1.7-1.1-3.6-1.1-5.5c0-1.9,0.4-3.7,1.1-5.4c0.7-1.7,1.7-3.3,3.1-4.6\n			c1.3-1.4,2.9-2.4,4.6-3.1c1.7-0.7,3.5-1,5.4-1c1.8,0,3.4,0.3,5.1,0.9c1.6,0.6,3.1,1.5,4.4,2.7v-2.8H235z M220.8,306.1\n			c1.3,0,2.6-0.3,3.7-0.7c1.2-0.5,2.2-1.2,3-2c0.9-0.9,1.5-1.9,2-3c0.5-1.2,0.7-2.4,0.7-3.7c0-1.3-0.2-2.5-0.7-3.7\n			c-0.5-1.1-1.2-2.1-2-3c-0.9-0.9-1.9-1.5-3-2c-1.2-0.5-2.4-0.7-3.7-0.7c-1.3,0-2.5,0.3-3.7,0.7c-1.2,0.5-2.2,1.2-3,2\n			c-0.9,0.9-1.5,1.9-2,3c-0.5,1.1-0.7,2.4-0.7,3.7c0,1.3,0.3,2.5,0.7,3.7c0.5,1.2,1.2,2.2,2,3c0.9,0.9,1.9,1.5,3,2\n			C218.2,305.8,219.5,306.1,220.8,306.1z\"/>\n		<path fill=\"#00AAB4\" d=\"M240.5,309.8V267h4.7v42.9H240.5z\"/>\n		<path fill=\"#00AAB4\" d=\"M281.2,286c1.2,1.2,2.1,2.5,2.7,4c0.6,1.5,1,3.1,1,4.8v15.1h-4.7v-15.1c0-1.1-0.2-2.1-0.6-3\n			s-0.9-1.7-1.6-2.4c-0.7-0.7-1.5-1.2-2.5-1.6s-2-0.6-3-0.6c-2.1,0-3.9,0.8-5.4,2.3s-2.3,3.3-2.3,5.5v15h-4.7V267h4.7V285\n			c2.2-1.8,4.8-2.7,7.7-2.7C275.9,282.3,278.8,283.5,281.2,286z\"/>\n		<path fill=\"#00AAB4\" d=\"M303,306.1c1.3,0,2.5-0.3,3.7-0.7c1.2-0.5,2.2-1.2,3.1-2.2l3.4,3.3c-0.7,0.7-1.4,1.3-2.1,1.8\n			c-0.8,0.5-1.6,1-2.4,1.3c-1.8,0.8-3.6,1.2-5.7,1.2c-1.9,0-3.7-0.4-5.4-1.1c-1.7-0.7-3.3-1.7-4.6-3.1c-1.3-1.4-2.4-2.9-3.1-4.6\n			c-0.7-1.7-1.1-3.5-1.1-5.4s0.4-3.7,1.1-5.4c0.7-1.7,1.8-3.3,3.1-4.6c1.4-1.4,2.9-2.4,4.6-3.1c1.7-0.7,3.5-1.1,5.4-1.1\n			s3.7,0.4,5.4,1.1c1.7,0.7,3.3,1.7,4.6,3.1c0.9,0.9,1.6,1.9,2.2,2.8c0.5,1,1,2,1.2,3c0.3,1,0.4,2.1,0.5,3.3c0.1,1.1,0,2.4,0,3.7\n			h-23c0.3,1,0.7,1.9,1.3,2.7c0.6,0.8,1.3,1.5,2.1,2.1c0.8,0.6,1.7,1.1,2.7,1.4S301.9,306.1,303,306.1z M303,287.1\n			c-1.1,0-2.2,0.2-3.2,0.6c-1,0.4-1.9,0.9-2.8,1.6c-0.8,0.7-1.5,1.5-2.1,2.4c-0.6,0.9-1,1.9-1.2,3h18.5c-0.2-1.1-0.6-2-1.2-3\n			c-0.6-0.9-1.3-1.7-2.1-2.4c-0.8-0.7-1.7-1.2-2.8-1.6C305.2,287.3,304.1,287.1,303,287.1z\"/>\n		<path fill=\"#00AAB4\" d=\"M348.2,283.3v26.6h-4.7v-2.6c-1.3,1.2-2.8,2.1-4.4,2.7c-1.6,0.6-3.3,0.9-5.1,0.9c-1.9,0-3.7-0.4-5.4-1.1\n			c-1.7-0.7-3.3-1.7-4.6-3.1c-1.4-1.3-2.4-2.8-3.1-4.6c-0.7-1.7-1.1-3.6-1.1-5.5c0-1.9,0.4-3.7,1.1-5.4c0.7-1.7,1.7-3.3,3.1-4.6\n			s2.9-2.4,4.6-3.1c1.7-0.7,3.5-1,5.4-1c1.8,0,3.4,0.3,5.1,0.9c1.6,0.6,3.1,1.5,4.4,2.7v-2.8H348.2z M334,306.1\n			c1.3,0,2.5-0.3,3.7-0.7c1.2-0.5,2.2-1.2,3-2c0.9-0.9,1.5-1.9,2-3c0.5-1.2,0.7-2.4,0.7-3.7c0-1.3-0.3-2.5-0.7-3.7\n			c-0.5-1.1-1.2-2.1-2-3c-0.9-0.9-1.9-1.5-3-2c-1.2-0.5-2.4-0.7-3.7-0.7c-1.3,0-2.6,0.3-3.7,0.7c-1.2,0.5-2.2,1.2-3,2\n			c-0.9,0.9-1.5,1.9-2,3c-0.5,1.1-0.7,2.4-0.7,3.7c0,1.3,0.2,2.5,0.7,3.7c0.5,1.2,1.2,2.2,2,3c0.9,0.9,1.9,1.5,3,2\n			C331.4,305.8,332.7,306.1,334,306.1z\"/>\n		<path fill=\"#00AAB4\" d=\"M353.7,309.8V267h4.7v42.9H353.7z\"/>\n		<path fill=\"#00AAB4\" d=\"M371.9,283.3v17.9c0,1.4,0.5,2.6,1.4,3.5s2.1,1.4,3.5,1.4v4.7c-1.3,0-2.6-0.3-3.7-0.8\n			c-1.2-0.5-2.2-1.2-3.1-2.1c-0.9-0.9-1.6-1.9-2.1-3.1c-0.5-1.2-0.8-2.4-0.8-3.7v-17.9h-4.9v-4.7h4.9v-9.7h4.7v9.7h4.9v4.7H371.9z\"\n			/>\n		<path fill=\"#00AAB4\" d=\"M403.5,286c1.2,1.2,2.1,2.5,2.7,4c0.6,1.5,1,3.1,1,4.8v15.1h-4.7v-15.1c0-1.1-0.2-2.1-0.6-3\n			c-0.4-0.9-1-1.7-1.6-2.4c-0.7-0.7-1.5-1.2-2.5-1.6c-1-0.4-2-0.6-3-0.6c-2.1,0-3.9,0.8-5.4,2.3c-1.5,1.5-2.3,3.3-2.3,5.5v15h-4.7\n			V267h4.7V285c2.2-1.8,4.8-2.7,7.7-2.7C398.2,282.3,401.1,283.5,403.5,286z\"/>\n		<g>\n			<path fill=\"#00AAB4\" d=\"M173.7,79.7c0,0-23.6,3.7-22.8,31c0,0-12.3,7.8-11.8,21.9c0,0-0.2,10.2,7.8,17.7c0,0-1.3,24.6,25.5,34.4\n				l2.6,1.1l6.9-3.3c0,0-26.5-1.4-30.6-28.6c0,0,4.6,4.4,18.8,4.1h21.4V154h-21.7c0,0-26,1.7-27-22.6c0,0,1-19.9,20.9-20.9h9.5V107\n				h-6.5c0,0-7.9-0.2-11.8,1.9c0,0-2-21.8,24.2-26.8l4.7-0.8L173.7,79.7z\"/>\n			<circle fill=\"#FFFFFF\" cx=\"214.6\" cy=\"159.7\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"199.2\" cy=\"209.1\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"233.9\" cy=\"219.4\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"241.2\" cy=\"246.4\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"194.3\" cy=\"106.1\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"210\" cy=\"107.8\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"317.7\" cy=\"110.3\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"299.4\" cy=\"157.3\" r=\"2.9\"/>\n			<circle fill=\"#FFFFFF\" cx=\"215.6\" cy=\"57.1\" r=\"2.9\"/>\n			<circle fill=\"#00AAB4\" cx=\"193.3\" cy=\"156.1\" r=\"2.9\"/>\n			<circle fill=\"#00AAB4\" cx=\"174.7\" cy=\"108.8\" r=\"2.9\"/>\n			<circle fill=\"#00AAB4\" cx=\"277.1\" cy=\"58.6\" r=\"2.9\"/>\n			<circle fill=\"#032828\" cx=\"282.5\" cy=\"108.9\" r=\"2.9\"/>\n			<circle fill=\"#00AAB4\" cx=\"278.4\" cy=\"160.9\" r=\"2.9\"/>\n			<circle fill=\"#00AAB4\" cx=\"293.7\" cy=\"209.9\" r=\"2.9\"/>\n			<circle fill=\"#00AAB4\" cx=\"276.5\" cy=\"233.7\" r=\"2.9\"/>\n			<circle fill=\"#00AAB4\" cx=\"298.7\" cy=\"107.9\" r=\"2.9\"/>\n			<circle fill=\"#032828\" cx=\"252.5\" cy=\"286.7\" r=\"2.9\"/>\n			<path fill=\"#FFFFFF\" d=\"M213.9,55.4v3.8h-35c0,0-9.5,0-10.6,9.4c0,0,0,9.6,10,9.6h36.1c0,0,17.3-1.4,17.5,15.1\n				c0,0,2.1,16.6-20.1,16.5v-3.9c0,0,16.7,1.6,16.2-12.4c0,0,0-11.6-13.6-11.5L179.1,82c0,0-13.9,0.6-14.7-13.8\n				c0,0-0.7-11.8,13.2-12.7L213.9,55.4z\"/>\n			<path fill=\"#FFFFFF\" d=\"M243.3,244.4h-4.2V54.3c0,0-1.5-21.6-25.5-22c0,0-21.7-0.8-25.5,22.9v3.1l-3.9-0.6l-0.2-2.4\n				c0,0,2.6-26,29.4-26.5c0,0,27.5-1.3,29.6,23.8L243.3,244.4z\"/>\n			<path fill=\"#FFFFFF\" d=\"M192.4,104.3v3.9c0,0-10.6-0.3-10.3,11.5c0,0,0.5,8.2,9.6,9.1H225c0,0,11.8-0.5,15,6.7l-0.3,6.3\n				c0,0-3.8-9.6-12.4-9.4l-36.1,0.2c0,0-12.9-0.5-13.2-13.6C178,118.9,176.8,106.2,192.4,104.3z\"/>\n			<path fill=\"#FFFFFF\" d=\"M216.5,157.8v3.6c0,0,10.8,0.6,10.8,11c0,0,0.5,9.3-10.5,10h-35c0,0-15.5-1.4-15.8,15.1\n				c0,0-0.2,12.6,13.9,13.2h7.8c0,0-9,7.7-1.5,19.1c0,0,3.3,5.1,11.4,4.5h24.8c0,0,12.3-0.2,13.6-13.5h-4.1c0,0-0.2,8.8-9.6,9.6h-24\n				c0,0-11.5,1.3-11.1-9.7c0,0-0.3-9.6,10.3-10.2v-3.6h-17.3c0,0-10,0-10.3-10c0,0-0.3-11,10.8-10.7h35.8c0,0,13.7,0.2,14.5-13.5\n				C231.1,172.7,232.7,159.2,216.5,157.8z\"/>\n			<path fill=\"#FFFFFF\" d=\"M319.1,81.1c0,0,23.6,3.7,22.8,31c0,0,12.3,7.8,11.8,21.9c0,0,0.2,10.2-7.8,17.7c0,0,1.3,24.6-25.5,34.4\n				l-2.6,1.1l-6.9-3.3c0,0,26.5-1.4,30.6-28.6c0,0-4.6,4.4-18.8,4.1h-21.4v-3.9h21.7c0,0,26,1.7,27-22.6c0,0-1-19.9-20.9-20.9h-9.5\n				v-3.6h6.5c0,0,7.9-0.2,11.8,1.9c0,0,2-21.8-24.2-26.8l-4.7-0.8L319.1,81.1z\"/>\n			<path fill=\"#00AAB4\" d=\"M278.9,56.8v3.8h35c0,0,9.5,0,10.6,9.4c0,0,0,9.6-10,9.6h-36.1c0,0-17.3-1.4-17.5,15.1\n				c0,0-2.1,16.6,20.1,16.5v-3.9c0,0-16.7,1.6-16.2-12.4c0,0,0-11.6,13.6-11.5l35.3,0.2c0,0,13.9,0.6,14.7-13.8\n				c0,0,0.7-11.8-13.2-12.7L278.9,56.8z\"/>\n			<path fill=\"#00AAB4\" d=\"M249.5,264.6h4.2v-209c0,0,1.5-21.6,25.5-22c0,0,21.7-0.8,25.5,22.9v3.1l3.9-0.6l0.2-2.4\n				c0,0-2.6-26-29.4-26.5c0,0-27.5-1.3-29.6,23.8L249.5,264.6z\"/>\n			<path fill=\"#00AAB4\" d=\"M300.5,105.7v3.9c0,0,10.6-0.3,10.3,11.5c0,0-0.5,8.2-9.6,9.1h-33.3c0,0-11.8-0.5-15,6.7l0.3,6.3\n				c0,0,3.8-9.6,12.4-9.4l36.1,0.2c0,0,12.9-0.5,13.2-13.6C314.9,120.3,316,107.6,300.5,105.7z\"/>\n			<path fill=\"#00AAB4\" d=\"M311,183.8h-35c-10.9-0.8-10.5-10-10.5-10c0-10.4,10.8-11,10.8-11v-3.6c-16.2,1.4-14.5,14.9-14.5,14.9\n				c0.8,13.6,14.5,13.5,14.5,13.5h35.8c11.1-0.3,10.8,10.7,10.8,10.7c-0.3,10-10.3,10-10.3,10h-17.3v3.6\n				c10.6,0.6,10.3,10.2,10.3,10.2c0.4,11.1-11.1,9.7-11.1,9.7H278v3.9h17.1c8.1,0.5,11.4-4.5,11.4-4.5c7.5-11.5-1.5-19.1-1.5-19.1\n				h7.8c14.1-0.6,13.9-13.2,13.9-13.2C326.5,182.4,311,183.8,311,183.8z\"/>\n		</g>\n	</g>\n</g>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_logo-v01.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"116px\" height=\"27px\" viewBox=\"0 0 116 27\">\n	<path fill=\"#414141\" d=\"M7.1,13.4c0-0.9,0.2-1.9,0.5-2.8C8,9.7,8.6,8.9,9.3,8.2c0.7-0.7,1.5-1.3,2.6-1.7c1-0.4,2.1-0.7,3.4-0.7\n		c1.5,0,2.8,0.3,3.9,0.9c1.1,0.6,1.9,1.4,2.5,2.4l-2.5,1.6c-0.2-0.4-0.5-0.8-0.8-1.1c-0.3-0.3-0.6-0.5-1-0.7\n		c-0.4-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.8-0.1-1.1-0.1c-0.8,0-1.5,0.2-2.1,0.5C12.5,9.1,12,9.5,11.6,10c-0.4,0.5-0.7,1-0.9,1.6\n		c-0.2,0.6-0.3,1.2-0.3,1.8c0,0.7,0.1,1.3,0.3,2c0.2,0.6,0.6,1.2,1,1.7c0.4,0.5,0.9,0.9,1.5,1.1c0.6,0.3,1.2,0.4,2,0.4\n		c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.8-0.2,1.1-0.4c0.4-0.2,0.7-0.4,1-0.7c0.3-0.3,0.6-0.6,0.7-1.1l2.6,1.4c-0.3,0.6-0.6,1.1-1.1,1.5\n		c-0.5,0.4-1,0.8-1.6,1.1c-0.6,0.3-1.3,0.5-2,0.7c-0.7,0.2-1.4,0.2-2,0.2c-1.2,0-2.3-0.2-3.2-0.7c-1-0.5-1.8-1.1-2.5-1.8\n		c-0.7-0.7-1.3-1.6-1.6-2.5C7.3,15.3,7.1,14.4,7.1,13.4\"/>\n	<rect x=\"41.9\" y=\"5.9\" fill=\"#414141\" width=\"3.2\" height=\"15.3\"/>\n	<path fill=\"#414141\" d=\"M77,9.9c-0.1-0.1-0.3-0.2-0.6-0.4c-0.3-0.2-0.6-0.3-1-0.5C75,8.8,74.5,8.6,74,8.5c-0.5-0.1-1-0.2-1.5-0.2\n		c-0.9,0-1.5,0.2-2,0.5C70.2,9.1,70,9.5,70,10.1c0,0.3,0.1,0.6,0.2,0.8c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.2,0.4\n		c0.5,0.1,1,0.3,1.6,0.4c0.8,0.2,1.5,0.4,2.2,0.6c0.7,0.2,1.2,0.5,1.7,0.9c0.5,0.3,0.8,0.8,1.1,1.2c0.2,0.5,0.4,1.1,0.4,1.8\n		c0,0.8-0.2,1.5-0.5,2.1c-0.3,0.6-0.8,1.1-1.3,1.4c-0.6,0.4-1.2,0.6-1.9,0.8c-0.7,0.2-1.5,0.2-2.3,0.2c-1.2,0-2.5-0.2-3.7-0.5\n		C68,20.5,67,20,66,19.4l1.4-2.6c0.1,0.1,0.4,0.3,0.8,0.5c0.4,0.2,0.8,0.4,1.3,0.6c0.5,0.2,1,0.4,1.6,0.5c0.6,0.1,1.2,0.2,1.9,0.2\n		c1.8,0,2.6-0.5,2.6-1.6c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.9-0.6c-0.4-0.2-0.8-0.3-1.3-0.5c-0.5-0.1-1.1-0.3-1.8-0.5\n		c-0.8-0.2-1.5-0.4-2.1-0.7c-0.6-0.2-1.1-0.5-1.4-0.8c-0.4-0.3-0.7-0.7-0.9-1.1c-0.2-0.4-0.3-0.9-0.3-1.5c0-0.8,0.2-1.5,0.5-2.1\n		c0.3-0.6,0.7-1.1,1.3-1.5c0.6-0.4,1.2-0.7,1.9-0.9c0.7-0.2,1.5-0.3,2.3-0.3c1.2,0,2.2,0.2,3.2,0.5c1,0.3,1.8,0.7,2.6,1.2L77,9.9z\"\n		/>\n	<path fill=\"#414141\" d=\"M95.4,21.2V5.9h7c0.8,0,1.5,0.1,2.1,0.4c0.6,0.3,1.2,0.7,1.7,1.2c0.5,0.5,0.8,1,1.1,1.6\n		c0.3,0.6,0.4,1.2,0.4,1.8c0,0.6-0.1,1.3-0.4,1.9c-0.2,0.6-0.6,1.2-1,1.6c-0.4,0.5-1,0.9-1.6,1.1c-0.6,0.3-1.3,0.4-2.1,0.4h-3.9v5.1\n		H95.4z M98.6,13.5h3.7c0.6,0,1.1-0.2,1.5-0.7c0.4-0.4,0.6-1,0.6-1.8c0-0.4-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.5-0.8\n		c-0.2-0.2-0.4-0.4-0.7-0.5c-0.3-0.1-0.5-0.2-0.8-0.2h-3.6V13.5z\"/>\n	<path fill=\"#414141\" d=\"M113.6,24.8H2.4V2.3h111.2V24.8z M116,0H0v27h116V0z\"/>\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_notFound.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg viewBox=\"0 0 24 24\" with=\"24px\" height=\"24px\" fill=\"none\" stroke=\"#CCCCCC\">\n	<polygon  stroke-linejoin=\"round\" stroke-miterlimit=\"10\" points=\"12,0.6 1.5,23.4 22.5,23.4 	\"/>\n	<text transform=\"matrix(1 0 0 1 9.4685 21.1878)\" fill=\"#CCCCCC\" font-family=\"'MyanmarMN'\" font-size=\"17.3977\">!</text>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_organogram_thematic.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800px\" height=\"400px\" viewBox=\"0 0 137 100\">\n<text transform=\"matrix(1 0 0 1 10.4878 64.6427)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">Ch</tspan><tspan x=\"3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"3.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onic diseases</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_1_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_2_\">\n		<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"58.9\" clip-path=\"url(#SVGID_2_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 3.6304 46.9376)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">F</tspan><tspan x=\"1.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">om </tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ev</tspan><tspan x=\"8.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">alu</tspan><tspan x=\"12.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"13.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion </tspan><tspan x=\"18.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"19.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o action: epidermiologica</tspan><tspan x=\"47.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"48.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> studies, design and </tspan><tspan x=\"70.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ev</tspan><tspan x=\"73.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">alu</tspan><tspan x=\"76.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"78.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion </tspan><tspan x=\"83.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o</tspan><tspan x=\"84.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"85.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> i</tspan><tspan x=\"86.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"88.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"88.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">er</tspan><tspan x=\"91.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">v</tspan><tspan x=\"92.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"93.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"95.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tions and p</tspan><tspan x=\"107.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"108.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">og</tspan><tspan x=\"111.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"112.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ams, </tspan></text>\n<text transform=\"matrix(1 0 0 1 45.9458 50.1505)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">kn</tspan><tspan x=\"2.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o</tspan><tspan x=\"4.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">wledge t</tspan><tspan x=\"13.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"14.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ans</tspan><tspan x=\"18.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"19.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"20.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"21.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> and </tspan><tspan x=\"26.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"28.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">oope</tspan><tspan x=\"33.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"34.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"36\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_3_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_4_\">\n		<use xlink:href=\"#SVGID_3_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"43.2\" clip-path=\"url(#SVGID_4_)\" fill=\"none\" stroke=\"#414141\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"134.3\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 56.8828 62.2559)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">V</tspan><tspan x=\"1.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ulne</tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">able g</tspan><tspan x=\"14\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"14.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">oups</tspan></text>\n<text transform=\"matrix(1 0 0 1 51.6646 65.4698)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">(</tspan><tspan x=\"0.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">child</tspan><tspan x=\"6.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">en, elder</tspan><tspan x=\"16.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"17.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"18.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">, mig</tspan><tspan x=\"23.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"24.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"26\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"27.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ts)</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_5_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_6_\">\n		<use xlink:href=\"#SVGID_5_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"48.8\" y=\"58.9\" clip-path=\"url(#SVGID_6_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n	<rect x=\"48.8\" y=\"79\" clip-path=\"url(#SVGID_6_)\" fill=\"#446CB3\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 52.0874 83.0177)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">A</tspan><tspan x=\"1.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> </tspan><tspan x=\"2.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">f</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ocus on speciﬁc g</tspan><tspan x=\"22.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"23.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">oups </tspan></text>\n<text transform=\"matrix(1 0 0 1 59.229 86.2325)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">and </tspan><tspan x=\"4.9\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">onditions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_7_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_8_\">\n		<use xlink:href=\"#SVGID_7_\"  overflow=\"visible\"/>\n	</clipPath>\n	<rect x=\"48.8\" y=\"6.5\" clip-path=\"url(#SVGID_8_)\" fill=\"#446CB3\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 51.4746 10.6309)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">A</tspan><tspan x=\"1.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> li</tspan><tspan x=\"3.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">f</tspan><tspan x=\"4.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"5.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"6.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ourse perspecti</tspan><tspan x=\"23.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">v</tspan><tspan x=\"25\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e on </tspan></text>\n<text transform=\"matrix(1 0 0 1 55.8741 13.8438)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">health d</tspan><tspan x=\"9.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"10.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">t</tspan><tspan x=\"11.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ermina</tspan><tspan x=\"19.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"20.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ts</tspan></text>\n<text transform=\"matrix(1 0 0 1 104.1641 62.7325)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">I</tspan><tspan x=\"0.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"2.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ectious diseases</tspan></text>\n<text transform=\"matrix(1 0 0 1 110.7481 65.9454)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">(HI</tspan><tspan x=\"3.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">V</tspan><tspan x=\"4.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">,</tspan><tspan x=\"5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> </tspan><tspan x=\"5.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">TB)</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_9_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_10_\">\n		<use xlink:href=\"#SVGID_9_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"96.4\" y=\"58.9\" clip-path=\"url(#SVGID_10_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 111.9121 30.9708)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ealth </tspan><tspan x=\"7.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">s</tspan><tspan x=\"9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"10.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">s</tspan><tspan x=\"11.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"12.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ems </tspan></text>\n<text transform=\"matrix(1 0 0 1 110.544 34.1827)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">and o</tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ganiz</tspan><tspan x=\"13.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"14.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_11_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_12_\">\n		<use xlink:href=\"#SVGID_11_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"107.1\" y=\"27.2\" clip-path=\"url(#SVGID_12_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 75.6324 32.8399)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ealt</tspan><tspan x=\"5.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">h</tspan><tspan x=\"7.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"8.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> li</tspan><tspan x=\"10.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"11.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">estyles</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_13_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_14_\">\n		<use xlink:href=\"#SVGID_13_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"71.9\" y=\"27.2\" clip-path=\"url(#SVGID_14_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 40.1094 29.5772)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">O</tspan><tspan x=\"1.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">cup</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"8.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tiona</tspan><tspan x=\"14.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"14.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> and</tspan></text>\n<text transform=\"matrix(1 0 0 1 42.0772 32.7901)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"1.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">vi</tspan><tspan x=\"4.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"5.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onme</tspan><tspan x=\"12\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"13.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tal</tspan></text>\n<text transform=\"matrix(1 0 0 1 45.8184 36.004)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> haza</tspan><tspan x=\"5.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"6.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ds</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_15_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_16_\">\n		<use xlink:href=\"#SVGID_15_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"36.7\" y=\"27.2\" clip-path=\"url(#SVGID_16_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 6.168 30.9708)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">Socioe</tspan><tspan x=\"7.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"8.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onomic</tspan></text>\n<text transform=\"matrix(1 0 0 1 9.3467 34.1827)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"1.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onditions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_17_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_18_\">\n		<use xlink:href=\"#SVGID_17_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"27.2\" clip-path=\"url(#SVGID_18_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n	<rect x=\"96.4\" y=\"82.9\" clip-path=\"url(#SVGID_18_)\" fill=\"#414141\" width=\"39.4\" height=\"14.7\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 100.1407 86.338)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Public health g</tspan><tspan x=\"16.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ov</tspan><tspan x=\"19.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ernan</tspan><tspan x=\"25.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"27\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan></text>\n<text transform=\"matrix(1 0 0 1 102.7285 89.5499)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Financing, in</tspan><tspan x=\"14.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"16.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"18.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ti</tspan><tspan x=\"19.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">v</tspan><tspan x=\"21\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">es,</tspan></text>\n<text transform=\"matrix(1 0 0 1 100.7959 92.7637)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">manageme</tspan><tspan x=\"12.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"14.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">t, e</tspan><tspan x=\"17.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"18.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">onomic </tspan></text>\n<text transform=\"matrix(1 0 0 1 109.5127 95.9766)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ev</tspan><tspan x=\"2.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">alu</tspan><tspan x=\"6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">a</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tion</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_19_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_20_\">\n		<use xlink:href=\"#SVGID_19_\"  overflow=\"visible\"/>\n	</clipPath>\n	<rect x=\"2.4\" y=\"1.3\" clip-path=\"url(#SVGID_20_)\" fill=\"#414141\" width=\"39.4\" height=\"14.7\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 8.147 4.5343)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Public health </tspan><tspan x=\"15.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"15.9\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">esea</tspan><tspan x=\"21\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"21.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ch</tspan></text>\n<text transform=\"matrix(1 0 0 1 10.7784 7.7471)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ealth p</tspan><tspan x=\"9.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"10.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">om</tspan><tspan x=\"14\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">o</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tion, </tspan></text>\n<text transform=\"matrix(1 0 0 1 4.752 10.96)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">epidemiolog</tspan><tspan x=\"14.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">y</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">, o</tspan><tspan x=\"18\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"19.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">cup</tspan><tspan x=\"23.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">a</tspan><tspan x=\"24.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tional </tspan></text>\n<text transform=\"matrix(1 0 0 1 9.271 14.1739)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">health, globa</tspan><tspan x=\"14.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">l</tspan><tspan x=\"15.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> health</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_21_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_22_\">\n		<use xlink:href=\"#SVGID_21_\"  overflow=\"visible\"/>\n	</clipPath>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.5,16 \n		68.5,21.1 15.7,21.1 15.7,27.2 	\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.5,16 \n		68.5,21.1 121.2,21.1 121.2,27.2 	\"/>\n	\n		<line clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"51\" y1=\"21.1\" x2=\"51\" y2=\"27.2\"/>\n	\n		<line clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"86.2\" y1=\"27.2\" x2=\"86.2\" y2=\"21.1\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.3,79 \n		68.3,73.7 68.3,68.4 	\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"20.9,68.4 \n		20.9,73.7 68.3,73.7 116.1,73.7 116.1,68.4 	\"/>\n	<polygon clip-path=\"url(#SVGID_22_)\" fill=\"#414141\" points=\"71.1,41.6 68.5,39 65.8,41.6 	\"/>\n	<polygon clip-path=\"url(#SVGID_22_)\" fill=\"#414141\" points=\"65.8,54.3 68.5,57 71.1,54.3 	\"/>\n</g>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_pause.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M14,19.14H18V5.14H14M6,19.14H10V5.14H6V19.14Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_phone.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_pin.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n	<path d=\"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z\" />\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" />\n</svg>\n";
  });

this["JST"]["app/scripts/templates/landing/landing-view.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "\n\n\n\n<aside class=\"landing-view-aside landing-description\">\n    <h1>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "title", options) : helperMissing.call(depth0, "t", "title", options)))
    + "</h1>\n    <h2>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "subtitle", options) : helperMissing.call(depth0, "t", "subtitle", options)))
    + "</h2>\n    <div class=\"divider\"></div>\n    <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "tagline", options) : helperMissing.call(depth0, "t", "tagline", options)))
    + "</p>\n    <div class=\"navigate\">\n      <a href=\"";
  if (helper = helpers.fid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.route)),stack1 == null || stack1 === false ? stack1 : stack1.home)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "more", options) : helperMissing.call(depth0, "t", "more", options)))
    + "</a>\n    </div>\n\n</aside>\n\n<aside class=\"landing-view-aside landing-logo\">\n    <div class=\"landing-logo\" alt=\"Mental health logo\"></div>\n</aside>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/project/project.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n          <h2 class=\"article-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.paragraph), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n              <p class=\"article-paragraph\">- "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</p>\n          ";
  return buffer;
  }

  buffer += "<h1 class=\"page-title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "projectTitle", options) : helperMissing.call(depth0, "t", "projectTitle", options)))
    + "</h1>\n\n<article>\n\n    <div class=\"article-content\">\n\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.project)),stack1 == null || stack1 === false ? stack1 : stack1.articles), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n</article>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/team/team.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n        <div class=\"member\">\n\n          \n          <div class=\"member-avatar\" style=\"background-image:url('";
  if (helper = helpers.avatar) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.avatar); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"></div>\n\n          <div class=\"member-data\">\n              <div class=\"member-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n              <div class=\"member-organization\">";
  if (helper = helpers.organization) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.organization); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n              <div class=\"member-initials\">";
  if (helper = helpers.initials) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.initials); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n              <div class=\"member-organization-logo\" style=\"background-image:url('";
  if (helper = helpers.logo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"></div>\n          </div>\n\n        </div>\n\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"member\">\n\n          <div class=\"member-avatar\" style=\"background-image:url('";
  if (helper = helpers.avatar) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.avatar); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"></div>\n\n          <div class=\"member-data\">\n              <div class=\"member-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n              <div class=\"member-organization ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.initials), "===", "ACSS", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.initials), "===", "ACSS", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.organization) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.organization); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n              <div class=\"member-initials\">";
  if (helper = helpers.initials) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.initials); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n              <div class=\"member-organization-logo\" style=\"background-image:url('";
  if (helper = helpers.logo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"></div>\n          </div>\n\n      </div>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "small ";
  }

  buffer += "<div class=\"top-bar\"></div>\n\n<h1 class=\"page-title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "researchers", options) : helperMissing.call(depth0, "t", "researchers", options)))
    + "</h1>\n\n<div class=\"members-block\">\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.team)),stack1 == null || stack1 === false ? stack1 : stack1.researchers), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<h1 class=\"page-subtitle experts\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "experts", options) : helperMissing.call(depth0, "t", "experts", options)))
    + "</h1>\n\n<div class=\"members-block\">\n  ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.i18n)),stack1 == null || stack1 === false ? stack1 : stack1.team)),stack1 == null || stack1 === false ? stack1 : stack1.experts), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<h1 class=\"page-subtitle partners\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "partners", options) : helperMissing.call(depth0, "t", "partners", options)))
    + "</h1>\n\n<div class=\"partners-block\">\n    <div class=\"partners-block-wrapper\">\n      <a href=\"http://www.ensp.unl.pt/\" target=\"_blank\">\n          <img src=\"images/organizations/unl_ensp.png\" alt=\"National School of Public Health logo\">\n      </a>\n      <a href=\"http://eeagrants.org/\" target=\"_blank\">\n          <img src=\"images/organizations/eea_grants.png\" alt=\"European Economic Area Grants logo\">\n      </a>\n      <a href=\"https://helsedirektoratet.no/\" target=\"_blank\">\n          <img src=\"images/organizations/norwegian_directorate_of_health.jpg\" alt=\"Norwegian Directorate for Health logo\">\n      </a>\n      <a href=\"http://www.chpl.pt/\" target=\"_blank\">\n          <img src=\"images/organizations/centro_hospitalar_psiquiatrico_de_lisboa.jpg\" alt=\"Lisbon Psychiatric Hospital Center logo\">\n      </a>\n      <a href=\"http://www.hmlemos.min-saude.pt/\" target=\"_blank\">\n          <img src=\"images/organizations/hospital_de_magalhaes_lemos.jpg\" alt=\"Magalhães Lemos Hospital logo\">\n      </a>\n      <a href=\"http://www.chlo.min-saude.pt/\" target=\"_blank\">\n          <img src=\"images/organizations/centro_hospitalar_de_lisboa_ocidental.jpg\" alt=\"West Lisbon Hospital Center logo\">\n      </a>\n      <a href=\"http://www.fcm.unl.pt/\" target=\"_blank\">\n          <img src=\"images/organizations/nova_medical_school.jpg\" alt=\"Nova Medical School logo\">\n      </a>\n      <a href=\"http://www.univr.it/\" target=\"_blank\">\n          <img src=\"images/organizations/universita_degli_studi_di_verona.jpg\" alt=\"Verona University logo\">\n      </a>\n      <a href=\"http://www.uclouvain.be/\" target=\"_blank\">\n          <img src=\"images/organizations/universite_catholique_de_louvain.jpg\" alt=\"Louvain Catholic University logo\">\n      </a>\n      <a href=\"http://www.arslvt.min-saude.pt/\" target=\"_blank\">\n          <img src=\"images/organizations/administracao_regional_de_saude_de_lisboa_e_vale_do_tejo.jpg\" alt=\"Lisbon and Tagus Valley Regional Health Administration logo\">\n      </a>\n    </div>\n\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/timeline/timeline.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1 class=\"page-title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "timelineTitle", options) : helperMissing.call(depth0, "t", "timelineTitle", options)))
    + "</h1>\n<img src=\"images/timeline-graph.svg\" alt=\"\">\n";
  return buffer;
  });

return this["JST"];

});