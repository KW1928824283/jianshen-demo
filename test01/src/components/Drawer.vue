<template>
    <div class="drawer">
        <transition name="side-fade"> 
            <div class="side-content" v-show="isReallyShow">
                

                <div class="drawer-top">
                    <div class="drawer-close" @click="hideSide">
                        <i :class="closeIcon + ' close-icon'" ></i>
                    </div>
                    <div class="drawer-title">
                        选择城市
                    </div>
                </div>


                <div class="drawer-city">
                    <div class="city-introduce">
                        定位城市:
                    </div>
                    <div class="city">
                        <div class="pos-city-name" v-if="posShow===true">
                            <div>
                                北京市
                            </div>
                        </div>
                        <div class="pos-fail" v-else>
                            定位失败，请手动选择
                        </div>
                    </div>
                </div>



                <div class="switch-city">
                    <div v-for="cityItem in cityMsg" class="city-item" @click="switchCity($event,cityItem)">
                        <span class="city-item-name">{{cityItem.name}}</span>
                    </div>
                </div>
            </div>
            
        </transition>
    </div>

</template>
<script>
import store from '../store/index.js'
export default {
    name:'Drawer',
    data(){
        return{
            closeIcon: 'iconfont icon-ceshi',
            cityMsg:store.state.cityMsg,

        }
    },
    computed:{

        isReallyShow:function(){
            return store.getters.isShowMethod
        },
        posShow:function(){
            return store.getters.isPosMethod
        }
        

    },
    methods:{
        hideSide:function(){
            store.dispatch('hideSideBar');
        },
        switchCity:function(event,cityItem){
            store.commit('switchCity',cityItem)
            store.dispatch('hideSideBar')
        }
    },
    
    
    
}
</script>
<style scoped>
.side-content{  
    z-index: 11;
    position:fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-overflow-scrolling:touch;   
    padding-top: 2rem;
}
.fade-enter, .fade-leave-to{
    opacity: 0
}
.slide-fade-enter-to, .slide-fade-leave-to{
    transition: transform 0.3s;
    transform:translate(0px,0px);
}
.slide-fade-enter,.slide-fade-leave-to{
    opacity: 0;
    -webkit-transform: translate(-286px,0px);
    transform: translate(-286px,0px);
    -webkit-transform: opacity 0.3s ease-in-out 0.3s,-webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s,transform 0.3s ease-in-out;
}
.drawer-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem 0 1.5rem;
}
.close-icon{
    font-size: 2rem;
}
.drawer-title{
    padding-right: 5.5rem;
    /* margin-left: 0.5rem; */
    font-size: 2rem;
    font-weight: bolder;
}
.drawer-city{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 2rem;
    padding-left: 1.5rem;
    align-items: center;
    
}
.city-introduce{
    font-size: 1.5rem;
}
.pos-city-name{
    margin-left: .5rem;
    font-size: 1rem;
    border: 2px solid #ff4e00;
    color: #ff4e00;
    border-radius: .5rem;
    padding: .2rem .5rem .2rem .5rem;
}
.pos-fail{
    margin-left: .5rem;
    font-size: 1rem;
    border: 2px solid #e5e5e5;
    border-radius: .5rem;
    padding: .2rem .5rem .2rem .5rem;
}
.switch-city{
    margin-top: 2rem;
    margin-left: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1.3rem;
    border-top: 1px solid #e5e5e5;
}
.city-item{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;    
    border-bottom: 1px solid #e5e5e5;
}
</style>
