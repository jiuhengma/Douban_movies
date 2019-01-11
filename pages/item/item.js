Page({
    data:{
        id: '',
        loadingHidden: true,
        infoHidden: true,
        itemList: []
    },

    onLoad(params){

        this.setData({
            // 加载时展示动画效果
            lodingHidden: false
        })

        // 启动一个定时器使加载有个2s的动效
        setTimeout( () => {
            this.setData({
                // 隐藏动画效果
                lodingHidden: true,
                // 展示信息[默认为隐藏]
                infoHidden: false, 
            })
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