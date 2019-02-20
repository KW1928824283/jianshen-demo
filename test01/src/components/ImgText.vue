<template>
    <div class="container">
        <img class="img"  :src="imgSrc">
        <span class="text">{{imgText}}</span>
    </div>    
</template>

<script>
export default {
    name:'ImgText',
    data(){
        return{
            imgSrc:'https://img.leoao.com/Ozb51e421546073947',
            imgText : "为你推荐"
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



