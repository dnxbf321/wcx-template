App({
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
  getUserInfo(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb === 'function' && cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo
              typeof cb === 'function' && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
    // vars.car 引用的 wcx.json 内的环境变量
    console.log(vars.car)
  },
  globalData: {
    userInfo: null
  }
})

