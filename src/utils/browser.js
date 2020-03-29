'use strict';
// 进入浏览器全屏
function fullScreen () {
  var el = document.documentElement;

  var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
    el.mozRequestFullScreen || el.msRequestFullScreen;

  if (typeof rfs !== 'undefined' && rfs) {
    rfs.call(el);
  } else if (typeof window.ActiveXObject !== 'undefined') {
    // eslint-disable-next-line no-undef
    var wscript = new ActiveXObject('WScript.Shell'); // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏

    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}
// 退出浏览器全屏
function exitFullScreen () {
  // 判断各种浏览器，找到正确的方法
  var exitMethod = document.exitFullscreen || document.mozCancelFullScreen ||
    document.webkitExitFullscreen || document.webkitExitFullscreen;
  if (exitMethod) {
    exitMethod.call(document);
  } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explorer
    // eslint-disable-next-line no-undef
    var wscript = new ActiveXObject('WScript.Shell');
    if (wscript !== null) {
      wscript.SendKeys('{F11}');
    }
  }
}

export {
  fullScreen,
  exitFullScreen
};
