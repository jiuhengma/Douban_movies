Page({
    data:{
        id: '',
        itemList: []
    },

    onLoad(params){
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
        // console.log(params.id)
    },
    
})