<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :images='topImages'></detail-swiper>
    <detail-base-info :goods='goods'></detail-base-info>
  </div>
</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import {getDetail,Goods} from 'network/detail'
  import DetailSwiper from './detailChild/DetailSwiper'
  import DetailBaseInfo from './detailChild/DetailBaseInfo'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data() {
      return {
        id: null,
        topImages: [],
        goods: {}
      }
    },
    created() {
      // 不能直接在 created 中保存 id 的原因是因为我们在 router-link 外包裹了 keep-alive 标签，导致 detail 只创建了一次
      // 保存传入的id
      this.id = this.$route.params.id;
      // 根据id请求数据
      getDetail(this.id).then(res => {
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      })
    },
  }
</script>

<style scoped>

</style>