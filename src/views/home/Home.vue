<template>
  <div id="home">
    <nav-bar class="nav_bar_home">
      <div slot="center">购物街</div>
    </nav-bar>

    <b-scroll class="wrapper">
      <home-swiper :banner='banner'></home-swiper>
      <recommend-views :recommend='recommend'></recommend-views>
      <feature-views></feature-views>
      <tab-control :title="['流行','新款','精选']" @tarClick='tarClick'></tab-control>
      <goods-list :goods='showGoods'></goods-list>
    </b-scroll>
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendViews from './childComps/RecommendViews'
  import FeatureViews from './childComps/FeatureViews'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goodslist/GoodsList'

  import {getHomeMultidata,getGoodsList} from 'network/home'

  import BScroll from 'components/common/better-scroll/BScroll'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureViews,
      TabControl,
      GoodsList,
      BScroll
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goodslist: {
          pop: { page: 0 , list: [] },
          new: { page: 0 , list: [] },
          sell: { page: 0 , list: [] }
        },
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goodslist[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata();
      this.getGoodsList('pop');
      this.getGoodsList('new');
      this.getGoodsList('sell');
    },
    methods: {
      tarClick(index) {
        // console.log(index);
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },


      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getGoodsList(type) {
        const page = this.goodslist[type].page + 1;
        getGoodsList(type,page).then(res => {
          // console.log(res);
          this.goodslist[type].list.push(...res.data.list);
          this.goodslist[type].page = page;
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    /* position: relative; */
  }
  .nav_bar_home {
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .wrapper {
    height: calc(100vh - 93px);
    overflow: hidden;
    /* position: absolute;
    top: 44px;
    bottom: 44px;
    left: 0;
    right: 0; */
  }
</style>