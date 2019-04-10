Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2016-09-01',
    region: ['广东省', '广州市', '海珠区'],
    docid:0,
    docname:"",
    dochos:"",
    
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  //跳转详情页
  listTap: function (e) {
    wx.navigateTo({
      url: '../list/index?id=1'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.setData({
      docid: options.id,
      docname: options.name,
      dochos: options.hos,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: () => {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: () => {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: () => {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: () => {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: () => {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: () => {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: () => {

  },
  
})