//主页面中父组件与子组件的数据和方法通信文件



//侧滑功能实现时，需要的数据以及函数
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isShow:false,  //判断是否侧滑的参数
    isPos:false ,//判断是否定位的参数
    userMsg:{ //从后台获取用户的信息，在此进行存储
        
    },
    posCity:{'cityId':'1','name':'北京'}, //当前定位的城市，有默认值 其中的数据要和cityMsg中的数据一致
    cityMsg:[   //选择城市的列表
        {'cityId':'2', 'name':'上海'},
        {'cityId':'3', 'name':'广州'},
        {'cityId':'4', 'name':'深圳'}
    ],


    data:{}
        // data :[
        // {'src':'https://img.leoao.com/o_1bpg0u12q1tpc185h1lgh1fv3a022e.jpg?imageslim&imageView2/1/w/200/h/200',
        //  'name':'嘉盛SOHO店',
        //  'distance':'300m'
        // },
        // {'src':'https://img.leoao.com/o_1bpi7qorv1panfne1eiv15aeu4h82.jpg?imageslim&imageView2/1/w/200/h/200',
        //   'name':'嘉盛SOHO店',
        //   'distance':'300m'  
        // },

        // {'src':'https://img.leoao.com/o_1ca7mqsl31g53da42obknperc16.jpg?imageslim&imageView2/1/w/200/h/200',
        // 'name':'嘉盛SOHO店',
        // 'distance':'300m'
        // },
        // {'src':'https://img.leoao.com/o_1bpi60uuuovmqd11rna1nksitn3c.jpg?imageslim&imageView2/1/w/200/h/200',
        // 'name':'嘉盛SOHO店',
        // 'distance':'300m'
        // },
        // {'src':'https://img.leoao.com/o_1bpg14rtnnqm1b7814gh1h3r1eon4u.jpg?imageslim&imageView2/1/w/200/h/200',
        // 'name':'嘉盛SOHO店',
        // 'distance':'300m'
        // },
        // {'src':'https://img.leoao.com/o_1bvmekljv1aj4gea1p6011161g4od2.jpg?imageslim&imageView2/1/w/200/h/200',
        // 'name':'嘉盛SOHO店',
        // 'distance':'300m'
        // }
    // ]
    
    

    
    
}
    
    
const getters = {
    isShowMethod(state){
       return state.isShow;
    },
    isPosMethod(state){
        return state.isPos
    },
    cityMsg(state){
        return state.cityMsg
    },
    storeMsg(state){
        return state.data
    }
}
    
    
const actions = {
    showSideBar({commit}){
        commit('showBar')
    },
    hideSideBar({commit}){
        commit('hideBar')
    }
    
}
    
    
const mutations = {
    showBar(state){
        state.isShow=true;
    },
    hideBar(state){
        state.isShow=false;
    },
    switchCity(state,cityItem){
        state.posCity = cityItem
    },
    setUserMsg(state,userMsg){
        state.userMsg = userMsg
    },
    setStoreMsg(state,data){
        state.data = data
    }

}
    export default new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    }); 