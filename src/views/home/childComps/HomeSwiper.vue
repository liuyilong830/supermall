<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banner: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        isFlag: false
      }
    },
    methods: {
      imageLoad() {
        // 如果在home组件中使用了.once的话就不用这样写了
        if(!this.isFlag) {
          this.$emit('swiperImageLoad');
          this.isFlag = true;
        }
      }
    }
  }
</script>

<style>

</style>