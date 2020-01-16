<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @detailThemeTopY='detailThemeTopY' ref="navbar"></detail-nav-bar>
    <b-scroll class="wrapper" ref="scroll" @scroll="contentScroll" :probeType='3'>
      <detail-swiper :images='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailData='detailData' @detailInfo='detailInfo'></detail-goods-info>
      <detail-params-info :paramsInfo='paramsdata' ref="params"></detail-params-info>
      <detail-evaluate :evaluate='evaluate' ref="evaluate"></detail-evaluate>
      <goods-list :goods='goodsList' ref="goods"></goods-list>
    </b-scroll>
    <detail-bottom-bar @addToCar='addToCar'></detail-bottom-bar>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import {getDetail,getRecommend,Goods,Shop,ItemParams,ItemEvaluate} from 'network/detail'
  import DetailSwiper from './detailChild/DetailSwiper'
  import DetailBaseInfo from './detailChild/DetailBaseInfo'
  import DetailShopInfo from './detailChild/DetailShopInfo'
  import BScroll from 'components/common/better-scroll/BScroll'
  import DetailGoodsInfo from './detailChild/DetailGoodsInfo'
  import DetailParamsInfo from './detailChild/DetailParamsInfo'
  import DetailEvaluate from './detailChild/DetailEvaluate'
  import GoodsList from 'components/content/goodslist/GoodsList'
  import DetailBottomBar from './detailChild/DetailBottomBar'

  import {debounce} from 'common/utils'
  import {itemListListenerMixIn , contentBackTopMixin} from 'common/mixins'

  import { mapActions } from 'vuex'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper, 
      DetailBaseInfo,
      DetailShopInfo,
      BScroll,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailEvaluate,
      GoodsList,
      DetailBottomBar
    },
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shop: {},
        detailData: {},
        paramsdata: {},
        evaluate: {},
        goodsList: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    methods: {
      // ...mapActions(['addToCart']),
      ...mapActions({
        addCart: 'addToCart'
      }),
      detailInfo() {
        this.refresh();

        this.getThemeTopY();
      },
      detailThemeTopY(index) {
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300);
      },
      contentScroll(position) {
        var positionY = -position.y;
        var length = this.themeTopYs.length;
        for(let i = 0; i < length; i++) {
          if(this.currentIndex !== i && ((i < length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i=== length-1 && positionY >= this.themeTopYs[length-1]))) {
            this.currentIndex = i;
            this.$refs.navbar.currentIndex = this.currentIndex;
          }
        }
        // 调用混入中的 demo方法达到回到顶部
        this.listenShowBackTop(position);
      },
      addToCar() {
        // console.log(111);
        // 1.获取要展示在购物车中的商品的信息
        const product = {};
        product.id = this.id;
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.realPrice = this.goods.realPrice;
        // 2.将商品加入到购物车
        // this.$store.commit('addToCar', product);
        /* this.$store.dispatch('addToCart' , product).then(res => {
          console.log(res);
        }) */
        this.addCart(product).then(res => {
          console.log(res)
        })


      }
    },
    mixins: [itemListListenerMixIn , contentBackTopMixin],
    created() {
      // 不能直接在 created 中保存 id 的原因是因为我们在 router-link 外包裹了 keep-alive 标签，导致 detail 只创建了一次
      // 保存传入的id
      this.id = this.$route.params.id;
      // 根据id请求数据
      getDetail(this.id).then(res => {
        // console.log(res);
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
        // 获取商品评价的数据
        this.evaluate = new ItemEvaluate(data.rate);

        /* this.$nextTick(() => {
          // 在这个地方调用回调的话，可以拿到值，但是拿到的值不正确，原因在于调用该回调函数的时候有些图片可能还没有加载完，所以数据会不准确
          this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.evaluate.$el.offsetTop);
          this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
          console.log(this.themeTopYs);
        }) */
      })
      // 获取推荐的信息
      getRecommend().then(res => {
        // console.log(res);
        this.goodsList = res.data.list;
      })

      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.evaluate.$el.offsetTop);
        this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
        // console.log(this.themeTopYs);
      }, 500)
    },
    mounted() {
      // 因为是公共部分，所以写在了混入中去了
    },
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImgLoadFunc);
    }
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
    height: calc(100% - 44px - 49px);
    overflow:hidden;
  }
</style>