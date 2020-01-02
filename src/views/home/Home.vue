<template>
  <div id="home">
    <nav-bar class="nav_bar_home">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']" @tarClick='tarClick' ref="tabControl1" class="tab-control1" v-show="isTabControl"></tab-control>
    <b-scroll class="wrapper" ref="scroll" :probeType='3' @scroll='contentScroll' @pullingUp='pullingUp'>
      <home-swiper :banner='banner' @swiperImageLoad='swiperImageLoad'></home-swiper>
      <recommend-views :recommend='recommend' @recommendImageLoad='recommendImageLoad'></recommend-views>
      <feature-views @featureImageLoad='featureImageLoad'></feature-views>
      <tab-control :title="['流行','新款','精选']" @tarClick='tarClick' ref="tabControl2"></tab-control>
      <goods-list :goods='showGoods'></goods-list>
    </b-scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendViews from './childComps/RecommendViews'
  import FeatureViews from './childComps/FeatureViews'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goodslist/GoodsList'
  import BackTop from 'components/content/backtop/BackTop'

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
      BScroll,
      BackTop
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
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isImageLoad: {
          swiper: false,
          recommend: false,
          feature: false
        },
        isTabControl: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goodslist[this.currentType].list
      },
      cupImageLoad() {
        this.ImageLoad();
      }
    },
    created() {
      this.getHomeMultidata();
      this.getGoodsList('pop');
      this.getGoodsList('new');
      this.getGoodsList('sell');

    },
    destroyed() {
      console.log('home destroyed');
    },
    mounted() {
      // 1.防抖函数
      const refresh = this.debounce(this.$refs.scroll.refresh , 500);
      // 在这里接收 GoodListItem 向事件总线发送的事件 itemImgLoad
      this.$bus.$on('itemImgLoad', () => {
        // console.log('-----------');
        // 当图片加载完之后我们调用 scroll.refresh() 这个方法将重新刷新 scroll对象中的scrollerHeight属性值 
        refresh();
      })
      setTimeout(() => {
        this.ImageLoad();
      }, 500)
    },
    updated() {
      // 不能在 updata 中监听，有的时候还是不准确
      /* this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.tabOffsetTop); */
      
    },
    activated() {
      // console.log('saveY:'+this.saveY);
      this.$refs.scroll.scrollTo(0,this.saveY);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
      // console.log(this.saveY);
      
    },
    methods: {
      debounce(func , delay) {
        let timer = null;
        return function(...args) {
          if(timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this , args);
            // func(args);
          } , delay);
        }
      },
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scrollTo(0 , 0 , 500);
      },
      contentScroll(position) {
        // console.log(position);
        // 1.当滚动超过 1000 之后显示回到顶部的按钮
        this.isShowBackTop = (-position.y) > 1000
        // 2.当滚动到一定位置时，显示另一个tabControl组件
        this.isTabControl = (-position.y) > this.tabOffsetTop
      },
      pullingUp(scroll) {
        // console.log('上拉加载更多');
        this.getGoodsList(this.currentType);
      },
      swiperImageLoad() {
        // 2.获取tabControl的offsetTop值
        this.isImageLoad.swiper = true;
        // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        // console.log(this.tabOffsetTop);
      },
      recommendImageLoad() {
        this.isImageLoad.recommend = true;
      },
      featureImageLoad() {
        this.isImageLoad.feature = true;
      },
      ImageLoad() {
        if(this.isImageLoad.swiper && this.isImageLoad.recommend && this.isImageLoad.feature) {
          this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
          // console.log(this.tabOffsetTop);
        }
      },

      /* 网络请求相关的方法 */
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
          this.goodslist[type].list.push(...res.data.list);
          this.goodslist[type].page = page;
          // 当上拉加载完一次之后执行下面函数让 scroll 能够再次上拉加载更多
          this.$refs.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
  /* #home {
    padding-top: 44px;
    position: relative;
  } */
  .nav_bar_home {
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  .tab-control1 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 44px;
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