Page({
    data: {
        searchlist:[],
        name:'',
        primarySize: 'mini',
        plain: false,
        position: true
    },


    
    bindKeyInput(e){
        this.setData({
          name: e.detail.value
        });
    },


    
    
    // 电影搜索：https://douban.uieee.com/v2/movie/search
    search(key){
        var key = this.data.name;
        // console.log(key);
        const apiUrl = "https://douban.uieee.com/v2/movie/search?q=" + key;
        wx.request({
            url: apiUrl,
            data:{},
            header:{
                'content-type': 'json'
            },
            success: (res)=>{
                this.setData({
                    searchlist: res.data.subjects,
                })
            }
        })
    },
})
