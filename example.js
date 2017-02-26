'use strict'
window.onload = () => {
  let cav = document.getElementsByTagName('canvas')[0];

  let app = new Vue({
    el: '#app',
    data: {
      // 数据
      content: ""
    },
    methods: {
      // 箭头函数在这里不能用，因为它屏蔽了上下文
      next: function () {
        // get a random chapter
        let chapter = stray_bird();
        this.content = chapter.content
        // set the title
        document.title = `Stray Birds -- ${chapter.idx}`
      }
    }
  });

  // 初始化数据
  app.next();

  // 关闭鼠标位置的监听，使得网状页面不对鼠标移动做响应
  window.onmousemove = null

  // 禁用右键
  window.oncontextmenu = () => false;

  // 监听任何按键事件
  window.onkeypress = (e) => {
    app.next();
  };

  // 角度修正
  let anglefix = {
    init: false
  };

  // 根据移动设备的陀螺仪信息，动态的调整背景位置
  window.addEventListener("deviceorientation", function (event) {
    if (!anglefix.init) {
      // 打开页面时先获取当前姿态，之后的动作是根据第一次的姿态进行取值
      anglefix.beta = event.beta;
      anglefix.gamma = event.gamma;
      anglefix.init = true;
      return;
    }
    let beta = (event.beta - anglefix.beta) * 4;
    let gamma = (event.gamma - anglefix.gamma) * 4;
    cav.style.top = beta + "px";
    cav.style.left = gamma + "px";
  }, true);

}