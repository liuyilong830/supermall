<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .tabbar{
    background-color: #f6f6f6;
    box-shadow: 0 -2px 4px #f7ebeb;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>