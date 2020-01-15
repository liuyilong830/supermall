<template>
  <div>
    <b-scroll class='wrapper'>
      <cart-list-item v-for='(item,index) in cartList' :key='index' :product='item' />
    </b-scroll>
    
  </div>
</template>

<script>
  import BScroll from 'components/common/better-scroll/BScroll'
  import CartListItem from './CartListItem'
  import { mapGetters } from 'vuex'
  export default {
    name: 'CartList',
    components: {
      BScroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
  .wrapper {
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
</style>