/**
 * @description: 模仿swiper
 * @param {*}
 * @return {*}
 * @author: liejiayong(809206619@qq.com)
 * @Date: 2021-04-22 16:03:57
 */
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o) === '[object Object]';
}
function extend(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== undefined && nextSource !== null) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}

class Swiper {
  constructor(...args) {
    let params, el;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};

    params = extend({}, params);
    if (el && !params.el) params.el = el;

    this._self = this;
    this.params = params;
    this.el = el;
    this.index = 0;
    this.timer = null;

    this._init(opts);
  }

  /**
   *  判断是否开启自动滑动
   */
  isLoop() {
    if (this.params['loop']) {
      let len = this.sliderItem.length;
      let preView = this.slidesPreView;
      let moveView = len - preView + 1; //计算最后一块滑块的索引值
      function loop(that) {
        that.timer = setTimeout(function () {
          that.index = that.index < moveView ? that.index + 1 : 1;
          that.play(that.index);
          that._dotActive(that.index);
          loop(that);
        }, that.opts['speed']);
      }

      loop(this);
    }
  }

  play(index) {
    let width = -this._getMoveOffset(index);
    this.el.style.cssText = `transform:translate3d(${width}px,0,0);transition:.5s all;user-select:none`;
  }

  event() {
    const that = this;

    let isMouseUp = false,
      isTouchEnd = false,
      mouseState = {
        x1: 0,
        x2: 0,
        diff: 0,
      },
      touchState = {
        x1: 0,
        x2: 0,
        diff: 0,
      };

    let len = this.sliderItem.length,
      preView = this.slidesPreView,
      moveView = len - preView + 1; //计算最后一块滑块的索引值

    if (this.el.querySelector(this.params['arrowPreCls']) && this.el.querySelector(this.params['arrowNextCls'])) {
      const PreBtn = this.el.querySelector(this.params['arrowPreCls']),
        nextBtn = this.el.querySelector(this.params['arrowNextCls']);

      this.el.addEventListener(
        'click',
        function (e) {
          e = e || window.event;
          let target = e.target || e.srcElement;
          if (target === PreBtn) {
            lastView();
          } else if (target === nextBtn) {
            nextView();
          }
          that._dotActive(that.index);
        },
        true
      );
    }

    this.el.addEventListener('mouseover', function () {
      clearTimeout(that.timer);
    });

    this.el.addEventListener('mouseout', function () {
      that.isLoop();
    });

    this.el.addEventListener('mousedown', function (e) {
      e = e || window.event;
      e.preventDefault();
      isMouseUp = true;
      mouseState.x1 = e.pageX;
    });

    this.el.addEventListener('mousemove', function (e) {
      e = e || window.event;
      e.preventDefault();
      mouseState.x2 = e.pageX;
      mouseState.diff = mouseState.x2 - mouseState.x1;
    });

    this.el.addEventListener('mouseup', function (e) {
      e = e || window.event;
      e.preventDefault();
      isMouseUp = false;
      mouseState.x2 = e.pageX;
      mouseState.diff = mouseState.x2 - mouseState.x1;
      if (Math.abs(mouseState.diff) > 80 && !isMouseUp) {
        if (arrowChecker(mouseState.x2, mouseState.x1)) {
          nextView();
        } else {
          lastView();
        }
      }
      that._dotActive(that.index);
    });

    this.el.addEventListener('touchstart', function (e) {
      clearTimeout(that.timer);
      e = e || window.event;
      isTouchEnd = true;

      let { targetTouches } = e;
      touchState.x1 = targetTouches[0]['pageX'];
    });

    this.el.addEventListener('touchmove', function (e) {
      e = e || window.event;
      e.preventDefault();

      let { targetTouches } = e;
      touchState.x2 = targetTouches[0]['pageX'];
    });

    this.el.addEventListener('touchend', function (e) {
      e = e || window.event;
      isTouchEnd = false;
      touchState.diff = touchState.x2 - touchState.x1;
      if (Math.abs(touchState.diff) > 80 && !isTouchEnd) {
        if (arrowChecker(touchState.x2, touchState.x1)) {
          nextView();
        } else {
          lastView();
        }
      }
      that._dotActive(that.index);
      that.isLoop();
    });

    window.addEventListener('resize', function () {
      console.log('window changed!');
      that._initSlide();
      that._initElement();
    });

    this._dotEvent();
    this.unloadEvent();

    function arrowChecker(x1, x2) {
      return x2 > x1;
    }

    function nextView() {
      that.index = that.index < moveView ? ++that.index : 1;
      that.play(that.index);
    }

    function lastView() {
      that.index = --that.index;
      if (that.index < 1) {
        that.index = moveView;
      }
      that.play(that.index);
    }
  }

  unloadEvent() {
    window.addEventListener('unload', e => {
      clearTimeout(this.timer);
    });
  }

  /**
   * 下标点事件
   */
  _dotEvent() {
    if (!this.el.querySelector(this.params['dotsCls']) && !this.el.querySelectorAll(this.params['dotCls'])[0]) return;
    const dots = this.el.querySelector(this.params['dotsCls']);
    const active = this.params['dotActiveCls'];
    const dotList = this.el.querySelectorAll(this.params['dotCls']);
    const slideList = this.el.querySelectorAll(this.params['sliderItemCls']);
    const len = slideList.length;
    dots.addEventListener('click', e => {
      e = e || window.event;
      let target = e.target || e.srcElement;

      // 判断圆点选择器
      if (dotList.length !== len) {
        console.warn('轮播图的圆点选择器配置错误');
        if (this.index > len || this.index <= 1) {
          this.index = 1;
        }
      }

      dotList.forEach((item, index) => {
        if (item === target) {
          this.addClass(item, active);
          this.index = index + 1;
          this.play(this.index);
        } else {
          this.removeClass(item, active);
        }
      });
    });
  }

  /**
   * 返回下一个滑块要移动的距离
   * @param index 当前下一个滑块索引值
   * @returns {number}
   * @private
   */
  _getMoveOffset(index) {
    return this.sliderItemWidth * (index - 1);
  }

  _initData() {
    const defaultOpts = {
      loop: false,
      autoplay: false,
      speed: 3400,
      slidesPreView: 3,
      moveCount: 1,
      wrapperClass: '.jswiper-wrapper',
      slideClass: '.jswiper-slide',
      slideActiveClass: '.jswiper-slide-active',
      dotsContainerCls: '.h-dots',
      arrowPreCls: '.h-arrow-pre',
      arrowNextCls: '.h-arrow-next',
      dotsCls: '.h-dots',
      dotCls: '.h-dot',
      dotActiveCls: 'active',
      direction: 'horizontal', // horizontal/vertical
    };

    /* initial */
    const params = extend({}, defaultOpts, this.params);
    this.slidesPreView = params['slidesPreView'];
    this.params = params;
  }

  _getSlidesPreView(breakPoints) {
    let winClientWidth = document.documentElement.clientWidth,
      slidesPreView = this.params['slidesPreView'];

    breakPoints.forEach(val => {
      if (winClientWidth > val[0]) {
        return slidesPreView;
      } else {
        slidesPreView = val[1];
      }
    });
    //都不符合条件返回最后一个像素对应的sliderItem数
    return slidesPreView;
  }

  _initSlide() {
    const params = this.params,
      slidesPreView = parseInt(this.slidesPreView || 1),
      direction = params.direction;
    let distance = this.el[direction === 'horizontal' ? 'offsetWidth' : 'offsetHeight'];
    distance = distance / slidesPreView;
    let cssText = `;${direction === 'horizontal' ? 'width' : 'height'}:${distance}px;`;
    this.el.querySelectorAll(params['slideClass']).forEach(slide => {
      slide.style.cssText = cssText;
    });
    this[direction === 'horizontal' ? 'width' : 'height'] = distance;
  }

  _initArrow() {}

  _initElement() {
    this._initArrow();
  }

  _init() {
    this._initData();
    this._initElement();
    this._initSlide();
    this.isLoop();
    // this.event();
  }
  _dotActive(currIndex) {
    if (!this.el.querySelectorAll(this.params['dotCls'])) {
      return;
    }
    const dots = this.el.querySelectorAll(this.params['dotCls']);
    const activeCls = this.params['dotActiveCls'];
    dots.forEach((v, i) => {
      let ii = i + 1;
      if (ii === currIndex) {
        this.addClass(v, activeCls);
      } else {
        this.removeClass(v, activeCls);
      }
    });
  }

  hasClass(el, cls) {
    let reg = new RegExp(`(^|\\s)${cls}(\\s|$)`);
    return reg.test(el.className);
  }

  addClass(el, cls) {
    if (this.hasClass(el, cls)) {
      return;
    }
    let newCls = el.className.split(' ');
    newCls.push(cls);
    el.className = newCls.join(' ');
  }

  removeClass(el, cls) {
    if (!this.hasClass(el, cls)) {
      return;
    }
    let reg = new RegExp(`(^|\\s)${cls}(\\s|$)`);
    el.className = el.className.replace(reg, '');
  }
}
