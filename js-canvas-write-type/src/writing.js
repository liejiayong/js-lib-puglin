var canvasWidth = Math.min(800, $(window).width() - 20);
var canvasHeight = canvasWidth;
var strokeColor = 'black';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var isMouseDown = false,
  lastTimestamp = 0,
  lastLineWidth = -1;
var lastLoc = { x: 0, y: 0 };

drawBackground();

$('.btn').click(function (e) {
  $('.btn').removeClass('btn-selected');
  $(this).addClass('btn-selected');
  strokeColor = $(this).css('background-color');
});
canvas.onmousedown = function (e) {
  e.preventDefault();
  beginStroke({ x: e.clientX, y: e.clientY });
};
canvas.onmouseup = function (e) {
  e.preventDefault();
  endStroke();
};
canvas.onmouseout = function (e) {
  e.preventDefault();
  endStroke();
};
canvas.onmousemove = function (e) {
  e.preventDefault();
  if (isMouseDown) {
    moveStroke({ x: e.clientX, y: e.clientY });
  }
};
canvas.addEventListener('touchstart', function (e) {
  e.preventDefault();
  touch = e.touches[0];
  beginStroke({ x: touch.pageX, y: touch.pageY });
});
canvas.addEventListener('touchmove', function (e) {
  e.preventDefault();
  if (isMouseDown) {
    touch = e.touches[0];
    moveStroke({ x: touch.pageX, y: touch.pageY });
  }
});
canvas.addEventListener('touchend', function (e) {
  e.preventDefault();
  endStroke();
});

var btnClear = document.getElementById('btn-clear');
btnClear.onclick = function (e) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawBackground();
};
function moveStroke(point) {
  var curloc = windowToCanvas(point.x, point.y);
  var curTimestamp = new Date().getTime();
  var s = calcDistance(curloc, lastLoc);
  var t = curTimestamp - lastTimestamp;

  var lineWidth = calcLineWidth(t, s);

  ctx.beginPath();
  ctx.moveTo(lastLoc.x, lastLoc.y);
  ctx.lineTo(curloc.x, curloc.y);

  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round'; //线条衔接
  ctx.lineJoin = 'round';
  ctx.stroke();

  lastLoc = curloc;
  lastTimestamp = curTimestamp;
  lastLineWidth = lineWidth;
}
function beginStroke(point) {
  isMouseDown = true;
  //	console.log("mouse down");
  lastLoc = windowToCanvas(point.x, point.y);
  //	alert(lastLoc.x+","+lastLoc.y);
  lastTimestamp = new Date().getTime();
}
function endStroke() {
  isMouseDown = false;
}
function windowToCanvas(x, y) {
  var bbox = canvas.getBoundingClientRect();
  return { x: Math.round(x - bbox.left), y: Math.round(y - bbox.top) };
}
var maxLineWidth = 30;
var minLineWidth = 1;
var maxStrokeV = 10;
var minStrokeV = 0.1;
function calcLineWidth(t, s) {
  var v = s / t;

  var resultLineWidth;
  if (v <= minStrokeV) {
    resultLineWidth = maxLineWidth;
  } else if (v >= maxStrokeV) {
    resultLineWidth = minLineWidth;
  } else {
    resultLineWidth = maxLineWidth - ((v - minStrokeV) / (maxStrokeV - minStrokeV)) * (maxLineWidth - minLineWidth);
  }
  if (lastLineWidth == -1) {
    return resultLineWidth;
  }
  return (lastLineWidth * 2) / 3 + (resultLineWidth * 1) / 3;
}
function calcDistance(loc1, loc2) {
  return Math.sqrt(Math.pow(loc1.x - loc2.x, 2) + Math.pow(loc1.y - loc2.y, 2));
}
function drawBackground() {
  ctx.strokeStyle = 'rgb(230,11,9)';

  ctx.save();
  ctx.beginPath();

  ctx.moveTo(3, 3);
  ctx.lineTo(3, canvasHeight - 3);
  ctx.lineTo(canvasWidth - 3, canvasHeight - 3);
  ctx.lineTo(canvasWidth - 3, 3);
  ctx.lineTo(3, 3);
  ctx.closePath();
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvasWidth, canvasHeight);
  ctx.moveTo(canvasWidth / 2, 0);
  ctx.lineTo(canvasWidth / 2, canvasHeight);
  ctx.moveTo(canvasWidth, 0);
  ctx.lineTo(0, canvasHeight);
  ctx.moveTo(canvasWidth, canvasHeight / 2);
  ctx.lineTo(0, canvasHeight / 2);
  ctx.closePath();
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.restore();
}

function draw() {}
