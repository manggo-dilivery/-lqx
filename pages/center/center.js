// pages/center/center.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    currentIndex: '0',
    currentIndex1: '0',
    currentIndex2: '0',
    currentIndex3: '0',
    currentIndex4: '0'
  },

  order: function () {
    wx.navigateTo({
      url: '/pages/my-order/myorder',
    })
  },
  receive_ticket: function () {
    wx.navigateTo({
      url: '/pages/receive-ticket/receive-ticket',
    })
  },
  clockin: function () {
    wx.navigateTo({
      url: '/pages/take-card/take-card',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户信息
    var openid = wx.getStorageSync(app.config.key + '_openid');
    if (!openid) {
      app.getUserInfo(this.init_userinfo);
    } else {
      this.init_userinfo();
    }
  },
  /**
     * 初始化用户信息
     */
  init_userinfo: function () {
    let userinfo = wx.getStorageSync('userInfo');
    this.setData({ userinfo: userinfo });
    console.log(userinfo);
  },
// 菜单动画函数
  animate: function () {
    var currentindex = this.data.currentIndex;
    if (currentindex == 0) {
      this.setData({
        currentIndex: 1,
        currentIndex1: 0,
        currentIndex2: 0,
        currentIndex3: 0,
        currentIndex4: 0,
      })
      this.animation1.translateY(-300).step()
      this.setData({
        animation1: this.animation1.export()
      })
      this.animation2.translateY(-240).step()
      this.setData({
        animation2: this.animation2.export()
      })
      this.animation3.translateY(-180).step()
      this.setData({
        animation3: this.animation3.export()
      })
      this.animation4.translateY(-120).step()
      this.setData({
        animation4: this.animation4.export()
      })
    } else {
      this.setData({
        currentIndex: 0,
        currentIndex1: 0,
        currentIndex2: 0,
        currentIndex3: 0,
        currentIndex4: 0,
      })
      this.hideslide();
    }

  },
  // 收回菜单列表
  hideslide: function () {
    this.animation1.translateY(0).step()
    this.setData({
      animation1: this.animation1.export()
    })
    this.animation2.translateY(0).step()
    this.setData({
      animation2: this.animation2.export()
    })
    this.animation3.translateY(0).step()
    this.setData({
      animation3: this.animation3.export()
    })
    this.animation4.translateY(0).step()
    this.setData({
      animation4: this.animation4.export()
    })
  },
  // 图标点击隐藏与显示
  showHide1: function () {
    var currentindex = this.data.currentIndex1;
    if (currentindex == 0) {
      this.setData({
        currentIndex1: 1,
        currentIndex: 0,
      })
    } else {
      this.setData({
        currentIndex1: 0,
        currentIndex: 0,
      })
    }
    wx.navigateTo({
      url: '/pages/school-introduce/school-introduce',
    })
    this.hideslide();
  },
  showHide2: function () {
    var currentindex = this.data.currentIndex2;
    if (currentindex == 0) {
      this.setData({
        currentIndex2: 1,
        currentIndex: 0,
      })
    } else {
      this.setData({
        currentIndex2: 0,
        currentIndex: 0,
      })
    }
    wx.navigateTo({
      url: '/pages/teacher-team/teacher-team',
    })
    this.hideslide();
  },
  showHide3: function () {
    var currentindex = this.data.currentIndex3;
    if (currentindex == 0) {
      this.setData({
        currentIndex3: 1,
        currentIndex: 0,
      })
    } else {
      this.setData({
        currentIndex3: 0,
        currentIndex: 0,
      })
    }
    wx.navigateTo({
      url: '/pages/take-card/take-card',
    })
    this.hideslide();
  },
  showHide4: function () {
    var currentindex = this.data.currentIndex4;
    if (currentindex == 0) {
      this.setData({
        currentIndex4: 1,
        currentIndex: 0,
      })
    } else {
      this.setData({
        currentIndex4: 0,
        currentIndex: 0,
      })
    }
    wx.navigateTo({
      url: '/pages/recipe/recipe',
    })
    this.hideslide();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation1 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
      delay: 0,
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
    this.animation2 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
      delay: 100,
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
    this.animation3 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
      delay: 200,
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
    this.animation4 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
      delay: 300,
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '小鸟智联智慧校园',
      path: '/pages/mine/mine',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})