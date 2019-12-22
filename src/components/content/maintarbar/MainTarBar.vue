<template>
  <tab-bar>
    <tab-bar-item link='/home'>
      <img slot="tabbar_icon" src="~assets/images/tabbar/home.svg" alt="">
      <img slot="tabbar_icon_active" src="~assets/images/tabbar/home2.svg" alt="">
      <div slot="tabbar_text">首页</div>
    </tab-bar-item>
    <tab-bar-item link='/categroy'>
      <img slot="tabbar_icon" src="~assets/images/tabbar/fenlei.svg" alt="">
      <img slot="tabbar_icon_active" src="~assets/images/tabbar/fenlei2.svg" alt="">
      <div slot="tabbar_text">分类</div>
    </tab-bar-item>
    <tab-bar-item link='/shopcar'>
      <img slot="tabbar_icon" src="~assets/images/tabbar/shopcar.svg" alt="">
      <img slot="tabbar_icon_active" src="~assets/images/tabbar/shopcar2.svg" alt="">
      <div slot="tabbar_text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link='/profile'>
      <img slot="tabbar_icon" src="~assets/images/tabbar/profile.svg" alt="">
      <img slot="tabbar_icon_active" src="~assets/images/tabbar/profile2.svg" alt="">
      <div slot="tabbar_text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>