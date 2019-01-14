Page({
    data:{
        id: '',
        infoHidden: true,
        itemList: []
    },

    onLoad(params){

        wx.showLoading({
            title: "玩儿命加载中..."
        })

        // 启动一个定时器使加载有个1s的动效
        setTimeout( () => {
            this.setData({
                // 展示信息[默认为隐藏]
                infoHidden: false, 
            })
            wx.hideLoading()
            this.getMoviesInfo(params)
        },1000)
    },

    getMoviesInfo(params){
        const apiUrl = "https://douban.uieee.com/v2/movie/subject/" + params.id
        wx.request({
            url: apiUrl,
            data:{},
            header:{
                'content-type': 'json'
            },
            success: (res)=>{
                this.setData({
                itemList: res.data,
                })
            }
        });
    }
    
})