(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.vnode=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var i=n(8);t.vnode=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.vtype=0,t||(t="div"),this.tag=t,this.children=[]}return r(e,[{key:"a",value:function(e){return this.attrs=e,this}},{key:"on",value:function(e){return this.events=e,this}},{key:"c",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r in t)"string"==typeof t[r]&&(t[r]=new i.vtext(t[r]));return this.children=t,this}},{key:"render",value:function(){var e=document.createElement(this.tag);for(var t in e.v=this,e.vtype=2,this.attrs)e.setAttribute(t,this.attrs[t]);for(var n in this.events)e.addEventListener(n,this.events[n]);for(var r=0,i=this.children.length;r<i;r++)e.appendChild(this.children[r].render());return e}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.nodePatchTypes={CREATE:0,REMOVE:1,REPLACE:2,UPDATE:3},t.propPatchTypes={REMOVE:0,UPDATE:1}},,,,function(e,t,n){"use strict";var r=n(6),i=n(7);Element.prototype.update=function(e){var t=(0,r.diff)(this.v,e);(0,i.patch)(this,t),this.v=e},Element.prototype.render=function(){return this}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.diff=i;var r=n(1);function i(e,t){return e?t?(2===e.vtype&&(e=e.v),2===t.vtype&&(t=t.v),e.vtype!==t.vtype?{type:r.nodePatchTypes.REPLACE,elem:t}:1===e.vtype?function(e,t){if(e.text===t.text)return;return{type:r.nodePatchTypes.REPLACE,elem:t}}(e,t):function(e,t){if(e.tag!==t.tag)return{type:r.nodePatchTypes.REPLACE,elem:t};var n=function(e,t){var n=[],i=Object.assign(Object.assign({},e.attrs),t.attrs);return Object.keys(i).forEach((function(i){var o=e.attrs[i],a=t.attrs[i];null==a?n.push({type:r.propPatchTypes.REMOVE,key:i,value:null}):o!==a&&n.push({type:r.propPatchTypes.UPDATE,key:i,value:a})})),n}(e,t),o=function(e,t){var n=[],i=Object.assign(Object.assign({},e.events),t.events);return Object.keys(i).forEach((function(i){var o=e.events[i],a=t.events[i];null==a?n.push({type:r.propPatchTypes.REMOVE,key:i,value:o}):null!=o&&o===a||n.push({type:r.propPatchTypes.UPDATE,key:i,value:[o,a]})})),n}(e,t),a=function(e,t){for(var n=[],r=Math.max(e.children.length,t.children.length),o=0;o<r;o++)n.push(i(e.children[o],t.children[o]));return n}(e,t);return n.length>0||o.length>0||a.some((function(e){return void 0!==e}))?{type:r.nodePatchTypes.UPDATE,event:o,attr:n,children:a}:void 0}(e,t)):{type:r.nodePatchTypes.REMOVE}:{type:r.nodePatchTypes.CREATE,elem:t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.patch=function e(t,n,i){if(!i&&!t.parentNode||!n)return;i||(i=t.parentNode);if(n.type===r.nodePatchTypes.CREATE)return console.log(1234),void i.appendChild(n.elem.render());if(n.type===r.nodePatchTypes.REMOVE)return i.removeChild(t),1;if(n.type===r.nodePatchTypes.REPLACE)return void i.replaceChild(n.elem.render(),t);if(n.type===r.nodePatchTypes.UPDATE){var o=n.attr,a=n.event,u=n.children;!function(e,t){if(!t)return;for(var n in t){var i=t[n];i.type===r.propPatchTypes.REMOVE?e.removeAttribute(i.key):i.type===r.propPatchTypes.UPDATE&&e.setAttribute(i.key,i.value)}}(t,o),function(e,t){if(!t)return;for(var n in t){var i=t[n];i.type===r.propPatchTypes.REMOVE?e.removeEventListener(i.key,i.value):i.type===r.propPatchTypes.UPDATE&&(e.removeEventListener(i.key,i.value[0]),e.addEventListener(i.key,i.value[1]))}}(t,a);for(var s=0,c=0,p=u.length;s<p;c++,s++){1===e(t.childNodes[s],u[c],t)&&s--}}};var r=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.vtext=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.vtype=1,this.text=t}return r(e,[{key:"render",value:function(){return document.createTextNode(this.text)}}]),e}()}]]);