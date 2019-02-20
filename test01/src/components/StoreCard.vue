<template> 
    <slick></slick>
</template> 
<script> 
  import '../assets/slick/slick.css'
  import '../assets/slick/slick-theme.css'
  import 'swiper/dist/css/swiper.css'
  import Slick from 'vue-slick'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default { 
    components: { 
      swiper, 
      swiperSlide,
      Slick 
    }, 
    data() { 
      return { 
        
        carouselData:{},

        slidesToShow:2
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
    .card{
        display: flex;
        flex-direction: row;

    }
   
</style>
