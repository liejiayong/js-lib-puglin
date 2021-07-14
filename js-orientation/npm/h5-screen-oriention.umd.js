!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).plugin=n()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n){return t(n={exports:{}},n.exports),n.exports}function e(t){return t&&t.Math==Math&&t}function r(t){try{return!!t()}catch(t){return!0}}function o(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}function i(t){return m.call(t).slice(8,-1)}function c(t){if(null==t)throw TypeError("Can't call method on "+t);return t}function a(t){return S(c(t))}function u(t){return"object"==typeof t?null!==t:"function"==typeof t}function f(t,n){if(!u(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!u(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!u(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!u(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}function s(t,n){return w.call(t,n)}function l(t){return k?O.createElement(t):{}}function p(t){if(!u(t))throw TypeError(t+" is not an object");return t}function A(t,n){try{B(v,t,n)}catch(e){v[t]=n}return n}var v=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")(),d=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),h={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y={f:g&&!h.call({1:2},1)?function(t){var n=g(this,t);return!!n&&n.enumerable}:h},m={}.toString,b="".split,S=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?b.call(t,""):Object(t)}:Object,w={}.hasOwnProperty,O=v.document,k=u(O)&&u(O.createElement),J=!d&&!r((function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a})),D=Object.getOwnPropertyDescriptor,j={f:d?D:function(t,n){if(t=a(t),n=f(n,!0),J)try{return D(t,n)}catch(t){}if(s(t,n))return o(!y.f.call(t,n),t[n])}},P=Object.defineProperty,x={f:d?P:function(t,n,e){if(p(t),n=f(n,!0),p(e),J)try{return P(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},B=d?function(t,n,e){return x.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t},C="__core-js_shared__",L=v[C]||A(C,{}),E=Function.toString;function T(t){return"Symbol("+(void 0===t?"":t)+")_"+(++R+X).toString(36)}"function"!=typeof L.inspectSource&&(L.inspectSource=function(t){return E.call(t)});var z,H,M,F,G=L.inspectSource,I=v.WeakMap,N="function"==typeof I&&/native code/.test(G(I)),K=n((function(t){(t.exports=function(t,n){return L[t]||(L[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),R=0,X=Math.random(),Q=K("keys"),U={};if(N){var Y=new v.WeakMap,W=Y.get,Z=Y.has,V=Y.set;z=function(t,n){return V.call(Y,t,n),n},H=function(t){return W.call(Y,t)||{}},M=function(t){return Z.call(Y,t)}}else{var q=Q[F="state"]||(Q[F]=T(F));U[q]=!0,z=function(t,n){return B(t,q,n),n},H=function(t){return s(t,q)?t[q]:{}},M=function(t){return s(t,q)}}function _(t){return"function"==typeof t?t:void 0}function $(t,n){return arguments.length<2?_(dt[t])||_(v[t]):dt[t]&&dt[t][n]||v[t]&&v[t][n]}function tt(t){return isNaN(t=+t)?0:(0<t?gt:ht)(t)}function nt(t){return 0<t?yt(tt(t),9007199254740991):0}function et(t){return function(n,e,r){var o,i,c,u=a(n),f=nt(u.length),s=(o=f,(i=tt(r))<0?mt(i+o,0):bt(i,o));if(t&&e!=e){for(;s<f;)if((c=u[s++])!=c)return!0}else for(;s<f;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}}function rt(t,n){var e,r=a(t),o=0,i=[];for(e in r)!s(U,e)&&s(r,e)&&i.push(e);for(;o<n.length;)s(r,e=n[o++])&&(~St(i,e)||i.push(e));return i}function ot(t,n){for(var e=Dt(n),r=x.f,o=j.f,i=0;i<e.length;i++){var c=e[i];s(t,c)||r(t,c,o(n,c))}}function it(t,n){var e=xt[Pt(t)];return e==Ct||e!=Bt&&("function"==typeof n?r(n):!!n)}function ct(t,n){var e,r,o,i,c,a=t.target,u=t.global,f=t.stat;if(e=u?v:f?v[a]||A(a,{}):(v[a]||{}).prototype)for(r in n){if(i=n[r],o=t.noTargetGet?(c=Et(e,r))&&c.value:e[r],!Lt(u?r:a+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ot(i,o)}(t.sham||o&&o.sham)&&B(i,"sham",!0),vt(e,r,i,t)}}function at(t){return Object(c(t))}function ut(t,n,e){var r=f(n);r in t?x.f(t,r,o(0,e)):t[r]=e}function ft(t){return s(Mt,t)||(zt&&s(Ft,t)?Mt[t]=Ft[t]:Mt[t]=Gt("Symbol."+t)),Mt[t]}function st(t,n){var e;return Tt(t)&&("function"==typeof(e=t.constructor)&&(e===Array||Tt(e.prototype))||u(e)&&null===(e=e[It]))&&(e=void 0),new(void 0===e?Array:e)(0===n?0:n)}var lt,pt,At={set:z,get:H,has:M,enforce:function(t){return M(t)?H(t):z(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=H(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},vt=n((function(t){var n=At.get,e=At.enforce,r=(String+"").split("String");(t.exports=function(t,n,o,i){var c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,u=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||s(o,"name")||B(o,"name",n),e(o).source=r.join("string"==typeof n?n:"")),t!==v?(c?!u&&t[n]&&(a=!0):delete t[n],a?t[n]=o:B(t,n,o)):a?t[n]=o:A(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||G(this)}))})),dt=v,ht=Math.ceil,gt=Math.floor,yt=Math.min,mt=Math.max,bt=Math.min,St=(et(!0),et(!1)),wt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ot=wt.concat("length","prototype"),kt={f:Object.getOwnPropertyNames||function(t){return rt(t,Ot)}},Jt={f:Object.getOwnPropertySymbols},Dt=$("Reflect","ownKeys")||function(t){var n=kt.f(p(t)),e=Jt.f;return e?n.concat(e(t)):n},jt=/#|\.prototype\./,Pt=it.normalize=function(t){return(t+"").replace(jt,".").toLowerCase()},xt=it.data={},Bt=it.NATIVE="N",Ct=it.POLYFILL="P",Lt=it,Et=j.f,Tt=Array.isArray||function(t){return"Array"==i(t)},zt=!!Object.getOwnPropertySymbols&&!r((function(){return!(Symbol()+"")})),Ht=zt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Mt=K("wks"),Ft=v.Symbol,Gt=Ht?Ft:Ft&&Ft.withoutSetter||T,It=ft("species"),Nt=$("navigator","userAgent")||"",Kt=v.process,Rt=Kt&&Kt.versions,Xt=Rt&&Rt.v8;function Qt(t){if(u(t)){var n=t[Wt];return void 0!==n?!!n:Tt(t)}}Xt?pt=(lt=Xt.split("."))[0]+lt[1]:Nt&&((lt=Nt.match(/Edge\/(\d+)/))&&lt[1]<74||(lt=Nt.match(/Chrome\/(\d+)/))&&(pt=lt[1]));var Ut=pt&&+pt,Yt=ft("species"),Wt=ft("isConcatSpreadable"),Zt=9007199254740991,Vt="Maximum allowed index exceeded",qt=51<=Ut||!r((function(){var t=[];return t[Wt]=!1,t.concat()[0]!==t})),_t=("concat",51<=Ut||!r((function(){var t=[];return(t.constructor={})[Yt]=function(){return{foo:1}},1!==t.concat(Boolean).foo})));function $t(t){if("function"!=typeof t)throw TypeError(t+" is not a function");return t}function tn(t,n,e){if($t(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}function nn(t){var n=1==t,e=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(a,u,f,s){for(var l,p,A=at(a),v=S(A),d=tn(u,f,3),h=nt(v.length),g=0,y=s||st,m=n?y(a,h):e?y(a,0):void 0;g<h;g++)if((c||g in v)&&(p=d(l=v[g],g,A),t))if(n)m[g]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return g;case 2:on.call(m,l)}else if(o)return!1;return i?-1:r||o?o:m}}function en(t){throw t}ct({target:"Array",proto:!0,forced:!qt||!_t},{concat:function(t){var n,e,r,o,i,c=at(this),a=st(c,0),u=0;for(n=-1,r=arguments.length;n<r;n++)if(Qt(i=-1===n?c:arguments[n])){if(o=nt(i.length),Zt<u+o)throw TypeError(Vt);for(e=0;e<o;e++,u++)e in i&&ut(a,u,i[e])}else{if(Zt<=u)throw TypeError(Vt);ut(a,u++,i)}return a.length=u,a}});var rn,on=[].push,cn={forEach:nn(0),map:nn(1),filter:nn(2),some:nn(3),every:nn(4),find:nn(5),findIndex:nn(6)},an=Object.defineProperty,un={},fn=cn.forEach,sn=!!(rn=[].forEach)&&r((function(){rn.call(null,(function(){throw 1}),1)})),ln=function(t,n){if(s(un,t))return un[t];var e=[][t],o=!!s(n=n||{},"ACCESSORS")&&n.ACCESSORS,i=s(n,0)?n[0]:en,c=s(n,1)?n[1]:void 0;return un[t]=!!e&&!r((function(){if(o&&!d)return 1;var t={length:-1};o?an(t,1,{enumerable:!0,get:en}):t[1]=1,e.call(t,i,c)}))}("forEach"),pn=sn&&ln?[].forEach:function(t,n){return fn(this,t,1<arguments.length?n:void 0)};ct({target:"Array",proto:!0,forced:[].forEach!=pn},{forEach:pn});var An=[].slice,vn={};ct({target:"Function",proto:!0},{bind:Function.bind||function(t){var n=$t(this),e=An.call(arguments,1),r=function(){var o=e.concat(An.call(arguments));return this instanceof r?function(t,n,e){if(!(n in vn)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";vn[n]=Function("C,a","return new C("+r.join(",")+")")}return vn[n](t,e)}(n,o.length,o):n.apply(t,o)};return u(n.prototype)&&(r.prototype=n.prototype),r}});var dn=Object.keys||function(t){return rt(t,wt)},hn=Object.assign,gn=Object.defineProperty,yn=!hn||r((function(){if(d&&1!==hn({b:1},hn(gn({},"a",{enumerable:!0,get:function(){gn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return 1;var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=hn({},t)[e]||dn(hn({},n)).join("")!=r}))?function(t,n){for(var e=at(t),r=arguments.length,o=1,i=Jt.f,c=y.f;o<r;)for(var a,u=S(arguments[o++]),f=i?dn(u).concat(i(u)):dn(u),s=f.length,l=0;l<s;)a=f[l++],d&&!c.call(u,a)||(e[a]=u[a]);return e}:hn;ct({target:"Object",stat:!0,forced:Object.assign!==yn},{assign:yn});var mn={};mn[ft("toStringTag")]="z";var bn=mn+""=="[object z]",Sn=ft("toStringTag"),wn="Arguments"==i(function(){return arguments}()),On=bn?i:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),Sn))?e:wn?i(n):"Object"==(r=i(n))&&"function"==typeof n.callee?"Arguments":r};function kn(t,n,e,r){try{return r?n(p(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&p(o.call(t)),n}}bn||vt(Object.prototype,"toString",bn?{}.toString:function(){return"[object "+On(this)+"]"},{unsafe:!0});var Jn=v.Promise,Dn=x.f,jn=ft("toStringTag"),Pn=ft("species"),xn={},Bn=ft("iterator"),Cn=Array.prototype,Ln=ft("iterator"),En=n((function(t){function n(t,n){this.stopped=t,this.result=n}(t.exports=function(t,e,r,o,i){var c,a,u,f,s,l,A,v,d=tn(e,r,o?2:1);if(i)c=t;else{if("function"!=typeof(a=function(t){if(null!=t)return t[Ln]||t["@@iterator"]||xn[On(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(v=a)&&(xn.Array===v||Cn[Bn]===v)){for(u=0,f=nt(t.length);u<f;u++)if((s=o?d(p(A=t[u])[0],A[1]):d(t[u]))&&s instanceof n)return s;return new n(!1)}c=a.call(t)}for(l=c.next;!(A=l.call(c)).done;)if("object"==typeof(s=kn(c,d,A.value,o))&&s&&s instanceof n)return s;return new n(!1)}).stop=function(t){return new n(!0,t)}})),Tn=ft("iterator"),zn=!1;try{var Hn=0,Mn={next:function(){return{done:!!Hn++}},return:function(){zn=!0}};Mn[Tn]=function(){return this},Array.from(Mn,(function(){throw 2}))}catch(t){}function Fn(t){if(ne.hasOwnProperty(t)){var n=ne[t];delete ne[t],n()}}function Gn(t){return function(){Fn(t)}}function In(t){Fn(t.data)}function Nn(t){v.postMessage(t+"",Wn.protocol+"//"+Wn.host)}var Kn,Rn,Xn,Qn=ft("species"),Un=$("document","documentElement"),Yn=/(iphone|ipod|ipad).*applewebkit/i.test(Nt),Wn=v.location,Zn=v.setImmediate,Vn=v.clearImmediate,qn=v.process,_n=v.MessageChannel,$n=v.Dispatch,te=0,ne={},ee="onreadystatechange";Zn&&Vn||(Zn=function(t){for(var n=[],e=1;e<arguments.length;)n.push(arguments[e++]);return ne[++te]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},Kn(te),te},Vn=function(t){delete ne[t]},"process"==i(qn)?Kn=function(t){qn.nextTick(Gn(t))}:$n&&$n.now?Kn=function(t){$n.now(Gn(t))}:_n&&!Yn?(Xn=(Rn=new _n).port2,Rn.port1.onmessage=In,Kn=tn(Xn.postMessage,Xn,1)):!v.addEventListener||"function"!=typeof postMessage||v.importScripts||r(Nn)||"file:"===Wn.protocol?Kn=ee in l("script")?function(t){Un.appendChild(l("script"))[ee]=function(){Un.removeChild(this),Fn(t)}}:function(t){setTimeout(Gn(t),0)}:(Kn=Nn,v.addEventListener("message",In,!1)));var re,oe,ie,ce,ae,ue,fe,se,le={set:Zn,clear:Vn},pe=j.f,Ae=le.set,ve=v.MutationObserver||v.WebKitMutationObserver,de=v.process,he=v.Promise,ge="process"==i(de),ye=pe(v,"queueMicrotask"),me=ye&&ye.value;function be(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=$t(n),this.reject=$t(e)}function Se(t,n){if(p(t),u(n)&&n.constructor===t)return n;var e=He.f(t);return(0,e.resolve)(n),e.promise}function we(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}function Oe(t){var n;return!(!u(t)||"function"!=typeof(n=t.then))&&n}function ke(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;ze((function(){for(var o=n.value,i=1==n.state,c=0;c<r.length;){var a,u,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,A=s.reject,v=s.domain;try{l?(i||(2===n.rejection&&rr(t,n),n.rejection=1),!0===l?a=o:(v&&v.enter(),a=l(o),v&&(v.exit(),f=!0)),a===s.promise?A(Xe("Promise-chain cycle")):(u=Oe(a))?u.call(a,p,A):p(a)):A(o)}catch(o){v&&!f&&v.exit(),A(o)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&nr(t,n)}))}}function Je(t,n,e){var r,o;qe?((r=Qe.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),v.dispatchEvent(r)):r={promise:n,reason:e},(o=v["on"+t])?o(r):t===_e&&function(t,n){var e=v.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}("Unhandled promise rejection",e)}function De(t,n,e,r){return function(o){t(n,e,o,r)}}function je(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,ke(t,n,!0))}me||(re=function(){var t,n;for(ge&&(t=de.domain)&&t.exit();oe;){n=oe.fn,oe=oe.next;try{n()}catch(t){throw oe?ce():ie=void 0,t}}ie=void 0,t&&t.enter()},ce=ge?function(){de.nextTick(re)}:ve&&!Yn?(ae=!0,ue=document.createTextNode(""),new ve(re).observe(ue,{characterData:!0}),function(){ue.data=ae=!ae}):he&&he.resolve?(fe=he.resolve(void 0),se=fe.then,function(){se.call(fe,re)}):function(){Ae.call(v,re)});var Pe,xe,Be,Ce,Le,Ee,Te,ze=me||function(t){var n={fn:t,next:void 0};ie&&(ie.next=n),oe||(oe=n,ce()),ie=n},He={f:function(t){return new be(t)}},Me=le.set,Fe=ft("species"),Ge="Promise",Ie=At.get,Ne=At.set,Ke=At.getterFor(Ge),Re=Jn,Xe=v.TypeError,Qe=v.document,Ue=v.process,Ye=$("fetch"),We=He.f,Ze=We,Ve="process"==i(Ue),qe=!!(Qe&&Qe.createEvent&&v.dispatchEvent),_e="unhandledrejection",$e=Lt(Ge,(function(){if(G(Re)===Re+""){if(66===Ut)return!0;if(!Ve&&"function"!=typeof PromiseRejectionEvent)return!0}if(51<=Ut&&/native code/.test(Re))return!1;function t(t){t((function(){}),(function(){}))}var n=Re.resolve(1);return(n.constructor={})[Fe]=t,!(n.then((function(){}))instanceof t)})),tr=$e||!function(t,n){if(!zn)return!1;var e=!1;try{var r={};r[Tn]=function(){return{next:function(){return{done:e=!0}}}},function(t){Re.all(t).catch((function(){}))}(r)}catch(t){}return e}(),nr=function(t,n){Me.call(v,(function(){var e,r=n.value;if(er(n)&&(e=we((function(){Ve?Ue.emit("unhandledRejection",r,t):Je(_e,t,r)})),n.rejection=Ve||er(n)?2:1,e.error))throw e.value}))},er=function(t){return 1!==t.rejection&&!t.parent},rr=function(t,n){Me.call(v,(function(){Ve?Ue.emit("rejectionHandled",t):Je("rejectionhandled",t,n.value)}))},or=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw Xe("Promise can't be resolved itself");var o=Oe(e);o?ze((function(){var r={done:!1};try{o.call(e,De(or,t,r,n),De(je,t,r,n))}catch(e){je(t,r,e,n)}})):(n.value=e,n.state=1,ke(t,n,!1))}catch(e){je(t,{done:!1},e,n)}}};for(var ir in $e&&(Re=function(t){!function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+e+" invocation")}(this,Re,Ge),$t(t),Pe.call(this);var n=Ie(this);try{t(De(or,this,n),De(je,this,n))}catch(t){je(this,n,t)}},(Pe=function(){Ne(this,{type:Ge,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,n,e){for(var r in n)vt(t,r,n[r],void 0);return t}(Re.prototype,{then:function(t,n){var e,r,o,i=Ke(this),c=We((e=Re,void 0===(o=p(this).constructor)||null==(r=p(o)[Qn])?e:$t(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof n&&n,c.domain=Ve?Ue.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&ke(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),xe=function(){var t=new Pe,n=Ie(t);this.promise=t,this.resolve=De(or,t,n),this.reject=De(je,t,n)},He.f=We=function(t){return t===Re||t===Be?new xe:Ze(t)},"function"==typeof Jn&&(Ce=Jn.prototype.then,vt(Jn.prototype,"then",(function(t,n){var e=this;return new Re((function(t,n){Ce.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof Ye&&ct({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return Se(Re,Ye.apply(v,arguments))}}))),ct({global:!0,wrap:!0,forced:$e},{Promise:Re}),Ee=!Ge,(Le=Re)&&!s(Le=Ee?Le:Le.prototype,jn)&&Dn(Le,jn,{configurable:!0,value:"Promise"}),Te=$(Ge),d&&Te&&!Te[Pn]&&(0,x.f)(Te,Pn,{configurable:!0,get:function(){return this}}),Be=$(Ge),ct({target:Ge,stat:!0,forced:$e},{reject:function(t){var n=We(this);return n.reject.call(void 0,t),n.promise}}),ct({target:Ge,stat:!0,forced:$e},{resolve:function(t){return Se(this,t)}}),ct({target:Ge,stat:!0,forced:tr},{all:function(t){var n=this,e=We(n),r=e.resolve,o=e.reject,i=we((function(){var e=$t(n.resolve),i=[],c=0,a=1;En(t,(function(t){var u=c++,f=!1;i.push(void 0),a++,e.call(n,t).then((function(t){f||(f=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=We(n),r=e.reject,o=we((function(){var o=$t(n.resolve);En(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}}),{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var cr=v[ir],ar=cr&&cr.prototype;if(ar&&ar.forEach!==pn)try{B(ar,"forEach",pn)}catch(t){ar.forEach=pn}}function ur(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(){function t(){var n=this;(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")})(this,t),this.$wrappers=[],this.$informs=[],this.listeners=[],this.logoPortrait="data:image/png;base64,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",this.logoLandscape="data:image/png;base64,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",this.orientation=t._detectOrient(),window.addEventListener("resize",(function(){n.orientation=t._detectOrient(),n.$wrappers.forEach(n._lockOrientation.bind(n)),n.$informs.forEach(n._showInform.bind(n)),n.listeners.forEach((function(t){t.callback.call(t.context,n.orientation)}))}),this)}return function(t,n,e){n&&ur(t.prototype,n),e&&ur(t,e)}(t,[{key:"_lockOrientation",value:function(n){var e=n.mode;n.$wrapper.style=e!==this.orientation?t._getLockStyle(e,n.zIndex):t._getLockStyle("normal")}},{key:"_showInform",value:function(t){var n=t.mode,e=document.getElementById(t.id);e&&(n===this.orientation?e.classList.remove("show"):e.classList.add("show"))}},{key:"lock",value:function(t){(t=Object.assign({mode:"",$wrapper:null,zIndex:301},t)).mode&&t.$wrapper&&(this.$wrappers.push(t),this._lockOrientation(t))}},{key:"inform",value:function(n){var e=this,r=n.mode,o=n.id,i=n.logo,c=n.text,a=n.zIndex;r&&o&&(i=i||("landscape"===r?this.logoLandscape:this.logoPortrait),c=c||"为了更好的体验，请保持".concat("landscape"===r?"横屏":"竖屏","浏览"),t._createTipsStyle(o,a=a||310),t._createTipsDOM({id:o,text:c,logo:i}).then((function(){return e._showInform({id:o,mode:r})})).catch((function(t){return console.warn(t)})),this.$informs.push({id:o,mode:r}))}},{key:"onOrientationChange",value:function(t,n){"function"==typeof t&&this.listeners.push({callback:t,context:n})}}],[{key:"_detectOrient",value:function(){var t=window.Screen,n=document.documentElement.clientWidth,e=Math.min(t.width,t.height);return n===Math.max(t.width,t.height)?"landscape":n===e?"portrait":""}},{key:"_getLockStyle",value:function(t,n){var e,r,o,i,c,a=document.documentElement,u=a.clientWidth,f=a.clientHeight;switch(t){case"portrait":r=u,o="-90deg",c=i=(e=f)/2;break;case"landscape":e=f,o="90deg",c=i=(r=u)/2;break;default:e=u,r=f,c=i=o="0"}return"\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: ".concat(n,";\n    width: ").concat(e,"px;\n    height: ").concat(r,"px;\n    -webkit-transform: rotate(").concat(o,");\n    transform: rotate(").concat(o,");\n    -webkit-transform-origin: ").concat(i,"px ").concat(c,"px;\n    transform-origin: ").concat(i,"px ").concat(c,"px;\n    ")}},{key:"_createTipsStyle",value:function(t,n){var e="\n    #".concat(t,".screentips {\n      transition: opacity linear 0.3s;\n      pointer-events: none;\n      visibility: hidden;\n      opacity: 0;\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: rgba(0,0,0, 0.8);\n      z-index: ").concat(n,";\n    }\n    #").concat(t,".screentips.show {\n      visibility: visible;\n      opacity: 1;\n      pointer-events: auto;\n    }\n    #").concat(t," .screentips_inner{\n      position: absolute;top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n    }\n    #").concat(t," .screentips_icon {\n      margin:1.5rem auto;\n      display: block;\n      width: 5rem;\n      animation: phone_rotate 1.6s ease-in infinite;\n    }\n    #").concat(t," .screentips_icon img {\n      width: 100%;\n    }\n    #").concat(t," .screentips_text {\n      white-space: nowrap;\n      font-size: 0.75rem;\n      text-align: center;\n      color: #fff;\n    }\n    "),r=document,o=r.createElement("style");o.styleSheet?o.styleSheet.cssText=e:o.appendChild(r.createTextNode(e)),r.head.appendChild(o)}},{key:"_createTipsDOM",value:function(t){var n=t.id,e=t.text,r=t.logo;return new Promise((function(t,o){var i=document,c=i.body,a=i.createElement("div");a.id=n,a.className="screentips";var u=new window.Image;u.onload=function(){a.innerHTML="<div class='screentips_inner'><i class='screentips_icon'><img src=".concat(u.src,"></i><p class='screentips_text'>").concat(e,"</p></div>"),c.appendChild(a),t()},u.onerror=function(t){o(t)},u.src=r}))}}]),t}()}));