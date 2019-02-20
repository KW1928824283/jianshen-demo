<template>
    <div class="index-view">
        
        <div class="content">

            
            <!-- 顶部的导航栏（top-bar）由于修改不太频繁，所以其数据直接在组件中配置 -->
            <top-bar></top-bar> 
            <div class="main-content">
            
                <!-- 轮播图更换的数据较为频繁，并且从后台传输，因此在父组件（即当前页面）配置 -->
                <carousel></carousel>
                <!-- 对于每个页面来说每个选项 变更不太频繁，但是考虑其复用性，选择在本页面配置-->
                <tar-bar></tar-bar>
                <!-- 对于每个页面来说每个选项 变更不太频繁，但是考虑其复用性，选择在本页面配置-->
                 <img-text></img-text>
                
                <div class="card">
                    <span class="card-recommand">推荐门店</span>
                    <span class="card-all">全部门店 ></span> 
                </div>

                <div class="store-card">
                    <store-card></store-card>
                </div>
                
                
                
                <img src="/static/img/logo.png">

            </div>
            
        </div> 
        
 
        <tab-bar v-bind:class="{'isIndex':isNowPage}"></tab-bar>

        
    </div>
    
</template>
<script>
    import TabBar from '../../components/TabBar.vue'
    import TopBar from '../../components/TopBar.vue'
    import Carousel from '../../components/Carousel.vue'
    import TarBar from '../../components/TarBar.vue'
    import ImgText from '../../components/ImgText.vue'
    import StoreCard from '../../components/StoreCard.vue'
    export default {
        name:'Index',
        components:{
            TabBar,
            TopBar,
            Carousel,
            TarBar,
            ImgText,
            StoreCard
        },
        data(){
            return{
                isNowPage:true
            }
            
        }

    }
</script>
<style>

 .content{
    margin-bottom: 70px;
    /* position: relative;  */
} 
.main-content{
    
    padding: 4.5rem .2rem 0  .2rem;
}

.card{
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
.card-recommand{
    font-size: .5rem;
    font-weight: bold;
}
.card-all{
    font-size: .3rem;
    color: #ff4e00;
}
tab-bar{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
}

</style>


