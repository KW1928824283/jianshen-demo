<template>
    <div class="container" @click="navTo">
        <img class="img"  :src="imgSrc">
        <span class="text">{{imgText}}</span>
    </div>    
</template>

<script>
import store from '../store/index.js'
export default {
    name:'ImgText',
    data(){
        return{
            imgSrc:'',
            imgText : "为你推荐",
            
        }
    },
    mounted:function(){
        this.setData()
    },
    methods:{
        setData:function(){
            var imgSrc = 'https://img.leoao.com/Ozb51e421546073947'
            
            this.imgSrc = imgSrc 
        },
        navTo:function(){
            this.$router.push({
                name:'/VIP',
                params:{
                    userMsg:store.state.userMsg
                }
            })
        }
    }
}
</script>
<style scoped>
.container{
    border-radius: 6px;
    box-shadow: 0 0 0.4rem 0 rgba(0,0,0,.1);
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
}
.img{
    width: 100%;
    height: auto;
}
.text{
    position: absolute;
    right: 0;
    bottom: .4rem;
    padding-right: .05rem;
    padding-left: 1rem;
    font-size: .11rem;
    color: #fff;
    background: #ffad26;
    border-radius: .5rem 0 0 .5rem;
}
</style>



