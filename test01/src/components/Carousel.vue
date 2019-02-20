<template> 
  <div class="container"> 
    <swiper :options="swiperOption"> 
      <!-- 这部分放你要渲染的那些内容 --> 
        <swiper-slide v-for="(item,index) in carouselData" :key="index">
            <img :src="item.imgUrl" @click="navClick(index,$event)">
        </swiper-slide>
    
      <!-- 这是轮播的小圆点 --> 
      <!-- <div class="swiper-pagination" slot="pagination"></div> 
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
    </swiper> 
  </div> 
</template> 
<script> 
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default { 
    components: { 
      swiper, 
      swiperSlide 
    }, 
    data() { 
      return { 
        
        carouselData:{},

        //轮播图插件的属性
        swiperOption: { 
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true 
            notNextTick:true,
            
            autoplay:{
                disableOnInteraction: false, //用户操作后是否禁止自动循环
                delay:5000, //自自动循环时间
                loop:true
            },
            speed:500,
            direction:'horizontal',
        } 
      } 
    },
    mounted:function(){
        this.getCarouselData()
    },
    methods:{
        getCarouselData:function(){
            var Data =[
                {
                    'imgUrl':'https://img.leoao.com/FvX25IQgUIVNsp9UHtHQJ1CzbbgU?imageslim&imageView2/2/w/750/h/0',
                    'isNav':true,
                    'navUrl':'https://www.baidu.com'
                },
                {
                    'imgUrl':'https://img.leoao.com/FlPwuZFTWFPvu-G280PVQX6G-r-N?imageslim&imageView2/2/w/750/h/0',
                    'isNav':false
                },
                {

                    'imgUrl':'https://img.leoao.com/Fk3Mzmdc8xqKRpWaaKzASqVhakoz?imageslim&imageView2/2/w/750/h/0',
                    'isNav':true,
                    'navUrl':'https://3.swiper.com.cn/api/Loop/2014/1215/22.html'
                }
            ]
            this.carouselData = Data
        },

        navClick:function(index,event){

            var data = this.carouselData
            if(data[index].isNav){
                console.log("jump to"+data[index].navUrl)
                window.location.href = data[index].navUrl
            }
        }
    }  
  } 
</script> 
<style scoped> 
    .container{
        padding-top: 1rem;
    }
    img{
        width: 100%;
        height: auto;
    }
</style>
