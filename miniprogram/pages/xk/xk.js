// pages/xk/xk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoMess: '',
    name: [],
    teacher: [],
    cousenum: [],
    couseid: [],
    campus: [],
    cname: "马克思主义基本原理概论"


  },


  serchBtnClick: function(url, cousenum, couseid, teacher, campus, star, end) {
    if (this.data.cname.length == 0) {
      this.setData({
        infoMess: '温馨提示：课程名称不能为空！',
        name: {},
        teacher: {},
        cousenum: {},
        couseid: {},
        campus: {}

      })
    } else {
      wx.cloud.init()
      const db = wx.cloud.database()

      db.collection('course').where({
        name:this.data.cname

      }).get({
        success: res => {
          console.log(res);
          this.setData({
            
            queryResult: res.data


          })
          console.log('[数据库] [查询记录] 成功: ', res.data.name)
          var i
          for (i = 0; i <= 10; i++) {
            var item = 'name[' + i + ']'
            var item1 = 'teacher[' + i + ']'
            var item2 = 'cousenum[' + i + ']'
            var item3 = 'couseid[' + i + ']'
            var item4 = 'campus[' + i + ']'
            this.setData({
              [item]: this.data.queryResult[i].name,
              [item1]: this.data.queryResult[i].teacher,
              [item2]: this.data.queryResult[i].cousenum,
              [item3]: this.data.queryResult[i].couseid,
              [item4]: this.data.queryResult[i].campus
            })

          }




        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          this.setData({
            feedBack: "error"
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })



     
}
},
resetBtnClick: function(e) {
    this.setData({
      infoMess: '',
      name: {},
      teacher: {},
      cousenum: {},
      couseid: {},
      campus: {}
    })
  },
  inputcousenum: function(e) {
    this.setData({
      cousenum: e.detail.value
    })
  },
  inputcouseid: function(e) {
    this.setData({
      couseid: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})