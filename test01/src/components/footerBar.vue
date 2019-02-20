<template>
    <div id="footerBar">
        <img v-bind:src="path">
        <div>
            {{barName}}
        </div>
        <i class="iconfont icon-ceshi icon-icon"></i>
    </div>
</template>
<script>
export default {
    name:'footerBar',
    data(){
        return{
            path:require('../assets/logo.png'),
            barName:'运动'
        }
    }
}
</script>
<style scoped>
    .icon-icon{
        color: brown;
        height: 50px;
        width: 50px;
        font-size: 30px;
    }

</style>


