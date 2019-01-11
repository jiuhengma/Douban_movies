//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    start: 0,
    count: 10,
    hidden: true,
    windowHeight: 0,
    type: '',
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
    // console.log(params);
    this.setData({
      type: params.type
    })

    // 获取用户系统信息
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          // 获取屏幕高度
          windowHeight: res.windowHeight
        })
        // console.log(res.windowHeight);
      }
    });
    

    // 挂载getMoviesList方法
    this.getMoviesList(params);
  },

  getMoviesList(params){
    // 请求数据
    // const apiUrl = "https://douban.uieee.com/v2/movie/" + params.type;
    // console.log(params.type);
    const apiUrl = `https://douban.uieee.com/v2/movie/${this.data.type}?start=${this.data.start}&count=${this.data.count}`
    // console.log(params.type + '&start='  + '&count=' + params.count);
    wx.request({
      url: apiUrl,
      data:{},
      header:{
        'content-type': 'json'
      },
      success: (res)=>{
        this.setData({
          // 追加数据
          list: this.data.list.concat(res.data.subjects),
          title: res.data.title
        })
      }
    })
  },
  
  // 加载更多
  
  loadMore(params){
    // console.log(params);
    this.setData({
      // 加载第二页数据，从第11条加载
      start: this.data.start + 10, 
      count: 10,
      // 显示加载动画
      hidden: false 
    });

    // 启动一个定时器，使加载动效持续1.5秒，并执行请求操作
    setTimeout( () => {
      this.setData({
        // 隐藏加载动画
        hidden: true
      });
      // console.log(params)
      // 执行数据请求操作
      this.getMoviesList(params)
    }, 1500)
  }
  
})
