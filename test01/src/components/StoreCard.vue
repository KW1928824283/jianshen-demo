<template> 
    <div>
        
        <slick class="card" ref="slick" :options="slickOptions">
            <div class="card-item" v-for="item in data">
              <div @click="navTo">
                <div class="card-item-content">
                    <img class="card-img" :src="item.src">
                </div>
                <span>{{item.name}}</span>
                <span>{{item.distance}}</span>
              </div>
                
            </div>
        </slick>
    </div>
    
</template> 
<script> 
  import '../assets/slick/slick.css'
  import '../assets/slick/slick-theme.css'
  import Slick from 'vue-slick'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import store from '../store/index.js'
import { METHODS } from 'http';
  export default { 
    components: { 
      Slick 
    }, 
    data() { 
      return { 
        
        // storeData:store.state.data,

        data:[
            {'src':'https://img.leoao.com/o_1bpg0u12q1tpc185h1lgh1fv3a022e.jpg?imageslim&imageView2/1/w/200/h/200',
             'name':'嘉盛SOHO店',
             'distance':'300m'
            },
            {'src':'https://img.leoao.com/o_1bpi7qorv1panfne1eiv15aeu4h82.jpg?imageslim&imageView2/1/w/200/h/200',
              'name':'嘉盛SOHO店',
              'distance':'300m'  
            },

            {'src':'https://img.leoao.com/o_1ca7mqsl31g53da42obknperc16.jpg?imageslim&imageView2/1/w/200/h/200',
            'name':'嘉盛SOHO店',
            'distance':'300m'
            },
            {'src':'https://img.leoao.com/o_1bpi60uuuovmqd11rna1nksitn3c.jpg?imageslim&imageView2/1/w/200/h/200',
            'name':'嘉盛SOHO店',
            'distance':'300m'
            },
            // {'src':'https://img.leoao.com/o_1bpg14rtnnqm1b7814gh1h3r1eon4u.jpg?imageslim&imageView2/1/w/200/h/200',
            // 'name':'嘉盛SOHO店',
            // 'distance':'300m'
            // },
            // {'src':'https://img.leoao.com/o_1bvmekljv1aj4gea1p6011161g4od2.jpg?imageslim&imageView2/1/w/200/h/200',
            // 'name':'嘉盛SOHO店',
            // 'distance':'300m'
            // }
        ],
        slickOptions: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            accessibility:false,
            arrows:false,
            mobileFirst:true
        },
      } 
    },
    mounted:function(){
      this.getStoreData()
    },
    computed:{
      storeData:function(){
        return  store.getters.storeData
      }
    },
    methods:{
      navTo:function(){
        console.log('Test')
      },
      getStoreData:function(){

        var data = [
            {'src':'https://img.leoao.com/o_1bpg0u12q1tpc185h1lgh1fv3a022e.jpg?imageslim&imageView2/1/w/200/h/200',
             'name':'嘉盛SOHO店',
             'distance':'300m'
            },
            {'src':'https://img.leoao.com/o_1bpi7qorv1panfne1eiv15aeu4h82.jpg?imageslim&imageView2/1/w/200/h/200',
              'name':'嘉盛SOHO店',
              'distance':'300m'  
            },

            {'src':'https://img.leoao.com/o_1ca7mqsl31g53da42obknperc16.jpg?imageslim&imageView2/1/w/200/h/200',
            'name':'嘉盛SOHO店',
            'distance':'300m'
            },
            {'src':'https://img.leoao.com/o_1bpi60uuuovmqd11rna1nksitn3c.jpg?imageslim&imageView2/1/w/200/h/200',
            'name':'嘉盛SOHO店',
            'distance':'300m'
            },
            {'src':'https://img.leoao.com/o_1bpg14rtnnqm1b7814gh1h3r1eon4u.jpg?imageslim&imageView2/1/w/200/h/200',
            'name':'嘉盛SOHO店',
            'distance':'300m'
            },
            // {'src':'https://img.leoao.com/o_1bvmekljv1aj4gea1p6011161g4od2.jpg?imageslim&imageView2/1/w/200/h/200',
            // 'name':'嘉盛SOHO店',
            // 'distance':'300m'
            // }
        ]
        // this.storeData = data
        // store.commit('setStoreMsg',data)
        // console.log(store.state.data)
      }
    } 
  } 
</script> 
<style scoped> 
    
    img{
        width: 80%;
        height:auto;
        margin-left: 10%;
    }
    
    .card{
        display: flex;
        flex-direction: row;
    }
    .card-item{
        display: flex;
        flex-direction: column;
        align-items: center;  
        
    }
    .card-item-content{

        position: relative;
        display: table-cell;
        text-align: center;
    }
</style>
