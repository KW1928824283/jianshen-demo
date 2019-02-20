<template>
    <div>
        <div>
            <h2>This is Item2 just for test</h2>
        </div>
        <tab-bar v-bind:class="{'isItem2':isNowPage}"></tab-bar>

    </div>
    
</template>

<script>
import TabBar from '../../components/TabBar.vue'
export default {
    name:'Item2',
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

