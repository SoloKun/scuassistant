// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    suggest: '',
    submitevent: 'true',
    resetevent: 'true',
    resetevent1: 'true'
  },
  formsubmit: function (e) {

    this.setData({
      submitevent: false

    })
    var self = this
    setTimeout(function (e) {
      self.setData({
        submitevent: true
      })
    }, 2000);
    
    console.log(e.detail.value)
    

  },
  suggest:function(e){
this.setData({
suggest:e.detail.value

})

  },
  reset: function (e) {

    this.setData({
      resetevent1: true
    })
    var that = this
    setTimeout(function (e) {
      that.setData({
        resetevent: false
      })
    }, 200);

  },

  
  
  resetevents: function (e) {

    this.setData({
      resetevent: true
    })
  },
    reset1: function(e) {


      this.setData({
        resetevent1: false
      })
    },

    cannel: function(e) {
      this.setData({
        resetevent1: true
      })
    }
  ,


  onAdd: function (e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    var sug =this.data.suggest
    db.collection('feedback').add({
      data: {
        suggest: sug
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          suggest: sug
        })
       
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  onShareAppMessage: function () {

  }
})