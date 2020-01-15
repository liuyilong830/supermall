<template>
  <div>
    <nav-bar class='nav-bar'>
      <div slot='center'>购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import { mapGetters } from 'vuex'
  export default {
    name: 'ShopCar',
    components: {
      NavBar,
      CartList
    },
    computed: {
      /* cartLength() {
        // return this.$store.state.cartList.length;
        return this.$store.getters.cartLength;  //  调用 vuex 中 getters 中的方法
      } */
      // mapGetters 的两种写法
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        length: 'cartLength'  //  起别名
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }
</style>