// Zepto 1.1.6 (generated with Zepto Builder) - zepto event ajax form ie deferred selector callbacks - zeptojs.com/license 
define([], function () {
var Zepto=function(){function t(t){return null==t?String(t):J[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return A.call(t,function(t){return null!=t})}function u(t){return t.length>0?C.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in $?$[t]:$[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||L[c(t)]?e:e+"px"}function h(t){var e,n;return D[t]||(e=Z.createElement(t),Z.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function p(t){return"children"in t?k.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function m(t,e,n){for(j in e)n&&(o(e[j])||Q(e[j]))?(o(e[j])&&!o(t[j])&&(t[j]={}),Q(e[j])&&!Q(t[j])&&(t[j]=[]),m(t[j],e[j],n)):e[j]!==E&&(t[j]=e[j])}function g(t,e){return null==e?C(t):C(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",r=n&&n.baseVal!==E;return e===E?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)w(t.childNodes[n],e)}var E,j,C,T,N,S,O=[],P=O.concat,A=O.filter,k=O.slice,Z=window.document,D={},$={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},F=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,M=/^(?:body|html)$/i,z=/([A-Z])/g,W=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],I=Z.createElement("table"),_=Z.createElement("tr"),B={tr:Z.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:_,th:_,"*":Z.createElement("div")},V=/complete|loaded|interactive/,U=/^[\w-]*$/,J={},X=J.toString,Y={},G=Z.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=G).appendChild(t),r=~Y.qsa(i,e).indexOf(t),o&&G.removeChild(t),r},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var r,i,s;return q.test(t)&&(r=C(Z.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===E&&(e=F.test(t)&&RegExp.$1),e in B||(e="*"),s=B[e],s.innerHTML=""+t,r=C.each(k.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=C(r),C.each(n,function(t,e){W.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},Y.Z=function(t,e){return new d(t,e)},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var r;if(!t)return Y.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&F.test(t))r=Y.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return C(n).find(t);r=Y.qsa(Z,t)}else{if(e(t))return C(Z).ready(t);if(Y.isZ(t))return t;if(Q(t))r=a(t);else if(i(t))r=[t],t=null;else if(F.test(t))r=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return C(n).find(t);r=Y.qsa(Z,t)}}return Y.Z(r,t)},C=function(t,e){return Y.init(t,e)},C.extend=function(t){var e,n=k.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},Y.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=U.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:k.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=Z.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=t,C.isFunction=e,C.isWindow=n,C.isArray=Q,C.isPlainObject=o,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},C.camelCase=N,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},C.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},C.grep=function(t,e){return A.call(t,e)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){J["[object "+e+"]"]=e.toLowerCase()}),C.fn={constructor:Y.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=Y.isZ(e)?e.toArray():e;return P.apply(Y.isZ(this)?this.toArray():this,n)},map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(k.apply(this,arguments))},ready:function(t){return V.test(Z.readyState)&&Z.body?t(C):Z.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===E?k.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):C(A.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return C(S(this.concat(C(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?k.call(t):C(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return C(n)},has:function(t){return this.filter(function(){return i(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:C(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?C(t).filter(function(){var t=this;return O.some.call(n,function(e){return C.contains(e,t)})}):1==this.length?C(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):C()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=C(t));n&&!(i?i.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(S(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||k.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=C(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){C(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=C(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(j in t)y(this,j,t[j]);else y(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?b(r):E},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=C(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(!C.contains(Z.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[N(e)]||r.getPropertyValue(e);if(Q(e)){var o={};return C.each(e,function(t,e){o[e]=i.style[N(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(j in e)e[j]||0===e[j]?s+=c(j)+":"+f(j,e[j])+";":this.each(function(){this.style.removeProperty(c(j))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?O.some.call(this,function(t){return this.test(x(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){T=[];var n=x(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||T.push(t)},this),T.length&&x(this,n+(n?" ":"")+T.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return x(this,"");T=x(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(l(t)," ")}),x(this,T.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=C(this),i=v(this,t,n,x(this));i.split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=M.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,r.top+=parseFloat(C(e[0]).css("border-top-width"))||0,r.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||Z.body;t&&!M.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(i){var o,s=this[0];return i===E?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=C(this),s.css(t,v(this,i,e,s[t]()))})}}),H.forEach(function(e,n){var r=n%2;C.fn[e]=function(){var e,i,o=C.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=C.contains(Z.documentElement,i);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return C(t).remove();i.insertBefore(t,e),a&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return C(t)[e](this),this}}),Y.Z.prototype=d.prototype=C.fn,Y.uniq=S,Y.deserializeValue=b,C.zepto=Y,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function s(t,e,r,i){var o=r.context,s="success";r.success.call(o,t,s,e),i&&i.resolveWith(o,[t,s,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(s,e,r)}function a(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==j?"html":t==E?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",j="text/html",C=/^\s*$/,T=y.createElement("a");T.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?s(r[0],p,e,n):a(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:j,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i,u=t.extend({},e||{}),p=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===u[m]&&(u[m]=t.ajaxSettings[m]);r(u),u.crossDomain||(n=y.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=T.protocol+"//"+T.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(i=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,i)),h(u);var d=u.dataType,v=/\?.+=\?/.test(u.url);if(v&&(d="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=d&&"jsonp"!=d)||(u.url=f(u.url,"_="+Date.now())),"jsonp"==d)return v||(u.url=f(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,p);var x,b=u.accepts[d],w={},E=function(t,e){w[t.toLowerCase()]=[t,e]},j=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,N=u.xhr(),S=N.setRequestHeader;if(p&&p.promise(N),u.crossDomain||E("X-Requested-With","XMLHttpRequest"),E("Accept",b||"*/*"),(b=u.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(b)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&E("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(g in u.headers)E(g,u.headers[g]);if(N.setRequestHeader=E,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=c,clearTimeout(x);var e,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==j){d=d||l(u.mimeType||N.getResponseHeader("content-type")),e=N.responseText;try{"script"==d?(1,eval)(e):"xml"==d?e=N.responseXML:"json"==d&&(e=C.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?a(n,"parsererror",N,u,p):s(e,N,u,p)}else a(N.statusText||null,N.status?"error":"abort",N,u,p)}},o(N,u)===!1)return N.abort(),a(null,"abort",N,u,p),N;if(u.xhrFields)for(g in u.xhrFields)N[g]=u.xhrFields[g];var O="async"in u?u.async:!0;N.open(u.type,u.url,O,u.username,u.password);for(g in w)S.apply(N,w[g]);return u.timeout>0&&(x=setTimeout(function(){N.onreadystatechange=c,N.abort(),a(null,"timeout",N,u,p)},u.timeout)),N.send(u.data?u.data:null),N},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,s=e.split(/\s/),a=p(e,n,r),u=a.success;return s.length>1&&(a.url=s[0],i=s[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(x,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(a),this};var N=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(e)+"="+N(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,r,i,o,s,a,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,r=!0,a=o||0,o=0,s=u.length,i=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var r=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),i?s=u.length:n&&(o=r,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var r;(r=t.inArray(n,u,r))>-1;)u.splice(r,1),i&&(s>=r&&--s,a>=r&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=c=n=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||r&&!c||(e=e||[],e=[t,e.slice?e.slice():e],i?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!r}};return f}}(Zepto),function(t){function e(n){var r=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],i="pending",o={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(r,function(r,i){var a=t.isFunction(n[r])&&n[r];s[i[1]](function(){var n=a&&a.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var r=this===o?e.promise():this,s=a?[n]:arguments;e[i[0]+"With"](r,s)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(r,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){i=a},r[1^t][2].disable,r[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),n&&n.call(s,s),s}var n=Array.prototype.slice;t.when=function(r){var i,o,s,a=n.call(arguments),u=a.length,c=0,l=1!==u||r&&t.isFunction(r.promise)?u:0,f=1===l?r:e(),h=function(t,e,r){return function(o){e[t]=this,r[t]=arguments.length>1?n.call(arguments):o,r===i?f.notifyWith(e,r):--l||f.resolveWith(e,r)}};if(u>1)for(i=new Array(u),o=new Array(u),s=new Array(u);u>c;++c)a[c]&&t.isFunction(a[c].promise)?a[c].promise().done(h(c,s,a)).fail(f.reject).progress(h(c,o,i)):--l;return l||f.resolveWith(s,a),f.promise()},t.Deferred=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=r(n),n.ns)var a=i(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function s(t){return b[t]||y&&x[t]||t}function a(n,i,a,u,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var i=r(e);i.fn=a,i.sel=l,i.e in b&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||a;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(s(i.e),i.proxy,o(i,p))})}function u(t,r,i,a,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,a).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(C,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var s,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(i===f||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(s=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),a(h,e,i,r,n,c||s)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,a){i=l(m(e)?t.Event(e):e),i._args=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,r,i=a.exec(t);if(i&&i[2]in s&&(n=s[i[2]],r=i[3],t=i[1],r)){var o=Number(r);r=isNaN(o)?r.replace(/^["']|["']$/g,""):o}return e(t,n,r)}var r=t.zepto,i=r.qsa,o=r.matches,s=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,r){return t(this).text().indexOf(r)>-1?this:void 0},has:function(t,e,n){return r.qsa(this,n).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;r.qsa=function(e,o){return n(o,function(n,s,a){try{var l;!n&&s?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=i(e,n)}catch(h){throw console.error("error performing selector: %o",o),h}finally{l&&l.removeClass(c)}return s?r.uniq(t.map(f,function(t,e){return s.call(t,e,f,a)})):f})},r.matches=function(t,e){return n(e,function(e,n,r){return!(e&&!o(t,e)||n&&n.call(t,null,r)!==t)})}}(Zepto);
return Zepto;
});