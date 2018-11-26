//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    list:[],
    title:'Loading...'
  },

  // API接口：
  // 正在热映：https://douban.uieee.com/v2/movie/in_theaters
  // 即将上映：https://douban.uieee.com/v2/movie/coming_soon
  // TOP250：https://douban.uieee.com/v2/movie/top250
  // 北美电影排行榜：https://douban.uieee.com/v2/movie/us_box
  // 口碑榜：https://douban.uieee.com/v2/movie/weekly
  // 新片榜：https://douban.uieee.com/v2/movie/new_movies
  // 电影搜索：https://douban.uieee.com/v2/movie/search
  onLoad: function(params){
    // const _this = this;
    const apiUrl = "https://douban.uieee.com/v2/movie/" + params.type;
    wx.request({
      url: apiUrl,
      data:{},
      header:{
        'content-type': 'json'
      },
      success: (res)=>{
        this.setData({

          list: res.data.subjects,
          title: res.data.title
        })
      }
    })
  },
  load: () => {

  }
})
