<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <b-scroll class="wrapper" ref="scroll">
      <detail-swiper :images='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailData='detailData' @detailInfo='detailInfo'></detail-goods-info>
      <detail-params-info :paramsInfo='paramsdata'></detail-params-info>
    </b-scroll>
  </div>
</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import {getDetail,Goods,Shop,ItemParams} from 'network/detail'
  import DetailSwiper from './detailChild/DetailSwiper'
  import DetailBaseInfo from './detailChild/DetailBaseInfo'
  import DetailShopInfo from './detailChild/DetailShopInfo'
  import BScroll from 'components/common/better-scroll/BScroll'
  import DetailGoodsInfo from './detailChild/DetailGoodsInfo'
  import DetailParamsInfo from './detailChild/DetailParamsInfo'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      BScroll,
      DetailGoodsInfo,
      DetailParamsInfo
    },
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shop: {},
        detailData: {},
        paramsdata: {}
      }
    },
    methods: {
      detailInfo() {
        this.$refs.scroll.refresh();
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
        // 获取轮播图信息
        this.topImages = data.itemInfo.topImages;
        // 获取商品基本信息保存到goods中
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        // 获取商品店家信息保存到shop中
        this.shop = new Shop(data.shopInfo);
        // 获取商品详情图片等数据
        this.detailData = data.detailInfo;
        // 获取商品尺寸信息等数据
        this.paramsdata = new ItemParams(data.itemParams.info,data.itemParams.rule);
      })
    },
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
  .wrapper {
    height: calc(100% - 44px);
  }
</style>