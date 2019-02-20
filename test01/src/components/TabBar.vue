<template>

    <div class="footer fixed">
        <ul>
            <li v-for="item in tabItems"> 
                               
                <router-link  v-bind:to="item.navPath">
                        <div class="tab-item">
                                <div class="tab-icon">
                                    <i v-bind:class="item.icon + ' icon-icon'"></i>
                                </div>
                                <div class="tab-name">
                                    <span>{{item.tabName}}</span>
                                </div>   
                        </div>     
                </router-link> 
            </li>
        </ul>
    </div>
</template>

<script>

var barData = require('./config/TabBar.js') 
var test = barData.barList
export default {
    name:'TabBar',
    data(){
        console.log(test)
        return{
            tabItems:test
        }
    }
}
</script>
<style scoped>
    li a{display: inline-block; width: 100%; height:100%;}
	.footer{width:100%; height:70px; bottom:0;}
	ul{display: flex; height:100%; line-height:50px;}
    ul li{flex: 1; background-color:#f1f1f1;}
    
    i{font-size:20px; }
    .tab-item{display: block;}
    .tab-icon{height: 35px;}
    .tab-name{height: 35px;margin-top: 0px; line-height: 30px;}
    .isIndex li:first-child{background-color:#d3d3d3;}
	.isIndex li:first-child a{color:#41b883;}

	
	.isItem2 li:nth-child(2){background-color:#d3d3d3;}
	.isItem2 li:nth-child(2) a{color:#41b883;}
	
	.isItem3 li:last-child{background-color:#d3d3d3;}
	.isItem3 li:last-child a{color:#41b883;}
</style>

