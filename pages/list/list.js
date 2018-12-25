//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    windowHeight: 0,
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
  onLoad(params){
    // 获取屏幕高度
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight
        })
        console.log(res.windowHeight);
      }
    });

    // 请求数据
    const apiUrl = "https://douban.uieee.com/v2/movie/" + params.type;
    // console.log(params.type + '&start='  + '&count=' + params.count);
    wx.request({
      url: apiUrl,
      data:{
        start: 0,
        count: 20
      },
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
  
  // loadMore: (params) => {
  //   var start = 0;
  //   var count = 0;
  //   //请求数据
  //   const apiUrl = "https://douban.uieee.com/v2/movie/" + params.type;
   
  //   wx.request({
  //     url: apiUrl,
  //     data:{
  //       start: start + 11,
  //       count: count + 10
  //     },
  //     header:{
  //       'content-type': 'json'
  //     },
  //     success: (res)=>{
  //       console.log(res)
  //     }
  //   })
  //   console.log(params.type)
    
  // }
  
})
