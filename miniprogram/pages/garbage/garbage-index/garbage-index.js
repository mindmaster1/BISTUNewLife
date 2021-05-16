const app = getApp();
Page({ 
  data: {
    ColorList: [
      "https://wechatimages-1302630697.cos.ap-beijing.myqcloud.com/garbage/RecycleableWaste.jpg",
      "https://wechatimages-1302630697.cos.ap-beijing.myqcloud.com/garbage/HazardouAwaste.jpg",
      "https://wechatimages-1302630697.cos.ap-beijing.myqcloud.com/garbage/HouseholdfoodWaste.jpg",
      "https://wechatimages-1302630697.cos.ap-beijing.myqcloud.com/garbage/ResidualWaste.png ",
    ],
    idx:[0,1,2,3],
    list: ['🎉用心参与垃圾分类', '🎉共同呵护绿色家园', '🎉敬请期待'],
    autoplay: true,
    interval2: 5000,
    duration2: 2000,
    
    windowHeight: wx.getSystemInfoSync().windowHeight,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    btnSize: 0,
    token: wx.getStorageSync('token'),
    status: 2,
  },
  onLoad:function(options){
    console.log('999' + this.data.token);
    var that = this;
    this.setData({
      btnSize: 0.8 * 0.32 * this.data.windowHeight,
    })
  },
  goSearch: function () {
    wx.navigateTo({
      url: '/pages/garbage/garbage-search/garbage-search',
    })
  },
  onClick:function(e){
    // console.log(JSON.stringify(e))
    console.log(e)
    var index = e.currentTarget.dataset.index
    var indexClick=0;
    switch (index){
      case 0:
        indexClick = 1
        break;
      case 1:
        indexClick = 2
        break;
      case 2:
        indexClick = 3
        break;
      case 3:
        indexClick = 4
        break;
    }
    wx.navigateTo({
      url: '/pages/ai/filter/filter?type=' + indexClick,
    })

  }

})