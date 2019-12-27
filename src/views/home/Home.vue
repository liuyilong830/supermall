<template>
  <div id="home">
    <nav-bar class="nav_bar_home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner='banner'></home-swiper>
    <recommend-views :recommend='recommend'></recommend-views>
    <feature-views></feature-views>
    <tab-control :title="['流行','新款','精选']" @tarClick='tarClick'></tab-control>
    <goods-list :goods='showGoods'></goods-list>
    <ul>
      <li>第1个</li>
      <li>第2个</li>
      <li>第3个</li>
      <li>第4个</li>
      <li>第5个</li>
      <li>第6个</li>
      <li>第7个</li>
      <li>第8个</li>
      <li>第9个</li>
      <li>第10个</li>
      <li>第11个</li>
      <li>第12个</li>
      <li>第13个</li>
      <li>第14个</li>
      <li>第15个</li>
      <li>第16个</li>
      <li>第17个</li>
      <li>第18个</li>
      <li>第19个</li>
      <li>第20个</li>
      <li>第21个</li>
      <li>第22个</li>
      <li>第23个</li>
      <li>第24个</li>
      <li>第25个</li>
      <li>第26个</li>
      <li>第27个</li>
      <li>第28个</li>
      <li>第29个</li>
      <li>第30个</li>
      <li>第31个</li>
      <li>第32个</li>
      <li>第33个</li>
      <li>第34个</li>
      <li>第35个</li>
      <li>第36个</li>
      <li>第37个</li>
      <li>第38个</li>
      <li>第39个</li>
      <li>第40个</li>
      <li>第41个</li>
      <li>第42个</li>
      <li>第43个</li>
      <li>第44个</li>
      <li>第45个</li>
      <li>第46个</li>
      <li>第47个</li>
      <li>第48个</li>
      <li>第49个</li>
      <li>第50个</li>
    </ul>
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

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureViews,
      TabControl,
      GoodsList
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

<style>
  #home {
    padding-top: 44px;
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
</style>