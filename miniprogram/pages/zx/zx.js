// pages/zx/zx.js
Page({

  /**
   * 页面的初始数据
   */
  data: { // 储存新闻的标题
    openid: 'o8W0p412h03Y9JgTNJ8138LEXeeM',
    text: [],
    textId0: 0,
    textId1: 1,
    textId2: 2,
    textId3: 3,
    textId4: 4,
    textId5: 5,
    textId6: 6,
    textId7: 7,
    textId8: 8,
    textId9: 9,
    textId10: 10,
    textId11: 11,
    textId12: 12,
    textId13: 13,
    textId14: 14,
    textId15: 15,
    textId16: 16,
    textId17: 17,
    textId18: 18,
    textId19: 19,
    typeId1: 1, //类型
    typeId2: 2,
    typeId3: 3,
    typeId4: 4,
    typeId5: 5,
    typeId6: 6,
    type: '',
    clear: [],
    detail:"",

    newsDate: [], //新闻的日期

    queryResult: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    wx.cloud.init()
    const db = wx.cloud.database()

    db.collection('news').where({

    }).get({
      success: res => {
        console.log(res);
        this.setData({
          //queryResult: JSON.stringify(res.data, null, 2)
          queryResult: res.data


        })
        console.log('[数据库] [查询记录] 成功: ', res.data.title)
        var i
        for (i = 0; i <= 10; i++) {
          var item = 'text[' + i + ']'
          console.log(this.data.queryResult[i].title)
          var item1 = 'newsDate[' + i + ']'


          this.setData({
            [item]: this.data.queryResult[i].title,
            [item1]: this.data.queryResult[i].date,

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





  },

  typeButton: function(e) {
    console.log(e.target.id)
    this.setData({
      type: e.target.id,
      text: {},
      newsDate: {}
    })

    wx.cloud.init()
    const db = wx.cloud.database()

    db.collection('news').where({
      typeid: this.data.type

    }).get({
      success: res => {
        console.log(res);
        this.setData({
          
          queryResult: res.data

        })
        console.log('[数据库] [查询记录] 成功: ', res.data)
        var i
        for (i = 0; i < 10; i++) {
          var item = 'text[' + i + ']'
          console.log(this.data.queryResult[i].title)
          var item1 = 'newsDate[' + i + ']'


          this.setData({
            [item]: this.data.queryResult[i].title,
            [item1]: this.data.queryResult[i].date,

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
        console.error('[数据库] [查询记录] 失败：', erro)
      }
    })



  },
  button:function(e){
    
    var that=this
    
    
    wx.setStorageSync('lastText', that.data.queryResult[e.target.id].detail)
    wx.setStorageSync('title1', that.data.queryResult[e.target.id].title)

    wx.navigateTo({
      url: '../newsdetail/newsdetail',
    })

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
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)

    wx.cloud.init()
    const db = wx.cloud.database()

    db.collection('news').where({

    }).get({
      success: res => {
        console.log(res);
        this.setData({
          //queryResult: JSON.stringify(res.data, null, 2)
          queryResult: res.data


        })
        console.log('[数据库] [查询记录] 成功: ', res.data.title)
        var i
        for (i = 10; i <= 19; i++) {
          var item = 'text[' + i + ']'
          console.log(this.data.queryResult[i].title)
          var item1 = 'newsDate[' + i + ']'


          this.setData({
            [item]: this.data.queryResult[i].title,
            [item1]: this.data.queryResult[i].date,

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


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})