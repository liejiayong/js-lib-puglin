!function(){if("undefined"!=typeof window){var t,e="ontouchstart"in window;document.createTouch||(document.createTouch=function(t,e,s,h,n,o,r){return new i(e,s,{pageX:h,pageY:n,screenX:o,screenY:r,clientX:h-window.pageXOffset,clientY:n-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var t=h(),e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length=arguments.length,t}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var i=function(t,e,i,s,h){s=s||0,h=h||0,this.identifier=e,this.target=t,this.clientX=i.clientX+s,this.clientY=i.clientY+h,this.screenX=i.screenX+s,this.screenY=i.screenY+h,this.pageX=i.pageX+s,this.pageY=i.pageY+h},s=!1;a.multiTouchOffset=75,e||new a}function h(){var t=[];return t.item=function(t){return this[t]||null},t.identifiedTouch=function(t){return this[t+1]||null},t}function n(e){return function(i){var h,n,a;("mousedown"===i.type&&(s=!0),"mouseup"===i.type&&(s=!1),"mousemove"!==i.type||s)&&(("mousedown"===i.type||!t||t&&!t.dispatchEvent)&&(t=i.target),null==t.closest("[data-no-touch-simulate]")&&(h=e,n=i,(a=document.createEvent("Event")).initEvent(h,!0,!0),a.altKey=n.altKey,a.ctrlKey=n.ctrlKey,a.metaKey=n.metaKey,a.shiftKey=n.shiftKey,a.touches=r(n),a.targetTouches=r(n),a.changedTouches=o(n),t.dispatchEvent(a)),"mouseup"===i.type&&(t=null))}}function o(e){var s=h();return s.push(new i(t,1,e,0,0)),s}function r(t){return"mouseup"===t.type?h():o(t)}function a(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}}();const t=function(t){var e;this._self=this,this.isMoving=!1,this.canvas=document.querySelector(t.el),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.realWidth=this.canvas.clientWidth,this.realHeight=this.canvas.clientHeight,this.type=t.type,this.ctx.fillStyle=t.fillStyle||"rgba(0,0,0,0.8)",this.radius=t.radius||0,this.lineMax=t.lineMax||20,this.lineMin=t.lineMin||10,this.lineUp=t.lineUp||5,this.linePressure=t.linePressure||1,this.smoothness=t.smoothness||80,this.brush=void 0!==(e=t.brush)&&e instanceof HTMLElement&&1===e.nodeType?t.brush:document.querySelector(t.brush),this.brushSize=t.brushSize||20,this.rendBG=t.rendBG||null,this.lastPos={},this.has=[],this.arr=[],this.canvas.addEventListener("touchstart",this.downEvent.bind(this),!1),this.canvas.addEventListener("touchmove",this.moveEvent.bind(this),!1),this.canvas.addEventListener("touchend",this.upEvent.bind(this),!1),this.canvas.addEventListener("contextmenu",(function(t){t.preventDefault()}),!1),this.__initial__()};t.prototype.__initial__=function(){this.clear()},t.prototype.__drawBG=function(){var t=this.width,e=this.height,i={width:.8*t|0,height:.8*e|0};i.top=(e-i.height)/2|0,i.left=(t-i.width)/2|0,i.bottom=i.top+i.height,i.right=i.left+i.width;var s=this.ctx;s.strokeStyle="#e38888",s.beginPath(),s.moveTo(i.left,i.top),s.lineTo(i.right,i.top),s.lineTo(i.right,i.bottom),s.lineTo(i.left,i.bottom),s.closePath(),s.lineWidth=8,s.stroke();var h=i.left+(i.width+4)/2,n=i.top+(i.height+4)/2;i.top+=16,i.left+=16,i.bottom-=16,i.right-=16,s.beginPath(),s.moveTo(i.left,n),s.lineTo(i.right,n),s.moveTo(h,i.top),s.lineTo(h,i.bottom),s.closePath(),s.lineWidth=4,s.stroke(),s.beginPath(),s.moveTo(i.left,i.top),s.lineTo(i.right,i.top),s.lineTo(i.right,i.bottom),s.lineTo(i.left,i.bottom),s.closePath(),s.stroke()},t.prototype.clear=function(){var t;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),t=this.rendBG,"[object Function]"===Object.prototype.toString.call(t)?this.rendBG(this):this.__drawBG()},t.prototype.save=function(t="image/png",e=1){return this.canvas.toDataURL(t,e)},t.prototype.clickEvent=function(t){this.cli=this.getPos(t.touches[0])},t.prototype.downEvent=function(t){this.isMoving=!0,this.has=[],this.lastPos=this.getPos(t.touches[0]);var e=this.lastPos.x,i=this.lastPos.y;this.arr.unshift({x1:e,y1:i})},t.prototype.moveEvent=function(t){if(t.preventDefault(),this.isMoving){var e=this.getPos(t.touches[0]),i=this.lastPos;this.has.unshift({time:(new Date).getTime(),dis:this.distance(i,e)});for(var s=0,h=0,n=0;n<this.has.length-1&&(s+=this.has[n].dis,h+=this.has[n].time-this.has[n+1].time,!(s>this.smoothness));n++);var o=Math.min(h/s*this.linePressure+this.lineMin,this.lineMax)/2;this.radius=o,this.lastPos=e;for(var r=Math.round(this.has[0].dis/2)+1,a=0;a<r;a++){var u=i.x+(e.x-i.x)/r*a,c=i.y+(e.y-i.y)/r*a;this.ctx.beginPath(),u-=this.brushSize/2,c-=this.brushSize/2,this.arr.unshift({x:u,y:c}),this.ctx.drawImage(this.brush,u,c,this.brushSize,this.brushSize),this.brushSize=this.brushSize-.2,this.brushSize<this.lineMin&&(this.brushSize=this.lineMin)}}},t.prototype.upEvent=function(t){if(this.isMoving=!1,this.brushSize=this.lineMax,this.arr.length>100){for(var e=0;e<60;e++)this.arr[e].x=this.arr[e].x-this.brushSize/4,this.arr[e].y=this.arr[e].y-this.brushSize/4,this.ctx.drawImage(this.brush,this.arr[e].x,this.arr[e].y,this.brushSize,this.brushSize),this.brushSize=this.brushSize-.3,this.brushSize<this.lineUp&&(this.brushSize=this.lineUp);this.brushSize=this.lineMax,this.arr=[]}1==this.arr.length&&(this.ctx.drawImage(this.brush,this.arr[0].x1-this.brushSize/2,this.arr[0].y1-this.brushSize/2,this.brushSize,this.brushSize),this.arr=[])},t.prototype.getPos=function(t){var e=this.canvas.getBoundingClientRect(),i=t.clientX,s=t.clientY,h=Math.round(i-e.left),n=Math.round(s-e.top);return{x:h=h*this.width/this.realWidth,y:n=n*this.height/this.realHeight}},t.prototype.distance=function(t,e){let i=e.x-t.x,s=e.y-t.y;return Math.sqrt(i*i+s*s)};export default t;
