!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-fit-images"),require("prop-types"),require("react"),require("react-lazyimg")):"function"==typeof define&&define.amd?define(["classnames","noop","object-fit-images","prop-types","react","react-lazyimg"],t):"object"==typeof exports?exports.ReactAvatar=t(require("classnames"),require("noop"),require("object-fit-images"),require("prop-types"),require("react"),require("react-lazyimg")):e.ReactAvatar=t(e.classnames,e.noop,e["object-fit-images"],e["prop-types"],e.react,e["react-lazyimg"])}(this,function(e,t,r,o,a,n){return function(e){function t(o){if(r[o])return r[o].exports;var a=r[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=o(a);t.default=n.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,f,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(5),d=o(p),y=r(6),b=o(y),m=r(7),v=o(m),h=r(2),g=o(h),j=r(3),x=o(j),O=r(4),_=o(O),q=(f=c=function(e){function t(){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"componentDidMount",value:function(){if(!_.default.supportsObjectFit){var e=document.querySelectorAll(".react-avatar img");(0,_.default)(e,{watchMQ:!0})}}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.radius,o=(e.placeholder,e.url),n=e.effect,u=e.onLoad,i=e.lazy,c=e.size,f=a(e,["className","radius","placeholder","url","effect","onLoad","lazy","size"]);return b.default.createElement("figure",s({},f,{style:{width:c[0],height:c[1]||c[0],borderRadius:r},className:(0,g.default)("react-avatar",t)}),b.default.createElement(v.default,{onLoad:u,style:{borderRadius:r},lazy:i,className:"react-avatar-img",effect:n,url:o}))}}]),t}(y.Component),c.propTypes={className:d.default.string,url:d.default.string,effect:d.default.oneOf(["fade","replace"]),lazy:d.default.bool,size:d.default.array,onLoad:d.default.func,radius:d.default.string},c.defaultProps={lazy:!1,radius:"100px",effect:"fade",size:["32px"],onLoad:x.default},f);t.default=q},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-avatar.js.map