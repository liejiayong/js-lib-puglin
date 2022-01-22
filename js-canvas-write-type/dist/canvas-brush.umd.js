
/**
 * @description: canvas写字，支持刷子引入
 * @author: liejiayong(809206619@qq.com)
 * @Date: 2022-01-15 11:58:49
 * @LastEditTime: 2022-01-15 17:18:55
 * 在线压缩网站：https://rollupjs.org/repl/
 */

    var CanvasBrush=function(){"use strict";function n(){var t=[];return t.item=function(t){return this[t]||null},t.identifiedTouch=function(t){return this[t+1]||null},t}function t(r){return function(t){var e,n,i;"mousedown"===t.type&&(h=!0),"mouseup"===t.type&&(h=!1),"mousemove"===t.type&&!h||(null==(u="mousedown"===t.type||!u||u&&!u.dispatchEvent?t.target:u).closest("[data-no-touch-simulate]")&&(e=r,n=t,(i=document.createEvent("Event")).initEvent(e,!0,!0),i.altKey=n.altKey,i.ctrlKey=n.ctrlKey,i.metaKey=n.metaKey,i.shiftKey=n.shiftKey,i.touches=s(n),i.targetTouches=s(n),i.changedTouches=o(n),u.dispatchEvent(i)),"mouseup"===t.type&&(u=null))}}function o(t){var e=n();return e.push(new a(u,1,t,0,0)),e}function s(t){return"mouseup"===t.type?n():o(t)}function e(){window.addEventListener("mousedown",t("touchstart"),!0),window.addEventListener("mousemove",t("touchmove"),!0),window.addEventListener("mouseup",t("touchend"),!0)}var u,a,h;"undefined"!=typeof window&&(j="ontouchstart"in window,document.createTouch||(document.createTouch=function(t,e,n,i,r,o,s){return new a(e,n,{pageX:i,pageY:r,screenX:o,screenY:s,clientX:i-window.pageXOffset,clientY:r-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var t=n(),e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length=arguments.length,t}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e}while(null!==(e=e.parentElement||e.parentNode)&&1===e.nodeType);return null}),h=!(a=function(t,e,n,i,r){i=i||0,r=r||0,this.identifier=e,this.target=t,this.clientX=n.clientX+i,this.clientY=n.clientY+r,this.screenX=n.screenX+i,this.screenY=n.screenY+r,this.pageX=n.pageX+i,this.pageY=n.pageY+r}),e.multiTouchOffset=75,j||e());var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}function c(t){return t&&t.Math==Math&&t}function l(e,n){try{b(v,e,{value:n,configurable:!0,writable:!0})}catch(t){v[e]=n}return n}function f(t){try{return!!t()}catch(t){return!0}}function p(t){if(null==t)throw x("Can't call method on "+t);return t}function d(t){return"Symbol("+(void 0===t?"":t)+")_"+k(++L+I,36)}function y(t,e){return arguments.length<2?(n=v[t],D(n)?n:void 0):v[t]&&v[t][e];var n}function g(t){var e;return _(Y,t)&&(C||"string"==typeof Y[t])||(e="Symbol."+t,C&&_(B,t)?Y[t]=B[t]:Y[t]=(X&&G?G:N)(e)),Y[t]}var v=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof i&&i)||function(){return this}()||Function("return this")(),b=Object.defineProperty,m=v["__core-js_shared__"]||l("__core-js_shared__",{}),w=r(function(t){(t.exports=function(t,e){return m[t]||(m[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})}),S=!f(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),E=Function.prototype,O=E.bind,P=E.call,T=S&&O.bind(P,P),j=S?function(t){return t&&T(t)}:function(t){return t&&function(){return P.apply(t,arguments)}},x=v.TypeError,z=v.Object,M=j({}.hasOwnProperty),_=Object.hasOwn||function(t,e){return M(z(p(t)),e)},L=0,I=Math.random(),k=j(1..toString),D=function(t){return"function"==typeof t},i=y("navigator","userAgent")||"",E=v.process,O=v.Deno,O=E&&E.versions||O&&O.version,O=O&&O.v8,F=J=!(J=O?0<(q=O.split("."))[0]&&q[0]<4?1:+(q[0]+q[1]):J)&&i&&(!(q=i.match(/Edge\/(\d+)/))||74<=q[1])&&(q=i.match(/Chrome\/(\d+)/))?+q[1]:J,C=!!Object.getOwnPropertySymbols&&!f(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&F&&F<41}),X=C&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Y=w("wks"),B=v.Symbol,G=B&&B.for,N=X?B:B&&B.withoutSetter||d,O={};O[g("toStringTag")]="z";function K(t){return"object"==typeof t?null!==t:D(t)}function R(t){if(K(t))return t;throw Z(Q(t)+" is not an object")}function U(t){if(D(t))return t;throw st(function(t){try{return ot(t)}catch(t){return"Object"}}(t)+" is not a function")}function A(t){return t=function(t,e){if(!K(t)||rt(t))return t;var n=null==(n=t[ht])?void 0:U(n);if(n){if(n=et(n,t,e=void 0===e?"default":e),!K(n)||rt(n))return n;throw at("Can't convert object to primitive value")}return function(t,e){var n,i;if("string"===e&&D(n=t.toString)&&!K(i=et(n,t)))return i;if(D(n=t.valueOf)&&!K(i=et(n,t)))return i;if("string"!==e&&D(n=t.toString)&&!K(i=et(n,t)))return i;throw ut("Can't convert object to primitive value")}(t,e=void 0===e?"number":e)}(t,"string"),rt(t)?t:t+""}function W(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}var i="[object z]"===String(O),q=!f(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),H=v.document,V=K(H)&&K(H.createElement),$=!q&&!f(function(){return 7!=Object.defineProperty(V?H.createElement("div"):{},"a",{get:function(){return 7}}).a}),J=q&&f(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),Q=v.String,Z=v.TypeError,tt=Function.prototype.call,et=S?tt.bind(tt):function(){return tt.apply(tt,arguments)},nt=j({}.isPrototypeOf),it=v.Object,rt=X?function(t){return"symbol"==typeof t}:function(t){var e=y("Symbol");return D(e)&&nt(e.prototype,it(t))},ot=v.String,st=v.TypeError,ut=v.TypeError,at=v.TypeError,ht=g("toPrimitive"),ct=v.TypeError,lt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,pt={f:q?J?function(t,e,n){var i;return R(t),e=A(e),R(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable&&(i=ft(t,e))&&i.writable&&(t[e]=n.value,n={configurable:("configurable"in n?n:i).configurable,enumerable:("enumerable"in n?n:i).enumerable,writable:!1}),lt(t,e,n)}:lt:function(t,e,n){if(R(t),e=A(e),R(n),$)try{return lt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw ct("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},dt=q?function(t,e,n){return pt.f(t,e,W(1,n))}:function(t,e,n){return t[e]=n,t},yt=j(Function.toString);D(m.inspectSource)||(m.inspectSource=function(t){return yt(t)});var gt,vt,bt,mt,wt,St,Et,Ot,Pt=m.inspectSource,O=v.WeakMap,J=D(O)&&/native code/.test(Pt(O)),O=w("keys"),Tt={},jt=v.TypeError,w=v.WeakMap;Et=J||m.state?(gt=m.state||(m.state=new w),vt=j(gt.get),bt=j(gt.has),mt=j(gt.set),wt=function(t,e){if(bt(gt,t))throw new jt("Object already initialized");return e.facade=t,mt(gt,t,e),e},St=function(t){return vt(gt,t)||{}},function(t){return bt(gt,t)}):(Ot=O.state||(O.state=d("state")),Tt[Ot]=!0,wt=function(t,e){if(_(t,Ot))throw new jt("Object already initialized");return e.facade=t,dt(t,Ot,e),e},St=function(t){return _(t,Ot)?t[Ot]:{}},function(t){return _(t,Ot)});function xt(t){return It(Lt(t),8,-1)}var zt={set:wt,get:St,has:Et,enforce:function(t){return Et(t)?St(t):wt(t,{})},getterFor:function(n){return function(t){var e;if(!K(t)||(e=St(t)).type!==n)throw jt("Incompatible receiver, "+n+" required");return e}}},J=Function.prototype,w=q&&Object.getOwnPropertyDescriptor,O=_(J,"name"),Mt={EXISTS:O,PROPER:O&&"something"===function(){}.name,CONFIGURABLE:O&&(!q||w(J,"name").configurable)},_t=r(function(t){var a=Mt.CONFIGURABLE,e=zt.get,h=zt.enforce,c=String(String).split("String");(t.exports=function(t,e,n,i){var r=!!i&&!!i.unsafe,o=!!i&&!!i.enumerable,s=!!i&&!!i.noTargetGet,u=i&&void 0!==i.name?i.name:e;D(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!_(n,"name")||a&&n.name!==u)&&dt(n,"name",u),(i=h(n)).source||(i.source=c.join("string"==typeof u?u:""))),t!==v?(r?!s&&t[e]&&(o=!0):delete t[e],o?t[e]=n:dt(t,e,n)):o?t[e]=n:l(e,n)})(Function.prototype,"toString",function(){return D(this)&&e(this).source||Pt(this)})}),Lt=j({}.toString),It=j("".slice),kt=g("toStringTag"),Dt=v.Object,Ft="Arguments"==xt(function(){return arguments}()),Ct=i?xt:function(t){var e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(t=function(t,e){try{return t[e]}catch(t){}}(e=Dt(t),kt))?t:Ft?xt(e):"Object"==(t=xt(e))&&D(e.callee)?"Arguments":t};i||_t(Object.prototype,"toString",i?{}.toString:function(){return"[object "+Ct(this)+"]"},{unsafe:!0});function Xt(t){return At(p(t))}function Yt(t){return(t=+t)!=t||0==t?0:(0<t?Vt:Ht)(t)}function Bt(u){return function(t,e,n){var i,r=Xt(t),o=0<(t=r.length)?Qt(Yt(t),9007199254740991):0,s=(t=o,(n=Yt(n))<0?$t(n+t,0):Jt(n,t));if(u&&e!=e){for(;s<o;)if((i=r[s++])!=i)return!0}else for(;s<o;s++)if((u||s in r)&&r[s]===e)return u||s||0;return!u&&-1}}function Gt(t,e){return(t=ae[ue(t)])==ce||t!=he&&(D(e)?f(e):!!e)}var i={}.propertyIsEnumerable,Nt=Object.getOwnPropertyDescriptor,Kt={f:Nt&&!i.call({1:2},1)?function(t){t=Nt(this,t);return!!t&&t.enumerable}:i},Rt=v.Object,Ut=j("".split),At=f(function(){return!Rt("z").propertyIsEnumerable(0)})?function(t){return"String"==xt(t)?Ut(t,""):Rt(t)}:Rt,Wt=Object.getOwnPropertyDescriptor,qt={f:q?Wt:function(t,e){if(t=Xt(t),e=A(e),$)try{return Wt(t,e)}catch(t){}if(_(t,e))return W(!et(Kt.f,t,e),t[e])}},Ht=Math.ceil,Vt=Math.floor,$t=Math.max,Jt=Math.min,Qt=Math.min,Zt=(Bt(!0),Bt(!1)),te=j([].push),ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),ne={f:Object.getOwnPropertyNames||function(o){return function(t){var e,n=Xt(o),i=0,r=[];for(e in n)!_(Tt,e)&&_(n,e)&&te(r,e);for(;t.length>i;)_(n,e=t[i++])&&(~Zt(r,e)||te(r,e));return r}(ee)}},ie={f:Object.getOwnPropertySymbols},re=j([].concat),oe=y("Reflect","ownKeys")||function(t){var e=ne.f(R(t)),n=ie.f;return n?re(e,n(t)):e},se=/#|\.prototype\./,ue=Gt.normalize=function(t){return String(t).replace(se,".").toLowerCase()},ae=Gt.data={},he=Gt.NATIVE="N",ce=Gt.POLYFILL="P",le=Gt,fe=qt.f,pe=j([].slice),de=v.Function,ye=j([].concat),ge=j([].join),ve={},S=S?de.bind:function(e){var n=U(this),t=n.prototype,i=pe(arguments,1),r=function(){var t=ye(i,pe(arguments));return this instanceof r?function(t,e,n){if(!_(ve,e)){for(var i=[],r=0;r<e;r++)i[r]="a["+r+"]";ve[e]=de("C,a","return new C("+ge(i,",")+")")}return ve[e](t,n)}(n,t.length,t):n.apply(e,t)};return K(t)&&(r.prototype=t),r};!function(t,e){var n,i,r,o,s=t.target,u=t.global,a=t.stat;if(n=u?v:a?v[s]||l(s,{}):(v[s]||{}).prototype)for(i in e){if(r=e[i],o=t.noTargetGet?(o=fe(n,i))&&o.value:n[i],!le(u?i:s+(a?".":"#")+i,t.forced)&&void 0!==o){if(typeof r==typeof o)continue;!function(t,e,n){for(var i=oe(e),r=pt.f,o=qt.f,s=0;s<i.length;s++){var u=i[s];_(t,u)||n&&_(n,u)||r(t,u,o(e,u))}}(r,o)}(t.sham||o&&o.sham)&&dt(r,"sham",!0),_t(n,i,r,t)}}({target:"Function",proto:!0,forced:Function.bind!==S},{bind:S});var S=Date.prototype,be=j(S.toString),me=j(S.getTime);"Invalid Date"!=String(new Date(NaN))&&_t(S,"toString",function(){var t=me(this);return t==t?be(this):"Invalid Date"});function we(t){var e;(this._self=this).isMoving=!1,this.canvas=document.querySelector(t.el),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.realWidth=this.canvas.clientWidth,this.realHeight=this.canvas.clientHeight,this.type=t.type,this.ctx.fillStyle=t.fillStyle||"rgba(0,0,0,0.8)",this.radius=t.radius||0,this.lineMax=t.lineMax||20,this.lineMin=t.lineMin||10,this.lineUp=t.lineUp||5,this.linePressure=t.linePressure||1,this.smoothness=t.smoothness||80,this.brush=void 0!==(e=t.brush)&&e instanceof HTMLElement&&1===e.nodeType?t.brush:document.querySelector(t.brush),this.brushSize=t.brushSize||20,this.rendBG=t.rendBG||null,this.lastPos={},this.has=[],this.arr=[],this.canvas.addEventListener("touchstart",this.downEvent.bind(this),!1),this.canvas.addEventListener("touchmove",this.moveEvent.bind(this),!1),this.canvas.addEventListener("touchend",this.upEvent.bind(this),!1),this.canvas.addEventListener("contextmenu",function(t){t.preventDefault()},!1),this.__initial__()}return we.prototype.__initial__=function(){this.clear()},we.prototype.__drawBG=function(){var t=this.width,e=this.height,n={width:.8*t|0,height:.8*e|0};n.top=(e-n.height)/2|0,n.left=(t-n.width)/2|0,n.bottom=n.top+n.height,n.right=n.left+n.width;var i=this.ctx;i.strokeStyle="#e38888",i.beginPath(),i.moveTo(n.left,n.top),i.lineTo(n.right,n.top),i.lineTo(n.right,n.bottom),i.lineTo(n.left,n.bottom),i.closePath(),i.lineWidth=8,i.stroke();e=n.left+(n.width+4)/2,t=n.top+(n.height+4)/2;n.top+=16,n.left+=16,n.bottom-=16,n.right-=16,i.beginPath(),i.moveTo(n.left,t),i.lineTo(n.right,t),i.moveTo(e,n.top),i.lineTo(e,n.bottom),i.closePath(),i.lineWidth=4,i.stroke(),i.beginPath(),i.moveTo(n.left,n.top),i.lineTo(n.right,n.top),i.lineTo(n.right,n.bottom),i.lineTo(n.left,n.bottom),i.closePath(),i.stroke()},we.prototype.clear=function(){var t;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),t=this.rendBG,"[object Function]"===Object.prototype.toString.call(t)?this.rendBG(this):this.__drawBG()},we.prototype.save=function(){return this.canvas.toDataURL(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"image/png",1<arguments.length&&void 0!==arguments[1]?arguments[1]:1)},we.prototype.clickEvent=function(t){this.cli=this.getPos(t.touches[0])},we.prototype.downEvent=function(t){this.isMoving=!0,this.has=[],this.lastPos=this.getPos(t.touches[0]);var e=this.lastPos.x,t=this.lastPos.y;this.arr.unshift({x1:e,y1:t})},we.prototype.moveEvent=function(t){if(t.preventDefault(),this.isMoving){var e=this.getPos(t.touches[0]),n=this.lastPos;this.has.unshift({time:(new Date).getTime(),dis:this.distance(n,e)});for(var i=0,r=0,o=0;o<this.has.length-1&&(i+=this.has[o].dis,r+=this.has[o].time-this.has[o+1].time,!(i>this.smoothness));o++);t=Math.min(r/i*this.linePressure+this.lineMin,this.lineMax)/2;this.radius=t,this.lastPos=e;for(var s=Math.round(this.has[0].dis/2)+1,u=0;u<s;u++){var a=n.x+(e.x-n.x)/s*u,h=n.y+(e.y-n.y)/s*u;this.ctx.beginPath(),a-=this.brushSize/2,h-=this.brushSize/2,this.arr.unshift({x:a,y:h}),this.ctx.drawImage(this.brush,a,h,this.brushSize,this.brushSize),this.brushSize=this.brushSize-.2,this.brushSize<this.lineMin&&(this.brushSize=this.lineMin)}}},we.prototype.upEvent=function(t){if(this.isMoving=!1,this.brushSize=this.lineMax,100<this.arr.length){for(var e=0;e<60;e++)this.arr[e].x=this.arr[e].x-this.brushSize/4,this.arr[e].y=this.arr[e].y-this.brushSize/4,this.ctx.drawImage(this.brush,this.arr[e].x,this.arr[e].y,this.brushSize,this.brushSize),this.brushSize=this.brushSize-.3,this.brushSize<this.lineUp&&(this.brushSize=this.lineUp);this.brushSize=this.lineMax,this.arr=[]}1==this.arr.length&&(this.ctx.drawImage(this.brush,this.arr[0].x1-this.brushSize/2,this.arr[0].y1-this.brushSize/2,this.brushSize,this.brushSize),this.arr=[])},we.prototype.getPos=function(t){var e=this.canvas.getBoundingClientRect(),n=t.clientX,t=t.clientY,n=Math.round(n-e.left),e=Math.round(t-e.top);return{x:n*this.width/this.realWidth,y:e*this.height/this.realHeight}},we.prototype.distance=function(t,e){var n=e.x-t.x,t=e.y-t.y;return Math.sqrt(n*n+t*t)},we}();
