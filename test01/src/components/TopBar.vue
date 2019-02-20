<template>
    
    <div class="top-bar">
        <div class="top-bar-city">
            {{city}}
            <i v-bind:class="cityIcon +' city-icon'"></i>
        </div>
        <div class="top-bar-logo">
            <img class="logo-img" v-bind:src="logoPath">
            <!-- {{logoPath}} -->
        </div>
        <div class="top-bar-right" v-on:click="scanClick">
            <div class="top-bar-right-scan-icon">
                <i v-bind:class="iconPath + ' icon-icon'"></i>
            </div>
            <div class="top-bar-right-scan-name">
                {{scanName}}
            </div>
        </div>
    </div>
</template>
<script>
var Msg  = require('./config/TopBar.js')
console.log(Msg)
var topMsg = Msg.topMsg;
console.log(topMsg)
export default {
    name:'TopBar',
    data(){

        // 请求定位服务
        return{
            city:topMsg.city,
            logoPath:topMsg.logoPath,
            iconPath:topMsg.iconPath,
            scanName:topMsg.scanName,
            cityIcon:topMsg.cityIcon
        }
    },
    mounted:function(){
        this.getLocalPostion()
    },
    methods:{
        scanClick:function(){
            alert("扫一扫")
        },
        getLocalPostion:function(){
            var success = {
                'status':true,
                'city':'西安市'
            }
            var fail = {
                'status':false
            }

            if(fail.status){
                this.city = success.city
            }

        }
    }
}
</script>
<style scoped>
    .top-bar{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
        width:100%; 
        height:70px; 
        top:0;
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

