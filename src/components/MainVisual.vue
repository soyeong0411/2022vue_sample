<template>
  <div class="visual">
    <swiper
    :modules="modules" 
    v-bind="swiperOptions"
    class="mySwiper">
    
      <!-- #1 -->
      <!-- <swiper-slide v-for="item in swiperView" :key="item">
        <div :style="{'background-color':`${item.color}`}" class="innerItem">
          <img :src="`./images/swiper/${item.src}`" alt="">
        </div>
      </swiper-slide> -->

      <!-- #2 -->
      <swiper-slide v-for="(item,i) in swiperView" :key="item" :style="{'background-color':`${swiperView[i].color}`}">
        <div class="innerItem">
          <img :src="`./images/swiper/${item.src}`" alt="">
        </div>
      </swiper-slide>
    </swiper>
    <div class="btnWrap">
      <div class="prev">이전</div>
      <div class="next">다음</div>
    </div>
  </div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation,Pagination } from "swiper";

//swiper data
import sData from "@/data/swiper.js"

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation,Pagination],
      swiperView:sData,
      swiperOptions:{
        loop:true,
        navigation:{
          nextEl:'.visual .next',
          prevEl:'.visual .prev',
        },
        pagination:{
          type:'fraction'
        }
      }
    };
  },
};
</script>

<style lang="scss">
    .mySwiper{
      .swiper-slide{
        height: 400px;
        .innerItem{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .visual{
        position: relative;
      .btnWrap{
        display: flex;
        position: absolute;
        bottom: 20px;left:calc(50% + 500px);
        z-index: 1;
        gap:5px;
        .next,.prev{
          padding: 5px 10px;
          background: rgba(0,0,0,0.3);
          border-radius: 10px;
          color:white;
          cursor: pointer;
        }
      }
    }
</style>