<template>
    <div class="container">
        <div class="tar-bar-head">
            <div v-for="i in itemLen" class="tar-bar-item">
                <div class="tar-bar-item-content">
                    <img class="tar-bar-item-img" v-bind:src="barData[i-1].imgPath">
                    <div v-if="barData[i-1].isTip===true" class="tar-bar-tip">
                        <span class="item-tip">{{barData[i-1].TipText}}</span>
                    </div>
                    
                </div>
                <span>{{barData[i-1].name}}</span>
                  
            </div>

        </div>
            

        
    </div>
</template>
<script>
var data = require('./config/TarBar.js')
var barData = data.tarBarData
var itemLen  = barData.length;
export default {
    name:'TarBar',
    data(){
        return {
            barData,
            itemLen
        }
    }
}
</script>
<style scoped>
    
     .tar-bar-head{
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
     }
     img{

         width: 3rem;
         height: 3rem;
     }
     .tar-bar-item-content{
         display: flex;
         flex-direction: column;
         position: relative;
     }
     .tar-bar-item{
         
         width: 33.33%;
         display: flex;
         flex-direction: column;
         align-items: center;
         padding-bottom: .5rem;
     }
     .item-tip{
        background: #ff4e00;
        position: absolute;
        font-size: 8px;
        padding: 1px 5px;
        border-radius: 50rem;
        color: #fff;
        top: 5px;
        right: -10px;
     }
</style>

