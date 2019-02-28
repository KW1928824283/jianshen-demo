<template> 
    <div>
        <div class="card-title">
          <div>
            <span class="card-introduce">全部门店</span>  <span v-text=" '  共有' + data.length+ '家店'"></span>
          </div>
          
        </div>  
        <div>
          <div class="card-content">
            <div v-for="item in data">
              <div @click="navTo" class="card-item">
                  <div class="item-left">
                    <img :src="item.src" alt="">
                  </div>
                  <div class="item-right">
                      <span class="item-name">{{item.name}}</span>
                      <span class="item-address">{{item.address}}</span>
                      <span class="item-distance">{{item.distance}}</span>
                  </div>
              </div>
                
            </div>
          </div>
          <div v-for="n in 100">
            <h1>Hello</h1>
          </div>
        </div>
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
             'distance':'300m',
             'address':'房山拱辰北大街龙湖房山天街A馆-B1-15-16'
            },
            {'src':'https://img.leoao.com/o_1bpi7qorv1panfne1eiv15aeu4h82.jpg?imageslim&imageView2/1/w/200/h/200',
              'name':'嘉盛SOHO店',
              'distance':'300m',
              'address':'房山拱辰北大街龙湖房山天街A馆-B1-15-16'  
            },

            {'src':'https://img.leoao.com/o_1ca7mqsl31g53da42obknperc16.jpg?imageslim&imageView2/1/w/200/h/200',
            'name':'嘉盛SOHO店',
            'distance':'300m',
            'address':'房山拱辰北大街龙湖房山天街A馆-B1-15-16'
            },
            {'src':'https://img.leoao.com/o_1bpi60uuuovmqd11rna1nksitn3c.jpg?imageslim&imageView2/1/w/200/h/200',
            'name':'嘉盛SOHO店',
            'distance':'300m',
            'address':'房山拱辰北大街龙湖房山天街A馆-B1-15-16'
            },
            // {'src':'https://img.leoao.com/o_1bpg14rtnnqm1b7814gh1h3r1eon4u.jpg?imageslim&imageView2/1/w/200/h/200',
            // 'name':'嘉盛SOHO店',
            // 'distance':'300m',
            // 'address':'房山拱辰北大街龙湖房山天街A馆-B1-15-16'
            // },
            // {'src':'https://img.leoao.com/o_1bvmekljv1aj4gea1p6011161g4od2.jpg?imageslim&imageView2/1/w/200/h/200',
            // 'name':'嘉盛SOHO店',
            // 'distance':'300m',
            // 'address':'房山拱辰北大街龙湖房山天街A馆-B1-15-16'
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
        this.$router.push({
                name:'/store',
                params:{
                    id:'hello'
                }
        })
      },
      getStoreData:function(){

        
      }
    } 
  } 
</script> 
<style scoped> 
    
    .card-title{
      height: 3rem;
      display: flex;
      justify-content: flex-start;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
      align-items: center;
    }
    .card-introduce{
      font-weight: bolder;
    }
    .card-content{
      margin: .8rem 1rem 0 1rem;
    }
    .card-item{
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #e5e5e5;
    }
    .item-left{
      width: 25%;
      display: flex;
      justify-content: flex-start;
      flex-shrink: 0;
      height: 100%;
      
    }
    .item-right{
      padding-left: .8rem;
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      flex-wrap: nowrap;
    }
    img{
      /* flex-shrink: 0; */
      height: 100%;
      width: 100%;
      border-radius: 15px;
      padding: .6rem 0 .6rem 0;
    }
    
    .item-name{
      font-size: 1.2rem;
      font-weight: 700;
    }
    .item-address{
      font-size: .5rem;
      display: flex;
      
      align-items: flex-start;
    }
</style>
