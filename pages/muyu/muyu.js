Page({
  data: {
      count:0,
      index:0,
      bgurl: "../../image/muyu2.png",
      animationData: {},
      checkFalg:false,
      // checked: false,
  },


  




  containerTap: function (res) {
    var that = this
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.checkImg();
    this.setData({
      rippleStyle: ''
    });
    setTimeout(function () {
      that.setData({
        rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
      });
    }, 200)
  },
  // 文字弹出
  index:function(e){
    console.log(this.data.count)
    let that = this
    let array = ["功德+1", "功德+1", "功德+1", "功德+1", "功德+1", "功德+1", "功德+1", "功德+1", "功德+1", "功德+1"]
    that.data.index = array.length == that.data.index ? 0 :that.data.index
    that.setData({
      index: that.data.index + 1,
    })
    let x = e.detail.x + 8
    let y = e.detail.y - 40
    if (that.data.index == 1 && !that.data.text_a){
    that.setData({
    text_a: array[that.data.index - 1],
    text_ax: x,
    text_ay: y,
    opacity_a: 1,
    count:++this.data.count
    })
    let timer_a = setInterval(function () {
    that.setData({
     opacity_a: 0,
     text_ay: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_a: '',
     })
    }, 1000)
    clearInterval(timer_a);
    }, 200)
    return false;
    }
    if (that.data.index == 2 && !that.data.text_b) {
    that.setData({
    text_b: array[that.data.index - 1],
    text_bx: x,
    text_by: y,
    opacity_b: 1,
    count:++this.data.count
    })
    let timer_b = setInterval(function () {
    that.setData({
     opacity_b: 0,
     text_by: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_b: '',
     })
    }, 1000)
    clearInterval(timer_b);
    }, 200)
    return false
    }
    if (that.data.index == 3 && !that.data.text_c) {
    that.setData({
    text_c: array[that.data.index - 1],
    text_cx: x,
    text_cy: y,
    opacity_c: 1,
    count:++this.data.count
    })
    let timer_c = setInterval(function () {
    that.setData({
     opacity_c: 0,
     text_cy: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_c: '',
     })
    }, 1000)
    clearInterval(timer_c);
    }, 200)
    return false
    }
    if (that.data.index == 4 && !that.data.text_d) {
    that.setData({
    text_d: array[that.data.index - 1],
    text_dx: x,
    text_dy: y,
    opacity_d: 1,
    count:++this.data.count
    })
    let timer_d = setInterval(function () {
    that.setData({
     opacity_d: 0,
     text_dy: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_d: '',
     })
    }, 1000)
    clearInterval(timer_d);
    }, 200)
    return false
    }
    if (that.data.index == 5 && !that.data.text_e) {
    that.setData({
    text_e: array[that.data.index - 1],
    text_ex: x,
    text_ey: y,
    opacity_e: 1,
    count:++this.data.count
    })
    let timer_e = setInterval(function () {
    that.setData({
     opacity_e: 0,
     text_ey: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_e: '',
     })
    }, 1000)
    clearInterval(timer_e);
    }, 200)
    return false
    }
    if (that.data.index == 6 && !that.data.text_f) {
    that.setData({
    text_f: array[that.data.index - 1],
    text_fx: x,
    text_fy: y,
    opacity_f: 1,
    count:++this.data.count
    })
    let timer_f = setInterval(function () {
    that.setData({
     opacity_f: 0,
     text_fy: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_f: '',
     })
    }, 1000)
    clearInterval(timer_f);
    }, 200)
    return false
    }
    if (that.data.index == 7 && !that.data.text_g) {
    that.setData({
    text_g: array[that.data.index - 1],
    text_gx: x,
    text_gy: y,
    opacity_g: 1,
    count:++this.data.count
    })
    let timer_g = setInterval(function () {
    that.setData({
     opacity_g: 0,
     text_gy: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_g: '',
     })
    }, 1000)
    clearInterval(timer_g);
    }, 200)
    return false
    }
    if (that.data.index == 8 && !that.data.text_h) {
    that.setData({
    text_h: array[that.data.index - 1],
    text_hx: x,
    text_hy: y,
    opacity_h: 1,
    count:++this.data.count
    })
    let timer_h = setInterval(function () {
    that.setData({
     opacity_h: 0,
     text_hy: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_h: '',
     })
    }, 1000)
    clearInterval(timer_h);
    }, 200)
    return false
    }
    if (that.data.index == 9 && !that.data.text_i) {
    that.setData({
    text_i: array[that.data.index - 1],
    text_ix: x,
    text_iy: y,
    opacity_i: 1,
    count:++this.data.count
    })
    let timer_i = setInterval(function () {
    that.setData({
     opacity_i: 0,
     text_iy: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_i: '',
     })
    }, 1000)
    clearInterval(timer_i);
    }, 200)
    return false
    }
    if (that.data.index == 10 && !that.data.text_j) {
    that.setData({
    text_j: array[that.data.index - 1],
    text_jx: x,
    text_jy: y,
    opacity_j: 1,
    count:++this.data.count
    })
    let timer_j = setInterval(function () {
    that.setData({
     opacity_j: 0,
     text_jy: y - 60,
    })
    setTimeout(function () {
     that.setData({
     text_j: '',
     })
    }, 1000)
    clearInterval(timer_j );
    }, 200)
    return false
    }
    },
  animateFn:function(){
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.animation.scale(0.9).step()
    // 要执行的动画
    this.animation.scale(1).step()
    // 导出动画
    this.setData({
      bgurl: animation.export()
    })
  },

  
  // 点击音效
  audioFn:function(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = false  // 是否自动开始播放，默认为 false
    innerAudioContext.loop = false  // 是否循环播放，默认为 false
    wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
      obeyMuteSwitch: true,   // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
      success: function (e) {
      },
      fail: function (e) {
      }
    })
    innerAudioContext.src="/pages/muyu/muyu.mp3"
    innerAudioContext.play()
    },
  // 敲击切换图片
  checkImg:function(){
    this.setData({
      bgurl: "../../image/muyu3.png"
    })
    this.setData({
      checkFalg: true
    })
    this.audioFn();
    wx.vibrateShort();
    setTimeout(() => {
      this.setData({
        bgurl: "../../image/muyu2.png"
      })
    }, 100);
  }
})

  // onShow: function () {
  //   this.player(wx.getBackgroundAudioManager())
  // },
  // checkMusic() {
  //   console.log(11)
  //   this.setData({
  //     checked: !this.data.checked
  //   })
  //   if (this.data.checked) {
  //     wx.getBackgroundAudioManager().pause();
  //   } else {
  //     this.player(wx.getBackgroundAudioManager())
  //   }
  // },
  // player(e) {
  //   e.title = "sb"
  //   e.src = "/pages/muyu/sb.mp3"
  //   //音乐播放结束后继续播放此音乐，循环不停的播放
  //   e.onEnded(() => {
  //     this.player(wx.getBackgroundAudioManager())
  //   })
  // }, 
  // // 页面卸载时候暂停播放（不加页面将一直播放）
  // onUnload: function () {
  //   wx.getBackgroundAudioManager().stop();
  // },
  // // 小程序隐藏时候暂停播放（不加页面将一直播放）
  // onHide() {
  //   wx.getBackgroundAudioManager().stop();
  // },