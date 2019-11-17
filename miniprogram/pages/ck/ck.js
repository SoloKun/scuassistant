// pages/ck/ck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: [],
    teacher: [],
    cousenum: [],
    couseid: [],
    campus: [],
  
    sx: '全部',
    school: '全部',
    sxid: '',
    schoolid: '',
    queryResult: [],
    uid: "0"


  },

  serach: function(e) {
    wx.navigateTo({
      url: '../xk/xk',
    })
  },
  changesx: function() {
    var that = this
    wx.showActionSheet({
      itemList: ['全部', '必修', ' 选修'],
      success(res) {
        that.setData({
          sxid: res.tapIndex
        })
        that.sxchange() //实现实时刷新
      }
    })



  },
  sxchange: function() {
    this.setData({
      name: {},
      teacher: {},
      cousenum: {},
      couseid: {},
      campus: {}

    })

    if (this.data.sxid == 0) {

      this.setData({
        sx: "全部",
        uid: "5"
      })


    } else if (this.data.sxid == 1) {
      this.setData({
        sx: "必修",
        uid: "0"
      })
      //清屏


    } else {
      this.setData({
        sx: "选修",
        uid: "1"

      })
      //清屏
    }
    if (this.data.uid == 0 || this.data.uid == 1) {

      wx.cloud.init()
      const db = wx.cloud.database()

      db.collection('course').where({
        uid: this.data.uid

      }).get({
        success: res => {
          console.log(res);
          this.setData({
            //queryResult: JSON.stringify(res.data, null, 2)
            queryResult: res.data


          })
          console.log('[数据库] [查询记录] 成功: ', res.data.name)
          var i
          for (i = 0; i <= 9; i++) {
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
    } else {
      wx.cloud.init()
      const db = wx.cloud.database()

      db.collection('course').where({

      }).get({
        success: res => {
          console.log(res);
          this.setData({
            //queryResult: JSON.stringify(res.data, null, 2)
            queryResult: res.data


          })
          console.log('[数据库] [查询记录] 成功: ', res.data.name)
          var i
          for (i = 0; i <= 9; i++) {
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
  changeschool: function() {
    var that = this
    wx.showActionSheet({
      itemList: ['全部', '江安', ' 望江', '华西'],
      success(res) {
        that.setData({
          schoolid: res.tapIndex
        })
        that.schoolchange() //实现实时刷新
      }
    })



  },
  schoolchange: function() {
    this.setData({
      name: {},
      teacher: {},
      cousenum: {},
      couseid: {},
      campus: {}

    })
    if (this.data.schoolid == 0) {

      this.setData({
        school: "全部"
      })

    } else if (this.data.schoolid == 1) {
      this.setData({
        school: "江安"
      })

    } else if (this.data.schoolid == 2) {
      this.setData({
        school: "望江"
      })

    } else {
      this.setData({
        school: "华西"
      })

    }
    if (this.data.school == "江安" || this.data.school == "华西" || this.data.school == "望江") {

      wx.cloud.init()
      const db = wx.cloud.database()

      db.collection('course').where({
        campus: this.data.school
      }).get({
        success: res => {
          console.log(res);
          this.setData({
            //queryResult: JSON.stringify(res.data, null, 2)
            queryResult: res.data


          })
          console.log('[数据库] [查询记录] 成功: ', res.data.name)
          var i
          for (i = 0; i <= 9; i++) {
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



    } else {

      wx.cloud.init()
      const db = wx.cloud.database()

      db.collection('course').where({

      }).get({
        success: res => {
          console.log(res);
          this.setData({
            //queryResult: JSON.stringify(res.data, null, 2)
            queryResult: res.data


          })
          console.log('[数据库] [查询记录] 成功: ', res.data.name)
          var i
          for (i = 0; i <= 9; i++) {
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {


    wx.cloud.init()
    const db = wx.cloud.database()

    db.collection('course').where({

    }).get({
      success: res => {
        console.log(res);
        this.setData({
          //queryResult: JSON.stringify(res.data, null, 2)
          queryResult: res.data


        })
        console.log('[数据库] [查询记录] 成功: ', res.data.name)
        var i
        for (i = 0; i <= 9; i++) {
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

    db.collection('course').where({

    }).get({
      success: res => {
        console.log(res);
        this.setData({
          //queryResult: JSON.stringify(res.data, null, 2)
          queryResult: res.data


        })
        console.log('[数据库] [查询记录] 成功: ', res.data.name)
        var i
        for (i = 9; i <= 20; i++) {
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
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})