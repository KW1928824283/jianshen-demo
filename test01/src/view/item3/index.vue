<template>
    <div>
        <div>
            <h2>This is Item3 test</h2>
        </div>
        <tab-bar v-bind:class="{'isItem3':isNowPage}"></tab-bar>
    </div>
</template>

<script>
import TabBar from '../../components/TabBar.vue'
export default {
    
    name:'Item3',
    data(){
        return{
            isNowPage:true
        }
    },
    components:{
        TabBar
    }
}
</script>
