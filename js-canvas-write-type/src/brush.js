'use strict';

function isNode(value) {
  return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
}
function isFunction(value) {
  var type = Object.prototype.toString.call(value);

  return type === '[object Function]';
}
function subFloat(num, precision = 2) {
  let [base = '', decimal = ''] = num.toString().split('.');
  decimal = decimal.substr(0, precision);
  return +`${base}.${decimal}`;
}
const Brush = function (options) {
  this._self = this;
  this.isMoving = false;
  this.canvas = document.querySelector(options.el);
  this.ctx = this.canvas.getContext('2d');
  this.width = this.canvas.width = options.width | 0; /* canvas宽度 */
  this.height = this.canvas.height = options.height | 0; /* canvas高度 */
  this.realWidth = this.canvas.clientWidth; /* css实际伸缩宽度 */
  this.realHeight = this.canvas.clientHeight; /* css实际伸缩高度 */
  this.type = options.type;
  this.ctx.fillStyle = options.fillStyle || 'rgba(0,0,0,0.8)';
  this.radius = options.radius || 0;
  this.lineMax = options.lineMax || 20; /* 笔刷移动时最大尺寸 */
  this.lineMin = options.lineMin || 10; /* 笔刷移动时最小尺寸 */
  this.lineUp = options.lineUp || 5; /* 笔刷离开画布时尺寸 */
  this.history = options.history || false;
  this.linePressure = options.linePressure || 1;
  this.smoothness = options.smoothness || 80;
  this.brush = isNode(options.brush) ? options.brush : document.querySelector(options.brush); // 默认笔刷。 type:'img'时启用
  this.brushSize = options.brushSize || 20;
  this.rendBG = options.rendBG || null;
  this.lastPos = {};
  this.has = []; /* 移动像素点坐标信息 */
  this.arr = [];
  this.historyCacheCurrent = [];
  this.historyCache = [];
  // //鼠标场景--电脑端.
  // this.canvas.onmousedown = this.downEvent.bind(this);
  // this.canvas.onmousemove = this.moveEvent.bind(this);
  // this.canvas.onmouseup = this.upEvent.bind(this);
  //触摸场景--手机端/触摸屏机
  this.canvas.addEventListener('touchstart', this.downEvent.bind(this), false);
  this.canvas.addEventListener('touchmove', this.moveEvent.bind(this), false);
  this.canvas.addEventListener('touchend', this.upEvent.bind(this), false);
  this.canvas.addEventListener(
    'contextmenu',
    function (e) {
      e.preventDefault();
    },
    false
  );

  this.__initial__();
};
Brush.prototype.__initial__ = function () {
  this.clear();
};
Brush.prototype.__drawBG = function () {
  var width = this.width,
    height = this.height,
    percent = 0.8,
    lineWidth = 8,
    gutter = 8,
    info = {
      width: (width * percent) | 0,
      height: (height * percent) | 0,
    };
  info.top = ((height - info.height) / 2) | 0;
  info.left = ((width - info.width) / 2) | 0;
  info.bottom = info.top + info.height;
  info.right = info.left + info.width;

  var ctx = this.ctx;

  ctx.strokeStyle = '#e38888';

  ctx.beginPath();
  ctx.moveTo(info.left, info.top);
  ctx.lineTo(info.right, info.top);
  ctx.lineTo(info.right, info.bottom);
  ctx.lineTo(info.left, info.bottom);
  ctx.closePath();
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  var diff = gutter + lineWidth,
    lineWidthInner = lineWidth / 2,
    halfLeft = info.left + (info.width + lineWidthInner) / 2,
    halfTop = info.top + (info.height + lineWidthInner) / 2;
  info.top += diff;
  info.left += diff;
  info.bottom -= diff;
  info.right -= diff;

  ctx.beginPath();
  ctx.moveTo(info.left, halfTop);
  ctx.lineTo(info.right, halfTop);
  ctx.moveTo(halfLeft, info.top);
  ctx.lineTo(halfLeft, info.bottom);
  ctx.closePath();
  ctx.lineWidth = lineWidthInner;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(info.left, info.top);
  ctx.lineTo(info.right, info.top);
  ctx.lineTo(info.right, info.bottom);
  ctx.lineTo(info.left, info.bottom);
  ctx.closePath();
  ctx.stroke();
};
Brush.prototype.__saveCache = function (brush, x, y, width, height) {
  if (!this.history) return;
  // v1-内存性能差
  // var data = this.ctx.getImageData(0, 0, this.width, this.height);
  // this.historyCache.push(data);

  // v2-才用记录数据形式
  this.historyCacheCurrent.push({ brush, x, y, width, height });
};
Brush.prototype.historyBack = function () {
  if (!this.history) {
    var err = new Error('You need to enable the history mode');
    throw err;
  }
  if (!this.historyCache.length) {
    return;
  }

  // v1-内存性能差
  // var data = this.historyCache.pop();
  // this.ctx.putImageData(data, 0, 0);

  // v2-才用记录数据形式
  this.ctx.clearRect(0, 0, this.width, this.height);
  isFunction(this.rendBG) ? this.rendBG(this) : this.__drawBG();
  this.historyCache.pop();

  var historyCache = this.historyCache;
  for (var d1 in historyCache) {
    var imageDataList = historyCache[d1];
    for (var d2 in imageDataList) {
      var c1 = imageDataList[d2];
      this.ctx.drawImage(c1.brush, c1.x, c1.y, c1.width, c1.height);
    }
  }
};
Brush.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.width, this.height);
  this.arr.length = 0;
  this.historyCache.length = 0;
  this.historyCacheCurrent.length = 0;
  this.has.length = 0;
  this.lastPos = {};
  isFunction(this.rendBG) ? this.rendBG(this) : this.__drawBG();
};
Brush.prototype.save = function (type = 'image/png', quality = 1) {
  return this.canvas.toDataURL(type, quality);
};
Brush.prototype.clickEvent = function (e) {
  this.cli = this.getPos(e.touches[0]);
};
Brush.prototype.downEvent = function (e) {
  this.isMoving = true;
  this.has = [];
  this.lastPos = this.getPos(e.touches[0]);
  var x1 = this.lastPos.x;
  var y1 = this.lastPos.y;
  this.arr.unshift({ x1, y1 });
};
Brush.prototype.moveEvent = function (e) {
  e.preventDefault();
  if (!this.isMoving) return;
  var curPos = this.getPos(e.touches[0]), //move
    lastPos = this.lastPos,
    brushSize = this.brushSize; //down

  this.has.unshift({ time: new Date().getTime(), dis: this.distance(lastPos, curPos) });
  var dis = 0;
  var time = 0;
  for (var n = 0; n < this.has.length - 1; n++) {
    dis += this.has[n].dis;
    time += this.has[n].time - this.has[n + 1].time;
    if (dis > this.smoothness) break;
  }
  var or = Math.min((time / dis) * this.linePressure + this.lineMin, this.lineMax) / 2;
  this.radius = or;
  this.lastPos = curPos;
  var len = Math.round(this.has[0].dis / 2) + 1;
  for (var i = 0; i < len; i++) {
    var x = lastPos.x + ((curPos.x - lastPos.x) / len) * i;
    var y = lastPos.y + ((curPos.y - lastPos.y) / len) * i;

    this.ctx.beginPath();

    x = x - this.brushSize / 2;
    y = y - this.brushSize / 2;

    x = subFloat(x);
    y = subFloat(y);
    brushSize = subFloat(this.brushSize);

    this.arr.unshift({ x, y });
    this.__saveCache(this.brush, x, y, brushSize, brushSize);
    this.ctx.drawImage(this.brush, x, y, brushSize, brushSize);
    this.brushSize = brushSize - 0.2;

    if (this.brushSize < this.lineMin) this.brushSize = this.lineMin;
  }
};
Brush.prototype.upEvent = function (e) {
  this.isMoving = false;
  this.brushSize = this.lineMax;

  var brushSize = this.brushSize,
    x,
    y;

  if (this.arr.length > 100) {
    for (var j = 0; j < 60; j++) {
      this.arr[j].x = this.arr[j].x - this.brushSize / 4;
      this.arr[j].y = this.arr[j].y - this.brushSize / 4;

      x = subFloat(this.arr[j].x);
      y = subFloat(this.arr[j].y);
      brushSize = subFloat(this.brushSize);
      this.__saveCache(this.brush, x, y, brushSize, brushSize);
      this.ctx.drawImage(this.brush, x, y, brushSize, brushSize);

      this.brushSize = this.brushSize - 0.3;
      if (this.brushSize < this.lineUp) this.brushSize = this.lineUp;
    }
    this.brushSize = this.lineMax;
    this.arr = [];
  }
  if (this.arr.length == 1) {
    x = this.arr[0].x1 - this.brushSize / 2;
    y = this.arr[0].y1 - this.brushSize / 2;
    x = subFloat(x);
    y = subFloat(y);
    brushSize = subFloat(this.brushSize);
    this.__saveCache(this.brush, x, y, brushSize, brushSize);
    // this.ctx.drawImage(
    //   this.brush,
    //   this.arr[0].x1 - this.brushSize / 2,
    //   this.arr[0].y1 - this.brushSize / 2,
    //   this.brushSize,
    //   this.brushSize
    // );
    this.ctx.drawImage(this.brush, x, y, brushSize, brushSize);
    this.arr = [];
  }

  this.historyCache.push(this.historyCacheCurrent);
  this.historyCacheCurrent = [];
};
Brush.prototype.getPos = function (touches) {
  var bbox = this.canvas.getBoundingClientRect(),
    x = touches.clientX,
    y = touches.clientY,
    left = Math.round(x - bbox.left),
    top = Math.round(y - bbox.top);

  left = (left * this.width) / this.realWidth;
  top = (top * this.height) / this.realHeight;

  return {
    x: left,
    y: top,
  };

  // return {
  //   x: x - this.canvas.offsetLeft + (document.body.scrollLeft || document.documentElement.scrollLeft),
  //   y: y - this.canvas.offsetTop + (document.body.scrollTop || document.documentElement.scrollTop),
  // };
};
Brush.prototype.distance = function (a, b) {
  let x = b.x - a.x,
    y = b.y - a.y;
  return Math.sqrt(x * x + y * y);
};

export default Brush;
