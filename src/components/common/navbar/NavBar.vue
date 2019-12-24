<template>
  <div class="nav_bar">
    <div class="nav_bar_left"><slot name="left"></slot></div>
    <div class="nav_bar_center"><slot name="center"></slot></div>
    <div class="nav_bar_right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style>
  .nav_bar {
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    display: flex;
  }
  .nav_bar_left,.nav_bar_right {
    width: 60px;
  }
  .nav_bar_center {
    flex: 1;
  }
</style>