!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-fit-images"),require("prop-types"),require("react"),require("react-lazyimg")):"function"==typeof define&&define.amd?define(["classnames","noop","object-fit-images","prop-types","react","react-lazyimg"],t):"object"==typeof exports?exports.ReactAvatar=t(require("classnames"),require("noop"),require("object-fit-images"),require("prop-types"),require("react"),require("react-lazyimg")):e.ReactAvatar=t(e.classnames,e.noop,e["object-fit-images"],e["prop-types"],e.react,e["react-lazyimg"])}(this,function(e,t,r,n,o,i){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=n(o);t.default=i.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,f,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(5);var p=r(9),d=n(p),h=r(10),v=n(h),y=r(11),b=n(y),m=r(6),g=n(m),x=r(7),j=n(x),O=r(8),w=n(O),L=(f=u=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"processSize",value:function(){var e=this.props.size;return"string"==typeof e?{width:e,height:e}:e}},{key:"componentDidMount",value:function(){w.default.supportsObjectFit||this.doObjectFitFix()}},{key:"doObjectFitFix",value:function(){var e=document.querySelectorAll(".react-avatar img");(0,w.default)(e,{watchMQ:!0})}},{key:"render",value:function(){var e=this.processSize(this.props.size),t=this.props,r=t.className,n=t.radius,i=(t.placeholder,t.url),a=t.effect,s=t.onLoad,u=t.lazy,f=o(t,["className","radius","placeholder","url","effect","onLoad","lazy"]);return v.default.createElement("figure",c({},f,{style:{width:e.width,height:e.height,borderRadius:n},className:(0,g.default)("react-avatar",r)}),v.default.createElement(b.default,{onLoad:s,style:{borderRadius:n},lazy:u,className:"avatar-img",effect:a,url:i}))}}]),t}(v.default.PureComponent),u.propTypes={className:d.default.string,url:d.default.string,effect:d.default.oneOf(["fade","replace"]),lazy:d.default.bool,size:d.default.oneOfType([d.default.string,d.default.object]),onLoad:d.default.func,radius:d.default.string},u.defaultProps={lazy:!1,radius:"100px",effect:"fade",size:"32px",title:"",onLoad:j.default},f);t.default=L},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,'.react-avatar{position:relative;overflow:hidden;display:inline-block}.react-avatar>img{-o-object-fit:cover;object-fit:cover;font-family:"object-fit: cover;";position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(f(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(f(n.parts[i],t));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],u=o[3],f={css:a,media:s,sourceMap:u};r[i]?r[i].parts.push(f):t.push(r[i]={id:i,parts:[f]})}return t}function i(e,t){var r=y(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function f(e,t){var r,n,o;if(t.singleton){var i=m++;r=b||(b=s(t)),n=c.bind(null,r,i,!1),o=c.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=p.bind(null,r),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=l.bind(null,r),o=function(){a(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],u=d[s.id];u.refs--,i.push(u)}if(e){var f=o(e);n(f,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-avatar.js.map