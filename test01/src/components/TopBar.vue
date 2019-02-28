<template>
    
    <div class="top-bar">
        <div class="top-bar-city" @click="showSide">
            {{cityName}}
            <i class="iconfont icon-30jiantouxiangxiafill  city-icon"></i>
        </div>
        <div class="top-bar-logo">
            <img class="logo-img" src="/static/img/logo.png">
            <!-- {{logoPath}} -->
        </div>
        <div class="top-bar-right" v-on:click="scanClick">
            <div class="top-bar-right-scan-icon">
                <i class="iconfont icon-saoyisao  icon-icon"></i>
            </div>
            <div class="top-bar-right-scan-name">
                分享
            </div>
        </div>
    </div>
</template>
<script>
import store from '../store/index.js'

export default {
    name:'TopBar',
    data(){

        // 请求定位服务
        return{
            // cityName:store.state.posCity.name,
            // cityIcon:topMsg.cityIcon
        }
    },
    computed:{
        cityName:function(){
            return store.state.posCity.name
        }
    },
    mounted:function(){
        // this.getLocalPostion()
    },
    methods:{
        scanClick:function(){
            alert('分享')
        },
        showSide:function(){
            store.dispatch('showSideBar')
        }
    }
}
</script>
<style scoped>
    .top-bar{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
        width:100%; 
        height:70px; 
        top:0;
        z-index: 9;
        background-color: #fff;
    }
    .top-bar-city{
        display: flex;
        align-items: center;
        justify-content:center;
        padding-left: 0.6rem;
        flex-direction: row;

    }
    .top-bar-logo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo-img{
        width: 2.5rem ;
        height: 2.5rem;
    }
    .top-bar-right{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-right: 0.6rem;
    }
    .icon-icon{
        font-size: 1.8rem;
        
    }
    .top-bar-right-scan-icon{
        margin-top: 0.4rem;
    }
</style>

