// pages/newsdetail/newsdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
Text:"",
title1:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var str = wx.getStorageSync('lastText');
   
   
    this.setData({ Text: str });
    var str = wx.getStorageSync('title1');
    wx.setNavigationBarTitle({
      title: str
    })
    this.setData({ title1: str });
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