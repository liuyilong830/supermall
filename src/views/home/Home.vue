<template>
  <div id="home">
    <nav-bar class="nav_bar_home">
      <div slot="center">购物街</div>
    </nav-bar>
    <h2>Home</h2>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'Home',
    components: {
      NavBar
    }
  }
</script>

<style>
  .nav_bar_home {
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }
</style>